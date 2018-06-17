!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";n.d(t,"M",function(){return w}),n.d(t,"y",function(){return W}),n.d(t,"F",function(){return J}),n.d(t,"s",function(){return D}),n.d(t,"B",function(){return K}),n.d(t,"u",function(){return q}),n.d(t,"C",function(){return G}),n.d(t,"l",function(){return C}),n.d(t,"a",function(){return B}),n.d(t,"h",function(){return N}),n.d(t,"D",function(){return O}),n.d(t,"E",function(){return j}),n.d(t,"t",function(){return R}),n.d(t,"G",function(){return H}),n.d(t,"K",function(){return S}),n.d(t,"H",function(){return T}),n.d(t,"N",function(){return r}),n.d(t,"L",function(){return s}),n.d(t,"e",function(){return o}),n.d(t,"A",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"v",function(){return u}),n.d(t,"n",function(){return h}),n.d(t,"w",function(){return g}),n.d(t,"m",function(){return m}),n.d(t,"f",function(){return p}),n.d(t,"q",function(){return f}),n.d(t,"r",function(){return y}),n.d(t,"z",function(){return b}),n.d(t,"x",function(){return A}),n.d(t,"i",function(){return _}),n.d(t,"g",function(){return x}),n.d(t,"k",function(){return I}),n.d(t,"j",function(){return E}),n.d(t,"c",function(){return k}),n.d(t,"b",function(){return L}),n.d(t,"J",function(){return M}),n.d(t,"I",function(){return $}),n.d(t,"p",function(){return P}),n.d(t,"o",function(){return v}),console.log("1");const i=document.getElementById("spellCanvas"),r=i.getContext("2d"),a=document.getElementById("actors"),s=a.getContext("2d");let o=document.getElementById("gameWindow").offsetWidth;a.style.left=`-${o}px`;const c=()=>o/800;let l=c(),d=350;const u=25,h=55,g=15,m=10,p=50,f=50,y=10;function w(){o=document.getElementById("gameWindow").offsetWidth,l=c(),S=o/30,T=(d=350*l)/3,I=(_=1.5*(b=100*l))/2.5,E=(x=1.5*(A=100*l))/2.5,k=_,L=x/2,M=_/2,$=x/2,P=_/1.25,v=x/1.5,T=d/10,a.style.left=`-${o}px`,i.width=o,i.height=d,a.width=o,a.height=d}let b=150,A=150,_=1.5*b,x=1.5*A,I=_/2.5,E=x/2.5,k=_,L=x/2,M=_/2,$=x/2,P=_/1.5,v=x/3,S=o/15,T=d/10;const C=30,B=60,N="../resources/images/enemy",O="../resources/images/spell/",j="../resources/audio/spell/",R=300*l,H=10,W=1,J=["counting","translation","speech"],D=20,K=["-","+","*"],q=2e3,G=800},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return countingTask});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);const countingTask=()=>{const signArray=_constants__WEBPACK_IMPORTED_MODULE_0__.B,sign=signArray[~~(Math.random()*signArray.length)],firstNum=getRandomCountNum(_constants__WEBPACK_IMPORTED_MODULE_0__.s),secondNum=getRandomCountNum(_constants__WEBPACK_IMPORTED_MODULE_0__.s),task=`${firstNum} ${sign} ${secondNum}`,answer=eval(task);return[task,answer]},getRandomCountNum=e=>Math.round(Math.random()*e)},function(e,t,n){"use strict";n.r(t);const i=e=>new Promise(t=>{const n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=function(){200===this.status&&t(this.response)},n.send()});var r=n(0);let a=[];class s{constructor(e,t,n,i,s,o,c){this.name=e,this.image=new Image,this.image.src=`${r.D}${t}`,this.sound=new Audio(`${r.E}${n}`),this.width=i*r.A,this.height=s*r.A,this.step={x:o*r.A,y:c*r.A},a.push(this)}}new class extends s{constructor(e,t,n,i,r,a,s){super(e,t,n,i,r,a,s),this.type="flying"}}("Fireball","fireball.png","fireball.ogg",100,100,10,20),new class extends s{constructor(e,t,n,i,r,a,s){super(e,t,n,i,r,0,a),this.type="drop"}}("Meteor","meteor.png","meteor.ogg",200,200,12),new class extends s{constructor(e,t,n,i,r,a,s){super(e,t,n,i,r,a,0),this.type="straight"}}("Arrow","arrow.png","arrow.ogg",100,100,12),new class extends s{constructor(e,t,n,i,r,a,s){super(e,t,n,i,r,a,s),this.type="jiggling"}}("Star","star.png","star.ogg",100,100,12,8),new class extends s{constructor(e,t,n,i,r,a,s){super(e,t,n,i,r,0,0),this.type="heal"}}("Heal","heal.png","heal.ogg",200,200);const o=()=>{const e=["adj","type","name","head","body","weapon","legs"],t={};return i("/resources/dictionaries/enemies-dictionary.json").then(n=>new Promise(i=>{const r=JSON.parse(n).enemies;e.forEach(e=>((e,t,n)=>new Promise(i=>{let r;for(;!r;)(r=e[t][Math.round(Math.random()*e[t].length)])&&(n[t]=r,i(r))}))(r,e,t)),i(t)})).catch(e=>{throw new Error(e)})};var c=n(1);const l=()=>{return i("/resources/dictionaries/speech-dictionary.json").then(e=>new Promise(t=>{t(JSON.parse(e))})).then(e=>new Promise(t=>{let n;for(;!n;)(n=e[Math.round(Math.random()*e.length)])&&t(n.eng)})).catch(e=>{throw new Error(e)})};const d=()=>{return i("/resources/dictionaries/languages-dictionary.json").then(e=>new Promise(t=>{t(JSON.parse(e))})).then(e=>new Promise(t=>{let n;for(;!n;)(n=e[Math.round(Math.random()*e.length)])&&t([n.eng,n.rus])})).catch(e=>{throw new Error(e)})};let u,h;class g{constructor(e,t,n,i){this.place={x:e*r.A,y:t*r.A},this.type=n,this.name=i||"John Smith",this.healPoints=r.t}redraw(){this.clearImage(),this.drawImage(),this.drawInfo(),this.drawHP()}drawName(e){r.L.font=`${r.v*r.A}px Verdana`,r.L.fillStyle="black",r.L.textAlign="center",r.L.fillText(this.name,this.place.x-e*r.A,this.place.y-r.w*r.A)}drawHP(e){let t=this.healPoints/r.t;r.L.fillStyle="red",r.L.fillRect(this.place.x-e,this.place.y-r.n*r.A,t*this.image.width,r.m*r.A),r.L.fillStyle="black",r.L.strokeRect(this.place.x-e,this.place.y-r.n*r.A,this.image.width,r.m*r.A)}rebuild(e,t){this.place={x:e*r.A,y:t*r.A},this.redraw()}heal(e){r.N.drawImage(e.image,this.place.x-this.image.width/4,this.place.y,e.width,e.height),this.healPoints<=r.t-r.l?this.healPoints+=r.l:this.healPoints=r.t,this.effect(),setTimeout(()=>{r.N.clearRect(this.place.x-this.image.width/4,this.place.y,e.width,e.height)},500)}effect(e){this.clearImage(),setTimeout(()=>{this.clearImage(),this.redraw()},e)}damaged(){this.healPoints-r.a>0?(this.healPoints-=r.a,this.effect(r.f)):this.loose()}}class m extends g{constructor(e,t,n,i,a){super(e,t,"player",a),this.score=0,this.image=i,this.redraw(),this.healPoints=r.t}drawImage(){r.L.drawImage(this.image,this.place.x,this.place.y,this.image.width,this.image.height)}drawInfo(){this.drawName(-this.image.width/3),this.drawHP(this.place.x),this.drawLevel()}drawLevel(){r.L.font=`${r.q*r.A}px Verdana`,r.L.fillStyle="orange",r.L.textAlign="center",r.L.fillText(this.score+1,r.e/2-this.score*r.A,r.r*r.A+r.q*r.A)}win(){this.score+=1,f()}getTop(e,t,n){let i=t;return e.push(n),e.length<t&&(i=e.length),e.sort((e,t)=>t.score-e.score),[i,e]}createGameScoreList(e,t){const n=$("#gameWindow");n.append("<h3>Score List</h3>");let i=document.createElement("P");i.innerText=`Your Score: ${t.score}`,n.append(i);let a=r.G;[a,e]=this.getTop(e,a,t);for(let t=0;t<a;t+=1){let i=document.createElement("h3");i.innerText=`${t+1}. ${e[t].name} ${e[t].score} `,n.append(i)}}loose(){const e=$("#gameWindow");$("#onlyLoggedUserContent")[0].style.display="none",e.toggleClass("main-game-container main-score-container bg-light");let t=[];localStorage.scoreAll&&(t=JSON.parse(localStorage.scoreAll));const n={name:this.name,score:this.score};this.createGameScoreList(t,n),e.append('<button class="btn btn-primary" onclick="location.reload();">Repeat?</button>'),localStorage.scoreAll=JSON.stringify(t),this.healPoints=r.t}clearImage(){r.L.clearRect(this.place.x,this.place.y,this.image.width,this.image.heigth)}}class p extends g{constructor(e,t,n,i,a,s){super(e,t,"enemy",a),this.image={head:s.head,body:s.body,weapon:s.weapon,legs:s.legs,width:i.width,height:i.height},this.healPoints=r.t,this.redraw()}drawInfo(){this.drawName(this.name.length),this.drawHP(this.image.width/3)}drawImage(){r.L.drawImage(this.image.legs,this.place.x-r.c*r.A/6,this.place.y+r.b*r.A/1.5+r.j*r.A/3,this.image.legs.width,this.image.legs.heigth),r.L.drawImage(this.image.body,this.place.x-r.c*r.A/4.2,this.place.y+r.j*r.A/2,this.image.body.width,this.image.body.heigth),r.L.drawImage(this.image.head,this.place.x-r.c*r.A/50,this.place.y,this.image.head.width,this.image.head.heigth),r.L.drawImage(this.image.weapon,this.place.x-.9*r.J*r.A,this.place.y+r.j*r.A-r.I/2*r.A,this.image.weapon.width,this.image.weapon.heigth)}loose(){h.win(),f()}clearImage(){r.L.clearRect(this.place.x-this.image.width/2,this.place.y,1.3*this.image.width,this.image.height)}}function f(){const e=new Image;e.width=r.i*r.A,e.height=r.g*r.A,async function(){const e=await o(),t=`${e.adj} ${e.type} ${e.name}`,n=`${r.h}/head/head_${e.head}.png`;let i=new Image;i.width=r.k,i.heigth=r.j,i.src=n;const a=`${r.h}/torso/torso_${e.body}.png`;let s=new Image;s.width=r.c,s.heigth=r.b,s.src=a;const c=`${r.h}/weapon/weapon_${e.weapon}.png`;let l=new Image;l.width=r.J,l.heigth=r.I,l.src=c;const d=`${r.h}/legs/legs_${e.legs}.png`;let u=new Image;return u.width=r.p,u.heigth=r.o,u.src=d,[t,{head:i,body:s,weapon:l,legs:u}]}().then(([t,n])=>{u=new p(r.e-r.i-4*r.K,r.d-r.g-.8*r.H,"enemy",e,t,n)})}function y(){let e=JSON.parse(localStorage.getItem("user"));e&&e.gender&&e.name&&(!function(e,t){const n=new Image,i=Math.ceil(Math.random()*r.y);n.src=`../resources/images/player/hero_${e}_${i}.png`,n.width=r.z*r.A,n.height=r.x*r.A,h=new m(r.K/3,r.d-r.x-r.H,"player",n,t)}(e.gender,e.name),f())}function w(e,t,n){!function(e){e.sound.loop=!0,e.sound.play()}(e);let i=function(e,t,n){let i=e.place.x;"player"===e.type&&(i+=e.image.width/2);"drop"===n.type&&(i=t.place.x);return i}(t,n,e),a=function(e,t){let n=e.place.y+e.image.height/4;"drop"===t.type&&(n=0);return n}(n,e);const s=Math.abs(t.place.x-n.place.x+u.image.width/2+h.image.width/2);if("heal"===e.type)t.heal(e),_(e);else{let o=setInterval(function(){r.N.clearRect(i,a,e.width,e.height),[i,a]=function(e,t,n,i,r){let a,s=e,o=t;a=e>=r-r/4?4:e>=r/2?3:e<=r/4?1:2;switch(i.type){case"flying":if(s>=r/2-r/12&&s<=r/2+r/12)o-=0;else if("enemy"===n.type)switch(a){case 1:o+=i.step.y/2;break;case 2:o+=i.step.y/3;break;case 3:o-=i.step.y/3;break;case 4:o-=i.step.y/2}else if("player"===n.type)switch(a){case 1:o-=i.step.y/2;break;case 2:o-=i.step.y/3;break;case 3:o+=i.step.y/6;break;case 4:o+=i.step.y/3}break;case"straight":o+=i.step.y;break;case"jiggling":o+=i.step.y,i.step.y*=-1;break;case"drop":o+=i.step.y}"player"===n.type?s+=i.step.x:s-=i.step.x;return[s,o]}(i,a,t,e,s),r.N.drawImage(e.image,i,a,e.width,e.height),"player"===t.type?i>=n.place.x&&a>=n.place.y&&b(e,n,o,i,a,r.N):i<=n.place.x+n.image.width/2&&a>=n.place.y&&b(e,n,o,i,a,r.N)},24)}}function b(e,t,n,i,r,a){!function(e,t){_(e),t.damaged()}(e,t),function(e,t=0,n=0,i,r=canvasWidth,a=canvasHeight){clearInterval(e),i.clearRect(t,n,r,a)}(n,i,r,a,e.width,e.height)}function A(){w(function(){let e=~~(Math.random()*a.length);return a[e]}(),u,h)}function _(e){e.sound.pause(),e.sound.currentTime=0}function x(e,t,n){$("#userModalTaskContainer").empty(),$("#modalFooter").empty(),async function(e,t,n){let i,a,s,o;switch(r.F[~~(Math.random()*r.F.length)]){case"counting":a="Count",i="number",[s,o]=Object(c.a)();break;case"translation":a="Translate",i="text",[s,o]=await d();break;case"speech":a="Write what you hear",i="text",s="",o=await l(),setTimeout(function(){I(o)},r.C),function(e){const t=document.createElement("button");t.setAttribute("class","btn btn-danger float-right"),t.setAttribute("id","repeatTask"),t.innerHTML="Repeat",t.addEventListener("click",function(){I(e)}),document.getElementById("modalFooter").appendChild(t)}(o)}(function(e,t){const n=document.createElement("h3");n.setAttribute("id","taskQuiz"),n.innerText=`${e}: ${t}`,document.getElementById("userModalTaskContainer").appendChild(n)})(a,s),function(e){const t=document.createElement("input");t.classList.add("form-control"),t.setAttribute("id","userAnswer"),t.setAttribute("type",`${e}`),document.getElementById("userModalTaskContainer").appendChild(t)}(i),function(){const e=document.createElement("button");e.setAttribute("class","btn btn-primary float-left"),e.setAttribute("id","submitTask"),e.setAttribute("data-dismiss","modal"),e.innerHTML="Submit",document.getElementById("modalFooter").appendChild(e)}(),document.getElementById("submitTask").addEventListener("click",function(){!function(e,t,n,i){const a=document.getElementById("userAnswer").value,s=document.getElementById("taskQuiz");s.style.color="red",e==a?(s.innerText="RIGHT!",setInterval(w(t,n,i),r.u)):(s.innerText=`WRONG! Answer is '${e}'`,setInterval(A(),r.u));s.style.color="black"}(o,e,t,n)})}(e,t,n)}function I(e){const t=window.speechSynthesis;t.getVoices();const n=new SpeechSynthesisUtterance(e);t.speak(n)}y(),function(){const e=document.getElementById("spellMenu"),t=document.getElementById("healMenu");a.forEach(n=>{let i=function(e){let t=document.createElement("button");t.setAttribute("class","btn btn-primary btn-lg btn-block"),t.textContent=e.name;const n=e.image;return n.width=30*r.A,n.height=30*r.A,t.appendChild(n),t.setAttribute("data-toggle","modal"),t.setAttribute("data-target","#solveGameTaskModal"),t}(n);"heal"===n.type?(i.addEventListener("click",function(){x(n,h,h)}),t.appendChild(i)):(i.addEventListener("click",function(){x(n,h,u)}),e.appendChild(i))})}(),document.getElementById("loginSubmit").addEventListener("click",function(){!function(e,t){const n=new E(e,t);n.name&&n.gender&&(localStorage.user=JSON.stringify(n),document.getElementById("onlyLoggedUserContent").style.display="block");y()}(document.getElementById("userName").value,Array.from(document.querySelectorAll(".user-gender")).filter(e=>e.checked)[0].value),$("#logInModal").modal("toggle")});class E{constructor(e,t){this.name=e,this.gender=t}}window.onload=function(){document.getElementsByClassName("game-menu")[0].style.top="-"+r.d+"px",localStorage.user?document.getElementById("onlyLoggedUserContent").style.display="block":document.getElementById("logInModalOpener").click()},window.onresize=r.M(),setInterval(function(){r.M(),u&&u.rebuild(r.e*r.A-3.2*r.i*r.A-r.K*r.A,r.d*r.A-r.g*r.A-3.8*r.H*r.A),h&&h.rebuild(r.K*r.A/3,r.d*r.A-r.x*r.A-4.5*r.H*r.A)},500),document.getElementById("menu").addEventListener("click",function(){document.getElementById("gameMenu").classList.toggle("hidden")})},function(e,t,n){e.exports=n(2)}]);