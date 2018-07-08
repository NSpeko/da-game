!function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(module,__webpack_exports__,__webpack_require__){"use strict";function countingTask(){const SIGN_ARRAY=["-","+","*"],MAX_COUNTING_NUM=20,sign=SIGN_ARRAY[Math.floor(Math.random()*SIGN_ARRAY.length)],firstNum=getRandomCountNum(MAX_COUNTING_NUM),secondNum=getRandomCountNum(MAX_COUNTING_NUM),task=`${firstNum} ${sign} ${secondNum}`,answer=eval(task);return[task,answer]}__webpack_require__.d(__webpack_exports__,"a",function(){return countingTask});const getRandomCountNum=e=>Math.round(Math.random()*e)},function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"PLAYER_PATH",function(){return W}),n.d(a,"rebuildCanvas",function(){return m}),n.d(a,"PLAYER_FEMALE_NUM",function(){return G}),n.d(a,"PLAYER_MALE_NUM",function(){return Y}),n.d(a,"TASKSLIST",function(){return X}),n.d(a,"MODAL_DELATION",function(){return z}),n.d(a,"SPEECH_DELATION",function(){return K}),n.d(a,"HEAL",function(){return J}),n.d(a,"ATTACK",function(){return V}),n.d(a,"ENEMY_PATH",function(){return v}),n.d(a,"SPELL_IMAGE_PATH",function(){return j}),n.d(a,"SPELL_SOUND_PATH",function(){return D}),n.d(a,"MAX_HEAL_POINTS",function(){return U}),n.d(a,"TOP_COUNT",function(){return F}),n.d(a,"WRAP",function(){return x}),n.d(a,"VERTICAL_WRAP",function(){return P}),n.d(a,"spellCanvas",function(){return o}),n.d(a,"spellContext",function(){return r}),n.d(a,"actorsCanvas",function(){return i}),n.d(a,"actorsContext",function(){return c}),n.d(a,"CANVAS_WIDTH",function(){return l}),n.d(a,"PX",function(){return h}),n.d(a,"CANVAS_HEIGHT",function(){return d}),n.d(a,"NAME_SIZE",function(){return C}),n.d(a,"HP_WRAP_PLAYER",function(){return N}),n.d(a,"NAME_WRAP_PLAYER",function(){return k}),n.d(a,"NAME_WRAP_ENEMY",function(){return L}),n.d(a,"HP_WRAP_ENEMY",function(){return S}),n.d(a,"HP_LINE_HEIGHT",function(){return H}),n.d(a,"EFFECT_DURATION",function(){return R}),n.d(a,"LVL_SIZE",function(){return O}),n.d(a,"LVL_WRAP",function(){return B}),n.d(a,"PLAYER_WIDTH",function(){return g}),n.d(a,"PLAYER_HEIGHT",function(){return p}),n.d(a,"ENEMY_WIDTH",function(){return y}),n.d(a,"ENEMY_HEIGHT",function(){return f}),n.d(a,"HEAD_WIDTH",function(){return w}),n.d(a,"HEAD_HEIGHT",function(){return E}),n.d(a,"BODY_WIDTH",function(){return I}),n.d(a,"BODY_HEIGHT",function(){return b}),n.d(a,"WEAPON_WIDTH",function(){return _}),n.d(a,"WEAPON_HEIGHT",function(){return A}),n.d(a,"LEGS_WIDTH",function(){return M}),n.d(a,"LEGS_HEIGHT",function(){return T}),n.d(a,"KEYBOARDEVENT",function(){return q});const s=e=>new Promise(t=>{const n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=function(){200===this.status&&t(this.response)},n.send()}),o=document.getElementById("spellCanvas"),r=o.getContext("2d"),i=document.getElementById("actors"),c=i.getContext("2d");let l=document.getElementById("gameWindow").offsetWidth,d=350;i.style.marginLeft=`-${l}px`;const u=()=>l/800;let h=u();function m(){l=document.getElementById("gameWindow").offsetWidth,h=u(),d=350*h,i.style.marginLeft=`-${l}px`,o.width=l,o.height=d,i.width=l,i.height=d}const g=150,p=150,y=1.3*g,f=1.3*p,w=y/2.5,E=f/2.5,I=y,b=f/2,_=y/2,A=f/2,M=y/1.25,T=f/1.5,x=40,P=30,N=50,k=15,S=65,L=30,C=18,H=10,R=50,O=50,B=10,v="../resources/images/enemy",W="../resources/images/player",G=1,Y=2,j="../resources/images/spell/",D="../resources/audio/spell/",U=310,J=30,V=60,F=10,X=["counting","translation","speech","capitals","animalSounds","flag","animals"],q={ENTER:13},z=2e3,K=800;let Q=[];class Z{constructor(e,t,n,a,s,o,r){this.name=e,this.image=new Image,this.image.src=`${j}${t}`,this.sound=new Audio(`${D}${n}`),this.width=a,this.height=s,this.step={x:o,y:r},Q.push(this)}}new class extends Z{constructor(e,t,n,a,s,o,r){super(e,t,n,a,s,o,r),this.type="flying"}}("Fireball","fireball.png","fireball.ogg",100,100,10,20),new class extends Z{constructor(e,t,n,a,s,o,r){super(e,t,n,a,s,0,o),this.type="drop"}}("Meteor","meteor.png","meteor.ogg",200,200,12),new class extends Z{constructor(e,t,n,a,s,o,r){super(e,t,n,a,s,o,0),this.type="straight"}}("Arrow","arrow.png","arrow.ogg",100,100,12),new class extends Z{constructor(e,t,n,a,s,o,r){super(e,t,n,a,s,o,r),this.type="jiggling"}}("Star","star.png","star.ogg",100,100,12,8),new class extends Z{constructor(e,t,n,a,s,o,r){super(e,t,n,a,s,0,0),this.type="heal"}}("Heal","heal.png","heal.ogg",200,200);const ee=()=>{const e=["adj","type","name","head","body","weapon","legs"],t={};return s("/resources/dictionaries/enemies-dictionary.json").then(n=>new Promise(a=>{const{enemies:s}=JSON.parse(n);e.forEach(e=>((e,t,n)=>new Promise(a=>{let s;for(;!s;)(s=e[t][Math.round(Math.random()*e[t].length)])&&(n[t]=s,a(s))}))(s,e,t)),a(t)})).catch(e=>{throw new Error(e)})};var te=n(0);const ne="/resources/dictionaries/speech-dictionary.json";const ae="/resources/dictionaries/languages-dictionary.json";let se,oe;class re{constructor(e,t,n,a){this.place={x:e*h,y:t*h},this.type=n,this.name=a||"John Smith",this.healPoints=U}redraw(){this.clearImage(),this.drawImage(),this.drawInfo(),this.drawHP()}drawName(e){let t=0;"enemy"===this.type?t=L*h:"player"===this.type&&(t=k*h),c.font=`${C*h}px Verdana`,c.fillStyle="red",c.textAlign="center",c.fillText(this.name,this.place.x-e*h,this.place.y-t),c.fillStyle="black",c.textAlign="center",c.strokeText(this.name,this.place.x-e*h,this.place.y-t)}drawHP(e){const t=this.healPoints/U;let n=0;"enemy"===this.type?n=S*h:"player"===this.type&&(n=N*h),c.fillStyle="red",c.fillRect(this.place.x-e*h,this.place.y-n,t*this.image.width,H*h),c.fillStyle="black",c.strokeRect(this.place.x-e*h,this.place.y-n,this.image.width,H*h)}rebuild(e,t){this.place={x:e,y:t},"enemy"===this.type?(this.image.width=y*h,this.image.height=f*h):"player"===this.type&&(this.image.width=g*h,this.image.height=p*h),this.redraw()}heal(e){r.drawImage(e.image,this.place.x-this.image.width/4,this.place.y,e.width,e.height),this.healPoints<=U-J?this.healPoints+=J:this.healPoints=U,this.effect(),setTimeout(()=>{r.clearRect(this.place.x-this.image.width/4,this.place.y,e.width,e.height)},500)}effect(e){this.clearImage(),setTimeout(()=>{this.clearImage(),this.redraw()},e)}damaged(){this.healPoints-V>0?(this.healPoints-=V,this.effect(R)):this.loose()}}class ie extends re{constructor(e,t,n,a,s,o){super(e,t,"enemy",s),this.image={head:o.head,body:o.body,weapon:o.weapon,legs:o.legs,width:a.width,height:a.height},this.healPoints=U,this.redraw()}drawInfo(){this.drawName(0),this.drawHP(this.image.width/3)}drawImage(){c.drawImage(this.image.legs,this.place.x-I*h/6,this.place.y+b*h/1.5+E*h/3,M*h,T*h),c.drawImage(this.image.body,this.place.x-I*h/3.5,this.place.y+E*h/4,I*h,b*h),c.drawImage(this.image.head,this.place.x-I*h/50,this.place.y-E*h/3,w*h,E*h),c.drawImage(this.image.weapon,this.place.x-1.1*_*h,this.place.y+(E*h-A/1.5*h),_*h,A*h)}loose(){oe.win(),ce()}clearImage(){c.clearRect(this.place.x-this.image.width/2,this.place.y,1.3*this.image.width,this.image.height)}}function ce(){const e=new Image;e.width=y*h,e.height=f*h,async function(){const e=await ee(),t=`${e.adj} ${e.type} ${e.name}`,n=`${v}/head/head_${e.head}.png`,a=new Image;a.width=w*h,a.heigth=E*h,a.src=n;const s=`${v}/torso/torso_${e.body}.png`,o=new Image;o.width=I*h,o.heigth=b*h,o.src=s;const r=`${v}/weapon/weapon_${e.weapon}.png`,i=new Image;i.width=_*h,i.heigth=A*h,i.src=r;const c=`${v}/legs/legs_${e.legs}.png`,l=new Image;return l.width=M*h,l.heigth=T*h,l.src=c,[t,{head:a,body:o,weapon:i,legs:l}]}().then(([t,n])=>{se=new ie(l-y-x*h,d-f-P*h,"enemy",e,t,n)})}class le extends re{constructor(e,t,n,a,s){super(e,t,"player",s),this.score=0,this.image=a,this.redraw(),this.healPoints=U}drawImage(){c.drawImage(this.image,this.place.x,this.place.y,this.image.width,this.image.height)}drawInfo(){this.drawName(-this.image.width/3),this.drawHP(this.place.x/3),this.drawLevel()}drawLevel(){c.font=`${O*h}px Verdana`,c.fillStyle="orange",c.textAlign="center",c.fillText(this.score+1,l/2-this.score*h,B*h+O*h)}win(){this.score+=1,ce()}getTop(e,t,n){let a=t;return e.push(n),e.length<t&&(a=e.length),e.sort((e,t)=>t.score-e.score),[a,e]}createGameScoreList(e,t){const n=$("#gameWindow");n.append("<h3>Score List</h3>");const a=document.createElement("P");a.innerText=`Your Score: ${t.score}`,n.append(a);let s=F;[s,e]=this.getTop(e,s,t);for(let t=0;t<s;t+=1){const a=document.createElement("h3");a.innerText=`${t+1}. ${e[t].name} ${e[t].score} `,n.append(a)}}loose(){const e=$("#gameWindow");$("#onlyLoggedUserContent")[0].style.display="none",e.toggleClass("main-game-container main-score-container bg-light");let t=[];localStorage.scoreAll&&(t=JSON.parse(localStorage.scoreAll));const n={name:this.name,score:this.score};this.createGameScoreList(t,n),e.append('<button class="btn btn-primary" onclick="location.reload();">Repeat?</button>'),localStorage.scoreAll=JSON.stringify(t),this.healPoints=U}clearImage(){c.clearRect(this.place.x,this.place.y,this.image.width,this.image.heigth)}}function de(){const e=JSON.parse(localStorage.getItem("user"));e&&e.gender&&e.name&&(!function(e,t){const n=new Image,s=`PLAYER_${e.toUpperCase()}_NUM`,o=Math.ceil(Math.random()*a[s]);n.src=`${W}/hero_${e}_${o}.png`,n.width=g*h,n.height=p*h,oe=new le(x*h,d-p-P*h,"player",n,t)}(e.gender,e.name),ce())}function ue(e,t,n){!function(e){e.sound.loop=!0,e.sound.play()}(e);let a=function(e,t,n){let{x:a}=e.place;"player"===e.type&&(a+=e.image.width/2);"drop"===n.type&&(a=t.place.x);return a}(t,n,e),s=function(e,t){let n=e.place.y+e.image.height/4;"drop"===t.type&&(n=0);return n}(n,e),o=Math.abs(t.place.x-n.place.x+se.image.width/2+oe.image.width/2);if("player"===t.type&&(o+=n.image.width/2),"heal"===e.type)t.heal(e),ge(e);else{const i=setInterval(()=>{r.clearRect(a,s,e.width*h,e.height*h),[a,s]=function(e,t,n,a,s){let o,r=e,i=t;o=e>=s-s/4?4:e>=s/2?3:e<=s/4?1:2;switch(a.type){case"flying":if(r>=s/2-s/12&&r<=s/2+s/12)i-=0;else if("enemy"===n.type)switch(o){case 1:i+=a.step.y*h;break;case 2:i+=a.step.y*(h/2);break;case 3:i-=a.step.y*(h/2);break;case 4:i-=a.step.y*h}else if("player"===n.type)switch(o){case 1:i-=a.step.y*h;break;case 2:i-=a.step.y*(h/2);break;case 3:i+=a.step.y*(h/6);break;case 4:i+=a.step.y*(h/2)}break;case"straight":i+=a.step.y*h;break;case"jiggling":i+=a.step.y*h,a.step.y*=-1;break;case"drop":i+=a.step.y*h}"player"===n.type?r+=a.step.x:r-=a.step.x;return[r,i]}(a,s,t,e,o),r.drawImage(e.image,a,s,e.width*h,e.height*h),"player"===t.type?a>=n.place.x&&s>=n.place.y&&he(e,n,i,a,s,r):a<=n.place.x+n.image.width/2&&s>=n.place.y&&he(e,n,i,a,s,r)},24)}}function he(e,t,n,a,s,o){!function(e,t){ge(e),t.damaged()}(e,t),function(e,t=0,n=0,a,s,o){clearInterval(e),a.clearRect(t,n,s,o)}(n,a,s,o,e.width*h,e.height*h)}function me(){ue(function(){const e=Math.floor(Math.random()*Q.length);return Q[e]}(),se,oe)}function ge(e){e.sound.pause(),e.sound.currentTime=0}de();const pe="/resources/dictionaries/capitals-dictionary.json";const ye="/resources/dictionaries/animalSounds-dictionary.json";const fe="/resources/dictionaries/countryFlags-dictionary.json",we="/resources/images/tasks/flags/";const Ee="/resources/dictionaries/animals-dictionary.json",Ie="/resources/images/tasks/animals/";function be(e,t,n){$("#userModalTaskContainer").empty(),$("#modalFooter").empty(),async function(e,t,n){let a,o,r,i;switch(X[Math.floor(Math.random()*X.length)]){case"counting":o="Count",a="number",[r,i]=Object(te.a)();break;case"translation":o="Translate",a="text",[r,i]=await s(ae).then(e=>new Promise(t=>{t(JSON.parse(e))})).then(e=>new Promise(t=>{let n;for(;!n;)(n=e[Math.round(Math.random()*e.length)])&&t([n.eng,n.rus])})).catch(e=>{throw new Error(e)});break;case"capitals":o="Write capital",a="text",[r,i]=await s(pe).then(e=>new Promise(t=>{t(JSON.parse(e))})).then(e=>new Promise(t=>{let n;for(;!n;)(n=e[Math.round(Math.random()*e.length)])&&t([n.country,n.capital])})).catch(e=>{throw new Error(e)});break;case"animalSounds":o="Write animal",a="text",[r,i]=await s(ye).then(e=>new Promise(t=>{t(JSON.parse(e))})).then(e=>new Promise(t=>{let n;for(;!n;)(n=e[Math.round(Math.random()*e.length)])&&t([n.sound,n.name])})).catch(e=>{throw new Error(e)});break;case"flag":o="Who's is this flag?",a="text",r="";const[e,t]=await s(fe).then(e=>new Promise(t=>{t(JSON.parse(e))})).then(e=>new Promise(t=>{let n;for(;!n;)(n=e[Math.round(Math.random()*e.length)])&&t([`${we}${n.image}`,n.country])})).catch(e=>{throw new Error(e)});i=t,_e(e);break;case"animals":o="Who is it?",a="text",r="";const[n,c]=await s(Ee).then(e=>new Promise(t=>{t(JSON.parse(e))})).then(e=>new Promise(t=>{let n;for(;!n;)(n=e[Math.round(Math.random()*e.length)])&&t([`${Ie}${n.image}`,n.name])})).catch(e=>{throw new Error(e)});i=c,_e(n);break;case"speech":o="Write what you hear",a="text",r="",i=await s(ne).then(e=>new Promise(t=>{t(JSON.parse(e))})).then(e=>new Promise(t=>{let n;for(;!n;)(n=e[Math.round(Math.random()*e.length)])&&t(n.eng)})).catch(e=>{throw new Error(e)}),setTimeout(()=>{Ae(i)},K),function(e){const t=document.createElement("button");t.setAttribute("class","btn btn-danger float-right"),t.setAttribute("id","repeatTask"),t.innerHTML="Repeat",t.addEventListener("click",()=>{Ae(e)}),document.getElementById("modalFooter").appendChild(t)}(i)}(function(e,t){const n=document.createElement("h3");n.setAttribute("id","taskQuiz"),n.innerText=`${e}: ${t}`,document.getElementById("userModalTaskContainer").appendChild(n)})(o,r),function(e){const t=document.createElement("input");t.classList.add("form-control"),t.setAttribute("id","userAnswer"),t.setAttribute("type",`${e}`),document.getElementById("userModalTaskContainer").appendChild(t),document.onkeypress=(()=>{document.getElementById("userAnswer").focus()})}(a),function(){const e=document.createElement("button");e.setAttribute("class","btn btn-primary float-left"),e.setAttribute("id","submitTask"),e.setAttribute("data-dismiss","modal"),e.innerHTML="Submit",document.getElementById("modalFooter").appendChild(e)}(),document.getElementById("submitTask").addEventListener("click",()=>{!function(e,t,n,a){const s=document.getElementById("userAnswer").value,o=document.getElementById("taskQuiz");o.style.color="red",e.toString().toLowerCase()===s.toLowerCase().trim()?(o.innerText="RIGHT!",setInterval(ue(t,n,a),z)):(o.innerText=`WRONG! Answer is '${e}'`,setInterval(me(),z));o.style.color="black"}(i,e,t,n)}),document.getElementById("userAnswer").addEventListener("keyup",e=>{e.preventDefault(),e.keyCode===q.ENTER&&document.getElementById("submitTask").click()})}(e,t,n)}function _e(e){const t=document.createElement("img");t.setAttribute("src",e),t.setAttribute("width","50%"),t.style.border="black 1px solid",document.getElementById("userModalTaskContainer").appendChild(t)}function Ae(e){const t=window.speechSynthesis;t.getVoices();const n=new SpeechSynthesisUtterance(e);n.lang="en-US",n.pitch=.7,t.speak(n)}!function(){const e=document.getElementById("spellMenu"),t=document.getElementById("healMenu");Q.forEach(n=>{const a=function(e){const t=document.createElement("button");t.setAttribute("class","btn btn-primary btn-lg btn-block"),t.textContent=e.name;const n=e.image;return n.width=30*h,n.height=30*h,t.appendChild(n),t.setAttribute("data-toggle","modal"),t.setAttribute("data-target","#solveGameTaskModal"),t}(n);"heal"===n.type?(a.addEventListener("click",()=>{be(n,oe,oe)}),t.appendChild(a)):(a.addEventListener("click",()=>{be(n,oe,se)}),e.appendChild(a))})}(),document.getElementById("loginSubmit").addEventListener("click",()=>{const e=document.getElementById("userName").value,t=Array.from(document.querySelectorAll(".user-gender")).filter(e=>e.checked)[0].value;e&&t&&(document.getElementsByClassName("game-menu")[0].style.display="block",function(e,t){const n=new Me(e,t);n.name&&n.gender&&(localStorage.user=JSON.stringify(n),document.getElementById("onlyLoggedUserContent").style.display="block");de()}(e,t),document.getElementById("logInModal").classList.toggle("not-displayed"),window.location=`${window.location.href.split("?")[0]}?session=${Date.now()}`)});class Me{constructor(e,t){this.name=e,this.gender=t}}window.onload=(()=>{document.getElementById("logInModalOpener").onclick=function(){document.getElementById("logInModal").classList.toggle("not-displayed")},document.getElementById("closeLogInModal").onclick=function(){document.getElementById("logInModal").classList.toggle("not-displayed")},window.onclick=(e=>{e.target===document.getElementById("logInModal")&&document.getElementById("logInModal").classList.toggle("not-displayed")}),document.getElementsByClassName("game-menu")[0].style.top=`-${d}px`,localStorage.user?$("body").toggleClass("bg-secondary"):(document.getElementsByClassName("game-menu")[0].style.display="none",document.getElementById("logInModalOpener").click()),$("document").ready(()=>{setTimeout(()=>{$("#pageLoaderSpinnerElement").toggleClass("not-displayed"),$("#onlyLoggedUserContent").toggleClass("not-displayed"),$("body").toggleClass("bg-secondary")},200)})}),window.onresize=m(),setInterval(()=>{m(),document.getElementsByClassName("game-menu")[0].style.top=`-${d}px`,se&&se.rebuild(l-se.image.width-x*h,d-se.image.height-P*h),oe&&oe.rebuild(x,d-oe.image.height-P*h)},500),document.getElementById("menu").addEventListener("click",()=>{document.getElementById("gameMenu").classList.toggle("hidden")})},function(e,t,n){e.exports=n(1)}]);