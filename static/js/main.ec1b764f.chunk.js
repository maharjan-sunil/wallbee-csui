(this["webpackJsonpwallbee-csui"]=this["webpackJsonpwallbee-csui"]||[]).push([[0],{36:function(e,t,n){e.exports=n(63)},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"loadPostFromDatabase",(function(){return b})),n.d(a,"addPostToDatabase",(function(){return h})),n.d(a,"removePostFromDatabase",(function(){return v})),n.d(a,"loadPost",(function(){return E})),n.d(a,"addPost",(function(){return O})),n.d(a,"removePost",(function(){return j}));var r=n(1),o=n.n(r),c=n(20),i=n.n(c),u=n(17),l=n(11),s=n(24),p=n(34),d=n(35),m=n(28);m.initializeApp({apiKey:"AIzaSyDsL2Wqo7JuGvoRdC9OGCM1kgSQnEjRdg0",authDomain:"photowall-fed6b.firebaseapp.com",databaseURL:"https://photowall-fed6b.firebaseio.com",projectId:"photowall-fed6b",storageBucket:"photowall-fed6b.appspot.com",messagingSenderId:"309997986645",appId:"1:309997986645:web:9aebca64745479491ec5dc"});var f=m.database();function b(){return function(e){return f.ref("posts").once("value").then((function(t){var n=[];t.forEach((function(e){n.push(e.val())})),e(E(n))})).catch((function(e){console.log(e)}))}}function h(e){return function(t){return f.ref("posts").update(Object(d.a)({},e.id,e)).then((function(){t(O(e))})).catch((function(e){console.log("error from db ".concat(e))}))}}function v(e,t){return function(n){return f.ref("posts/".concat(t)).remove().then((function(){n(j(e))})).catch((function(e){console.log(e)}))}}function E(e){return{type:"LOAD",post:e}}function O(e){return{type:"ADD",post:e}}function j(e){return{type:"REMOVE",index:e}}var g=n(12),y=n(13),D=n(14),k=n(15),P=n(3),w=function(e){Object(k.a)(n,e);var t=Object(D.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return o.a.createElement("h1",null," ",this.props.Title," ")}}]),n}(r.Component);var x=function(e){var t=e.post;return o.a.createElement("figure",{className:"figure"},o.a.createElement("img",{className:"photo",src:t.imageLink,alt:t.description}),o.a.createElement("figcaption",null,o.a.createElement("p",null,t.description)),o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{className:"remove-button",onClick:function(){e.removePostFromDatabase(e.index,e.id)}},"Remove")))};var N=function(e){return o.a.createElement("div",null,o.a.createElement(u.b,{className:"addIcon",to:"/addPhotos"}),o.a.createElement("div",{className:"photoGrid"},e.posts.sort((function(e,t){return t.id-e.id})).map((function(t,n){return o.a.createElement(x,Object.assign({key:n,post:t,index:n},e))}))))},S=n(22),C=function(e){Object(k.a)(n,e);var t=Object(D.a)(n);function n(){var e;return Object(g.a)(this,n),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(S.a)(e)),e}return Object(y.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.elements.link.value,n=e.target.elements.description.value,a={id:Number(new Date),description:n,imageLink:t};t&&n&&(this.props.addPostToDatabase(a),this.props.onHistory.push("/"))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Photowall"),o.a.createElement("div",{className:"form"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",placeholder:"Link",name:"link"}),o.a.createElement("input",{type:"text",placeholder:"Description",name:"description"}),o.a.createElement("button",null,"Post"))))}}]),n}(r.Component),L=function(e){Object(k.a)(n,e);var t=Object(D.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"componentDidMount",value:function(){this.props.loadPostFromDatabase()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(P.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",null,o.a.createElement(w,{Title:"Covid 2019"}),o.a.createElement(N,e.props))}}),o.a.createElement(P.a,{exact:!0,path:"/addPhotos",render:function(t){var n=t.history;return o.a.createElement(C,Object.assign({},e.props,{onHistory:n}))}}))}}]),n}(r.Component);var A=Object(s.b)((function(e){return{posts:e}}),(function(e){return Object(l.b)(a,e)}))(L),I=(n(62),n(25)),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE":return[].concat(Object(I.a)(e.slice(0,t.index)),Object(I.a)(e.slice(t.index+1)));case"ADD":return[].concat(Object(I.a)(e),[t.post]);case"LOAD":return t.post;default:return e}},F=Object(l.c)(R,Object(l.a)(p.a));i.a.render(o.a.createElement(s.a,{store:F},o.a.createElement(u.a,null,o.a.createElement(A,null))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.ec1b764f.chunk.js.map