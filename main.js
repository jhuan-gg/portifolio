const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const experience=document.querySelector('.experience');
const lid=document.querySelector('.lid');
const laptop=document.querySelector('.laptop');
const typing=document.querySelector('#typing');
const output=document.querySelector('#terminal-output');
const headings=[['Tudo começa<br>com uma ideia<span>.</span>','Role para dar vida ao código.','01 / IDEA'],['Do conceito<br>ao código<span>.</span>','Cada linha é uma decisão.','02 / CODE'],['Construindo<br>o futuro<span>.</span>','Uma experiência pronta para ir ao ar.','03 / BUILD']];
const cmd='npm create next-app@latest studio';
const lines='✔ Initializing project...\n✔ Installing dependencies...\n\nexport default function Studio() {\n  return <Experience />;\n}\n\n$ npm run build\n✓ Compiled successfully.\n✓ Ready to deploy.';
const keyboardRows=[
 ['esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','●'],
 ['~','1','2','3','4','5','6','7','8','9','0','−','+','delete'],
 ['tab','Q','W','E','R','T','Y','U','I','O','P','[',']','|'],
 ['caps','A','S','D','F','G','H','J','K','L',';','’','return'],
 ['shift','Z','X','C','V','B','N','M',',','.','/','shift'],
 ['fn','⌃','⌥','⌘',' ','⌘','⌥','←','↑','→']
];
const keyboard=document.querySelector('.keys');
keyboardRows.forEach((labels,index)=>{
 const row=document.createElement('div');
 row.className='key-row';
 labels.forEach(label=>{
  const key=document.createElement('i');
  key.textContent=label;
  if(label===' ')key.className='space';
  else if(label.length>3)key.className='wide';
  row.append(key);
 });
 if(index===0)row.classList.add('function-row');
 keyboard.append(row);
});
function render(p){
 const chars=Math.floor(clamp((p-.34)/.22,0,1)*cmd.length);typing.textContent=cmd.slice(0,chars);
 output.textContent=lines.slice(0,Math.floor(clamp((p-.56)/.4,0,1)*lines.length));
 const phase=p<.32?0:p<.76?1:2;
 document.querySelector('#stage-title').innerHTML=headings[phase][0];
 document.querySelector('#stage-sub').textContent=headings[phase][1];
 document.querySelector('#step').textContent=headings[phase][2];
 document.querySelector('.track i').style.width=(p*100)+'%';
 if(!window.gsap){const path=document.querySelector('#orbitPath');const point=path.getPointAtLength(path.getTotalLength()*p);document.querySelector('#orbDot').setAttribute('cx',point.x);document.querySelector('#orbDot').setAttribute('cy',point.y);}
}
function onScroll(){const p=clamp(-experience.getBoundingClientRect().top/(experience.offsetHeight-innerHeight),0,1);if(!window.gsap||reduced)render(reduced?1:p);document.querySelector('.progress').style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+'%'}
window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);
if(window.gsap&&!reduced&&window.ScrollTrigger){
 gsap.registerPlugin(ScrollTrigger);if(window.MotionPathPlugin)gsap.registerPlugin(MotionPathPlugin);
 gsap.from('.hero-inner > *',{opacity:0,y:35,stagger:.15,duration:1,ease:'power3.out'});
 const state={p:0};gsap.to(state,{p:1,ease:'none',onUpdate:()=>render(state.p),scrollTrigger:{trigger:experience,start:'top top',end:'bottom bottom',scrub:.55}});
 if(window.MotionPathPlugin)gsap.to('#orbDot',{motionPath:{path:'#orbitPath',align:'#orbitPath',alignOrigin:[.5,.5]},ease:'none',scrollTrigger:{trigger:experience,start:'top top',end:'bottom bottom',scrub:1}});
 gsap.utils.toArray('.reveal,.project').forEach(el=>gsap.from(el,{y:70,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}}));
 // Reveal the portrait at a readable size in its own reserved space.
 const portrait=document.querySelector('.profile-portrait');
 const portraitTimeline=gsap.timeline({
  scrollTrigger:{trigger:'.portrait-stage',start:'top 92%',end:'bottom 38%',scrub:.35,invalidateOnRefresh:true}
 });
 portraitTimeline.fromTo(portrait,{scale:.28,borderRadius:'50%'},{scale:1,borderRadius:'5%',duration:.31,ease:'power2.out'})
   .to(portrait,{scale:1,duration:.38,ease:'none'})
   .to(portrait,{scale:.28,borderRadius:'50%',duration:.31,ease:'power2.inOut'});
 gsap.from('footer h2',{y:140,scale:.8,opacity:0,duration:1.3,ease:'bounce.out',scrollTrigger:{trigger:'footer',start:'top 75%'}});
}
onScroll();
function scramble(el){if(reduced)return;const target=el.dataset.text;let frame=0;const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';const id=setInterval(()=>{el.textContent=target.split('').map((c,i)=>c===' '||i<frame/2?c:letters[Math.floor(Math.random()*letters.length)]).join('');if(++frame>target.length*2){clearInterval(id);el.textContent=target}},28)}
const footerTitle=document.querySelector('.scramble');footerTitle.addEventListener('mouseenter',()=>scramble(footerTitle));new IntersectionObserver((entries,observer)=>{if(entries[0].isIntersecting){scramble(footerTitle);observer.disconnect()}},{threshold:.4}).observe(footerTitle);
document.querySelector('#top').addEventListener('click',()=>window.scrollTo({top:0,behavior:reduced?'instant':'smooth'}));

if(window.gsap&&window.ScrollTrigger&&!reduced){
 document.querySelectorAll('.stack-gallery .tech-group').forEach(group=>{
  const cards=group.querySelectorAll('.tech-card');
  const timeline=gsap.timeline({
   scrollTrigger:{trigger:group,start:'top 94%',end:'top 45%',scrub:.7}
  });
  timeline.from(cards,{
   opacity:0,y:65,rotationX:-55,scale:.82,transformOrigin:'50% 100%',
   stagger:.10,duration:.8,ease:'power2.out'
  });
  timeline.from(group.querySelectorAll('.tech-icon'),{
   rotationX:65,rotationZ:-18,scale:.65,stagger:.10,duration:.9,ease:'back.out(1.45)'
  },0.1);
 });
 if(matchMedia('(hover: hover) and (pointer: fine)').matches){
  document.querySelectorAll('.tech-card').forEach(card=>{
   const tile=card.querySelector('.tech-tile');
   const icon=card.querySelector('.tech-icon');
   const tiltX=gsap.quickTo(tile,'rotationX',{duration:.35,ease:'power3.out'});
   const tiltY=gsap.quickTo(tile,'rotationY',{duration:.35,ease:'power3.out'});
   card.addEventListener('pointerenter',()=>{
    gsap.to(tile,{y:-7,scale:1.055,duration:.35,ease:'power2.out'});
    gsap.to(icon,{z:48,rotationY:360,duration:.65,ease:'back.out(1.15)',overwrite:'auto'});
   });
   card.addEventListener('pointermove',event=>{
    const bounds=card.getBoundingClientRect();
    const x=(event.clientX-bounds.left)/bounds.width;
    const y=(event.clientY-bounds.top)/bounds.height;
    tiltX((.5-y)*26);
    tiltY((x-.5)*30);
    tile.style.setProperty('--px',(x*100)+'%');
    tile.style.setProperty('--py',(y*100)+'%');
   });
   card.addEventListener('pointerleave',()=>{
    gsap.to(tile,{y:0,scale:1,duration:.55,ease:'elastic.out(1,.65)'});
    tiltX(0);tiltY(0);
    gsap.to(icon,{z:24,rotationY:0,duration:.55,ease:'power3.out',overwrite:'auto'});
   });
  });
 }
}

const journeyRig=document.querySelector('.journey-rig');
const journeyLayer=document.querySelector('.journey-layer');
const journeyScreen=document.querySelector('#journey-screen');
const slots=[...document.querySelectorAll('.journey-slot')];
const screens={
 hero:'<div class="screen-bar"><b>JG / STUDIO</b><span>FULL STACK • BRASIL</span></div><p class="screen-label">FULL STACK DEVELOPER</p><p class="screen-title">Olá, eu sou<br>Jhuan Gabriel<span style="color:#baff69">.</span></p><p class="screen-description">SaaS, ERPs e AI-assisted development.</p><div class="screen-command">~ $ echo "Hello, world!"</div>',
 about:'<div class="screen-bar"><b>developer.ts</b><span>TypeScript</span></div><p class="screen-label">SOBRE MIM</p><p class="screen-title">Além do código.</p><p class="screen-description">Proatividade, escala e qualidade de ponta a ponta.</p><pre class="screen-code">const developer = {\n  name: "Jhuan Gabriel",\n  role: "Full Stack",\n  workflow: ["AI-assisted dev", "Manual coding", "Debugging"]\n};</pre>',
 stack:'<div class="screen-bar"><b>TECH STACK</b><span>31 COMPETÊNCIAS</span></div><p class="screen-label">BUILD / ENGINEER / DEPLOY</p><p class="screen-title">Meu universo.</p><p class="screen-description">Engenharia, código e IA a serviço da entrega.</p><div class="mini-grid"><span><img src="icons/react.svg" alt="">React</span><span><img src="icons/nodejs.svg" alt="">Node.js</span><span><img src="icons/postgresql.svg" alt="">Postgres</span><span><img src="icons/ai-assisted.svg" alt="">AI-assisted</span></div>',
 work:"<div class=\"screen-bar\"><b>git log --career</b><span>EXPERIÊNCIA</span></div><p class=\"screen-label\">SOFTWARE ENGINEERING</p><p class=\"screen-title\">Do legado à produção.</p><div class=\"screen-projects career-screen\"><div class=\"screen-project\"><small>FULL STACK · TEMPO INTEGRAL</small><strong>Priorit</strong><span class=\"screen-tasks\">Delphi → Node.js + React<br>ERP / SaaS multi-tenant</span></div><div class=\"screen-project\"><small>FULL STACK · AUTÔNOMO</small><strong>Freelance</strong><span class=\"screen-tasks\">Soluções SaaS<br>Plataformas web</span></div></div>",
 contact:'<div class="screen-bar"><b>JG / STUDIO</b><span>DISPONÍVEL</span></div><p class="screen-label">NEXT PROJECT</p><p class="screen-title">Vamos criar<br>algo incrível?</p><p class="screen-description">Toda grande ideia começa com uma conversa.</p><div class="screen-contact">gjhuan672@gmail.com</div>'
};
const scenes=slots.map((slot,index)=>({slot,index,section:slot.closest('section,footer'),name:slot.dataset.scene}));
const poses={
 hero:{rx:9,ry:-24,rz:-4,open:-9},
 about:{rx:11,ry:19,rz:2,open:0},
 stack:{rx:8,ry:-16,rz:-2,open:0},
 work:{rx:10,ry:20,rz:3,open:0},
 contact:{rx:12,ry:-20,rz:-4,open:-6}
};
// Pick a different sequence of spins for each page visit, with at least one
// full turn around each axis. Keep the sequence fixed while scrolling so
// reversing direction retraces the same motion smoothly.
const axes=['rx','ry','rz'];
const spinPatterns=axes.map(axis=>[axis]);
while(spinPatterns.length<scenes.length-2){
 const first=axes[Math.floor(Math.random()*axes.length)];
 const remaining=axes.filter(axis=>axis!==first);
 const second=remaining[Math.floor(Math.random()*remaining.length)];
 spinPatterns.push(Math.random()<.35?[...axes]:[first,second]);
}
for(let i=spinPatterns.length-1;i>0;i--){
 const j=Math.floor(Math.random()*(i+1));
 [spinPatterns[i],spinPatterns[j]]=[spinPatterns[j],spinPatterns[i]];
}
// The intro uses one restrained horizontal turn; subsequent transitions vary.
spinPatterns.unshift(['ry']);
const spinOffsets=[{rx:0,ry:0,rz:0}];
for(let i=1;i<scenes.length;i++){
 const offset={...spinOffsets[i-1]};
 if(!reduced){
  for(const axis of spinPatterns[i-1])offset[axis]+=(Math.random()<.5?-360:360);
 }
 spinOffsets.push(offset);
}

const state={x:0,y:0,scale:1,rx:0,ry:0,rz:0,open:0,opacity:0};
let currentView='';
let journeyInitialized=false;
let activeTween;
const lerp=(a,b,t)=>a+(b-a)*t;
function setView(name){
 if(name===currentView)return;
 currentView=name;
 journeyScreen.classList.toggle('active',name!=='process');
 if(name==='process')return;
 journeyScreen.dataset.view=name;
 journeyScreen.innerHTML=screens[name];
 if(window.gsap&&!reduced)gsap.fromTo(journeyScreen,{opacity:.3},{opacity:1,duration:.3,ease:'power2.out',overwrite:true});
}
function getPose(scene,mobile){
 const rect=scene.slot.getBoundingClientRect();
 const name=scene.name;
 const width=rect.width;
 const processProgress=clamp(-experience.getBoundingClientRect().top/(experience.offsetHeight-innerHeight),0,1);
 const openProgress=clamp(processProgress/.32,0,1);
 const pose=name==='process'?{rx:lerp(15,5,openProgress),ry:lerp(-22,0,openProgress),rz:0,open:lerp(-118,0,openProgress)}:poses[name];
 const centerX=rect.left+width/2;
 let centerY=rect.top+rect.height/2-width*.095;
 if(name==='process')centerY+=Math.min(width*.05,innerHeight*.055);
 const inRail=name==='stack'||name==='work';
 if(!mobile&&inRail){
  const railTop=scene.slot.parentElement.getBoundingClientRect().top;
  if(railTop<innerHeight*.5)centerY=clamp(centerY,innerHeight*.40,innerHeight*.70);
 }
 let scale=width/730*(mobile?(name==='process'?.86:.78):(name==='process'?.98:.89));
 let x=centerX-365;
 let y=centerY-730/3.6;
 let opacity=1;
 if(mobile){
  const topLimit=innerHeight*.25;
  const bottomLimit=innerHeight*.75;
  const dock=clamp((topLimit-centerY)/(topLimit+width*.42),0,1);
  const arriving=clamp((centerY-bottomLimit)/(innerHeight*.45),0,1);
  const compact=Math.max(dock,arriving);
  if(name!=='process'){
   scale=lerp(scale,Math.min(112,innerWidth*.30)/730,compact);
   x=lerp(x,innerWidth-Math.min(112,innerWidth*.30)/2-14-365,compact);
   y=lerp(y,innerHeight-Math.min(112,innerWidth*.30)*.46-22-730/3.6,compact);
  }else{
   y=clamp(centerY,innerHeight*.43,innerHeight*.67)-730/3.6;
   scale=Math.min(scale,(innerHeight*.46)/430);
  }
 }
 const offset=spinOffsets[scene.index];
 return {x,y,scale,rx:pose.rx+offset.rx,ry:pose.ry+offset.ry,rz:pose.rz+offset.rz,open:pose.open,opacity};
}
function drawJourney(){
 journeyLayer.style.opacity=state.opacity;
 journeyRig.style.opacity=1;
 journeyRig.style.transform='translate3d('+state.x+'px,'+state.y+'px,0) scale('+state.scale+') perspective(2700px) rotateX('+state.rx+'deg) rotateY('+state.ry+'deg) rotateZ('+state.rz+'deg)';
 lid.style.transform='rotateX('+state.open+'deg)';
}
function updateJourney(){
 const mobile=innerWidth<=900;
 const viewport=innerHeight;
 const focus=viewport*.46;
 let current=0;
 for(let i=1;i<scenes.length;i++){
  if(scenes[i].section.getBoundingClientRect().top<=focus)current=i;
 }
 let from=current;
 let to=current;
 let mix=0;
 const transition=viewport*(mobile?.34:.32);
 for(let i=1;i<scenes.length;i++){
  const distance=scenes[i].section.getBoundingClientRect().top-focus;
  if(Math.abs(distance)<transition){
   from=i-1;to=i;
   mix=clamp((transition-distance)/(transition*2),0,1);
   break;
  }
 }
 const a=getPose(scenes[from],mobile);
 const b=getPose(scenes[to],mobile);
 const smooth=mix*mix*(3-2*mix);
 const target={};
 for(const key of Object.keys(a))target[key]=lerp(a[key],b[key],smooth);
 if(from!==to&&!reduced){
  const turn=Math.sin(Math.PI*smooth);
  // Close the lid before showing the back, then reopen on arrival.
  const closeProgress=clamp(smooth/.23,0,1);
  const openProgress=clamp((smooth-.70)/.30,0,1);
  const ease=value=>value*value*(3-2*value);
  target.open=smooth<.70?lerp(a.open,-118,ease(closeProgress)):lerp(-118,b.open,ease(openProgress));
  // The full randomized rotation happens mainly while the lid is closed.
  const spinProgress=to===1?smooth:ease(clamp((smooth-.12)/.76,0,1));
  for(const axis of axes){
   const startOffset=spinOffsets[from][axis];
   const endOffset=spinOffsets[to][axis];
   target[axis]=lerp(a[axis]-startOffset,b[axis]-endOffset,smooth)
     +lerp(startOffset,endOffset,spinProgress);
  }
  if(to!==1){
   target.rx+=8*turn;
   target.rz+=(to%2===0?-1:1)*6*turn;
  }
  target.scale*=1-(mobile?.12:.20)*turn;
  target.y-=viewport*.07*turn;
  if(mobile){
   const travelWidth=Math.min(innerWidth*.66,330);
   const show=turn*turn;
   target.x=lerp(target.x,innerWidth/2-365,show);
   target.y=lerp(target.y,viewport*.64-730/3.6,show);
   target.scale=lerp(target.scale,travelWidth/730,show);
  }
 }
 if(mobile){
  const halfWidth=Math.min(innerWidth*.45,target.scale*730*.67);
  target.x=clamp(target.x+365,halfWidth+8,innerWidth-halfWidth-8)-365;
 }
 setView(scenes[mix>.5?to:from].name);
 if(!journeyInitialized||!window.gsap||reduced){
  Object.assign(state,target);drawJourney();journeyInitialized=true;
 }else{
  if(activeTween)activeTween.kill();
  activeTween=gsap.to(state,{...target,duration:mobile?.28:.4,ease:'power2.out',onUpdate:drawJourney});
 }
}
window.addEventListener('scroll',updateJourney,{passive:true});
window.addEventListener('resize',updateJourney);
if(window.ScrollTrigger)ScrollTrigger.addEventListener('refresh',updateJourney);
updateJourney();

const copyEmail=document.querySelector('.copy-email');
copyEmail.addEventListener('click',async()=>{
 try{await navigator.clipboard.writeText(document.querySelector('.mail').textContent.trim());copyEmail.textContent='Copiado!';setTimeout(()=>copyEmail.textContent='Copiar',2000);}
 catch{copyEmail.textContent='Use o link de e-mail';}
});
