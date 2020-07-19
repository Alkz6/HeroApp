(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{11:function(e,a,t){"use strict";t.r(a),t.d(a,"heroes",(function(){return r}));var r=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}]},25:function(e,a,t){e.exports=t(49)},49:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(17),l=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(8),o=t(3),i=t(1),m=(0,t(0).createContext)(),u="[auth] login",h="[auth] logout",p=function(e){var a=e.history,t=Object(r.useContext)(m).dispatch,c=localStorage.getItem("lastPath")||"/";return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",{className:"h1"},"Login"),n.a.createElement("hr",{className:"hr"}),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){t({type:u,payload:{name:"Alexis"}}),a.replace(c)}},"Login"))},d=function(){var e=Object(r.useContext)(m),a=e.user.name,t=e.dispatch,c=Object(i.g)();console.log(c);return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},n.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Asociaciones"),n.a.createElement("div",{className:"navbar-collapse"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(o.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel"},"Marvel"),n.a.createElement(o.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc"},"DC"),n.a.createElement(o.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search"},"Search"))),n.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("span",{className:"nav-item nav-link text-info"},a),n.a.createElement("button",{className:"nav-item nav-link btn",onClick:function(){c.replace("/login"),t({type:h}),localStorage.removeItem("user")}},"Logout"))))},v=t(11).heroes,b=function(e){var a=e.id,t=e.superhero,r=(e.publisher,e.alter_ego),c=e.first_appearance,l=e.characters;return n.a.createElement("div",{className:"card ms-3",style:{maxWidth:540}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img",alt:t})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},t),n.a.createElement("p",{className:"card-text"},r),r!==l&&n.a.createElement("p",{className:"card-text"}," ",l," "),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"},c)),n.a.createElement(o.b,{to:"./hero/".concat(a),className:"text-danger"},"M\xe1s...")))))},g=function(e){var a=e.publisher,t=Object(r.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto.'));return v.filter((function(a){return a.publisher===e}))}(a)}),[a]);return n.a.createElement("div",{className:"card-columns animate__animated animate__fadeIn"},t.map((function(e){return n.a.createElement(b,Object.assign({key:e.id},e))})))},E=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"h1"},"Marvel Screen"),n.a.createElement("hr",null),n.a.createElement(g,{publisher:"Marvel Comics"}))},f=t(11).heroes,C=function(e){var a=e.history,t=Object(i.i)().heroeId,c=Object(r.useMemo)((function(){return e=t,f.filter((function(a){return a.id===e}));var e}),[t]),l=Object(s.a)(c,1)[0];if(!l)return n.a.createElement(i.a,{to:"/"});var o=l.superhero,m=l.publisher,u=l.alter_ego,h=l.first_appearance,p=l.characters;return n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:"../assets/heroes/".concat(t,".jpg"),className:"img-thumbnail animate__animated animate__fadeInLeftBig",alt:o})),n.a.createElement("div",{className:"col-8 animate__animated animate__fadeIn"},n.a.createElement("h3",{className:"h3"},o),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("strong",null,"Alter ego:")," ",u),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("strong",null,"Publisher:")," ",m),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("strong",null,"First appaearance:")," ",h)),n.a.createElement("h5",{className:"h5"}," Characters "),n.a.createElement("p",null,p),n.a.createElement("button",{onClick:function(){a.length<=2?a.push("/"):a.goBack()},className:"btn btn-outline-dark"},"Return")))},N=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"h1"},"DC Screen"),n.a.createElement("hr",null),n.a.createElement(g,{publisher:"DC Comics"}))},_=t(24),y=t.n(_),k=t(12),S=t(9),M=t(11),O=function(e){var a=e.history,t=Object(i.h)(),c=y.a.parse(t.search).q,l=void 0===c?"":c,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.useState)(e),t=Object(s.a)(a,2),n=t[0],c=t[1],l=function(){c(e)},o=function(e){var a=e.target;c((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(k.a)({},a.name,a.value))}))};return[n,o,l]}({search:l}),m=Object(s.a)(o,2),u=m[0],h=m[1],p=u.search,d=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:M.heroes.filter((function(a){return e=e.toLowerCase(),a.superhero.toLowerCase().includes(e)}))}(l)}),[l]);return n.a.createElement("div",null,n.a.createElement("h1",null,"Search Screen"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5"},n.a.createElement("h4",null,"Search Form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(u.search),console.log(u.search.length),a.push("?q=".concat(u.search))}},n.a.createElement("input",{type:"text",placeholder:"Find your hero",name:"search",className:"form-control",onChange:h,value:p}),n.a.createElement("button",{className:"btn m-1 btn-block btn-outline-primary"},"Search..."))),n.a.createElement("div",{className:"col-7"},n.a.createElement("h4",null,"Results"),n.a.createElement("hr",null),""===l&&n.a.createElement("div",{className:"alert alert-info"},"Search a hero..."),""!==l&&0===d.length&&n.a.createElement("div",{className:"alert alert-danger"},'There is not a hero with "',l,'"'),d.map((function(e){return n.a.createElement(b,Object.assign({key:e.id},e))})))))},D=function(e){e.history;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement("div",{className:"container mt-3"},n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/marvel",component:E}),n.a.createElement(i.b,{exact:!0,path:"/hero/:heroeId",component:C}),n.a.createElement(i.b,{exact:!0,path:"/dc",component:N}),n.a.createElement(i.b,{exact:!0,path:"/search",component:O}),n.a.createElement(i.a,{to:"/marvel"}))))},w=t(13),j=function(e){var a=e.isAuthenticated,t=e.component,r=Object(w.a)(e,["isAuthenticated","component"]),c=r.location,l=c.pathname,s=void 0===l?"/":l,o=c.search,m=void 0===o?"":o;return console.log(r),localStorage.setItem("lastPath","".concat(s).concat(m)),n.a.createElement(i.b,Object.assign({},r,{component:function(e){return a?n.a.createElement(t,e):n.a.createElement(i.a,{to:"/login"})}}))},x=function(e){var a=e.isAuthenticated,t=e.component,r=Object(w.a)(e,["isAuthenticated","component"]);return n.a.createElement(i.b,Object.assign({},r,{component:function(e){return a?n.a.createElement(i.a,{to:"/"}):n.a.createElement(t,e)}}))},A=function(){var e=Object(r.useContext)(m).user.logged;return n.a.createElement(o.a,null,n.a.createElement("div",null,n.a.createElement(i.d,null,n.a.createElement(x,{exact:!0,path:"/login",component:p,isAuthenticated:e}),n.a.createElement(j,{path:"/",component:D,isAuthenticated:e}))))},B=(t(46),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u:return console.log("HERE!"),Object(S.a)(Object(S.a)({},a.payload),{},{logged:!0});case h:return{logged:!1};default:return e}}),J=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},I=function(){var e=Object(r.useReducer)(B,{},J),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(t))}),[t]),n.a.createElement(m.Provider,{value:{user:t,dispatch:c}},n.a.createElement(A,null))};l.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.84b4634c.chunk.js.map