(this.webpackJsonpaulas=this.webpackJsonpaulas||[]).push([[0],{32:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),c=a.n(r),i=a(5),s=a(7),l=a(9),d=a(10),m=a(12),u=a(11),p=a(13),f=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-expand-sm bg-success navbar-dark"},o.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Resultados da Rodada"))}}]),t}(n.Component),v=a(22),b=a.n(v),h=a(15),g=a(31),y=a(6),E=(a(19),function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},e.titulo),o.a.createElement(i.b,{to:"/detalhes/".concat(e.id),className:"btn btn-danger btn-block"},"Ver Detalhes")))});function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={times:[]},a.loadtimes=Object(g.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],!navigator.onLine){e.next=5;break}y.firestore().collection("times").orderBy("nome").onSnapshot((function(e){e.docChanges().forEach((function(e){"added"===e.type&&t.push(w({id:e.doc.id},e.doc.data())),"modified"===e.type&&(t=t.map((function(t){return t.id===e.doc.id?w({id:e.doc.id},e.doc.data()):t}))),"removed"===e.type&&(t=t.filter((function(t){return t.id!==e.doc.id})))})),a.setState({times:t}),localStorage.setItem("times",JSON.stringify(t))})),e.next=13;break;case 5:return e.next=7,JSON.parse(localStorage.getItem("times"));case 7:if(e.t0=e.sent,e.t0){e.next=10;break}e.t0=[];case 10:n=e.t0,t=n,a.setState({times:t});case 13:case"end":return e.stop()}}),e)}))),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadtimes()}},{key:"render",value:function(){return o.a.createElement("div",{className:"container mt-2"},o.a.createElement("div",{className:"card-columns"},this.state.times.map((function(e){return o.a.createElement(E,{key:e.id,id:e.id,titulo:e.nome})}))))}}]),t}(n.Component);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={id:"",nome:"",autor:"",descricao:"",minimo:0,foto:"",lance_nome:"",lance_email:"",lance_fone:"",lance_valor:"",aviso:"",partidas:[]},a.handleChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={nome:a.state.lance_nome,email:a.state.lance_email,fone:a.state.lance_fone,valor:a.state.lance_valor},n=y.firestore();try{n.collection("times").doc(a.state.id).collection("partidas").add(t),a.setState({aviso:"Ok! Resultado Salvo Com Sucesso"})}catch(o){a.setState({aviso:"Erro: "+o})}a.tempoAviso()},a.tempoAviso=function(){setTimeout((function(){a.setState({aviso:""})}),5e3)},a.loadpartidas=function(){var e=a.props.match.params,t=[];y.firestore().collection("times").doc(e.id).collection("partidas").orderBy("nome").onSnapshot((function(e){e.docChanges().forEach((function(e){"added"===e.type&&t.push(S({id:e.doc.id},e.doc.data())),"modified"===e.type&&(t=t.map((function(t){return t.id===e.doc.id?S({id:e.doc.id},e.doc.data()):t}))),"removed"===e.type&&(t=t.filter((function(t){return t.id!==e.doc.id})))})),a.setState({partidas:t})}))},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;y.firestore().collection("times").doc(t.id).get().then((function(t){t.exists?e.setState(S({id:t.id},t.data())):console.log("Erro...")})).catch((function(e){console.log("Erro de conex\xe3o: ",e)})),this.loadpartidas()}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6 mt-2"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},this.state.nome))),o.a.createElement("div",null,this.state.partidas.map((function(e){return o.a.createElement("div",{className:"col s12",key:e.id},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col s10"},o.a.createElement("span",{className:"card-title left-align"},e.nome))))))})))),o.a.createElement("div",{className:"col-sm-6 mt-2"},o.a.createElement("button",{className:"btn btn-danger btn-lg btn-block"},"Adicione o Resultado do Jogo"),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},"* Os Valores dos Jogos S\xe3o Atualizados ao Final da Rodada"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"input-group mt-3"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement("i",{className:"far fa-user"}))),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Adicione o Resultado do Jogo",name:"lance_nome",onChange:this.handleChange,value:this.state.lance_nome})),o.a.createElement("div",{className:"input-group mt-3"}),o.a.createElement("div",{className:"input-group mt-3"}),o.a.createElement("input",{type:"submit",className:"btn btn-danger float-right mt-3",value:"Enviar Resultado"}),o.a.createElement(i.b,{to:"/",className:"btn btn-success float-left mt-3"},"Voltar")))),""!==this.state.aviso?o.a.createElement("div",{className:"alert alert-info mt-3"},this.state.aviso):"")))}}]),t}(n.Component);var P=function(){return o.a.createElement(i.a,null,o.a.createElement(f,null),o.a.createElement(s.a,{path:"/",exact:!0,component:j}),o.a.createElement(s.a,{path:"/detalhes/:id",component:k}))},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}y.initializeApp({apiKey:"AIzaSyDZzKxlWOGZnOu6B85ZL-17EWq0DeOYMPo",authDomain:"trabalhoedecio2.firebaseapp.com",databaseURL:"https://trabalhoedecio2.firebaseio.com",projectId:"trabalhoedecio2",storageBucket:"trabalhoedecio2.appspot.com",messagingSenderId:"274761494120",appId:"1:274761494120:web:fd4ef898bc9cb4fd7095dd"}),c.a.render(o.a.createElement(P,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/timesAvenida",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/timesAvenida","/custom-service-worker.js");A?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.2ab5ff71.chunk.js.map