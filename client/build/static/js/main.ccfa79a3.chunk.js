(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){e.exports=a(65)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),o=a.n(r),c=(a(38),a(12)),i=a(6),s=a(30),m=a(7),u=a(8),d=a(10),h=a(9),v=a(11);a(39);var f=function(e){var t=e.children;return l.a.createElement("div",{className:"jumbotron mt-4"},t)};var E=function(e){var t=e.icon,a=e.title,n=e.children;return l.a.createElement("div",{className:"card mt-4"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h3",null,l.a.createElement("strong",null,l.a.createElement("i",{className:"fa fa=".concat(t),"aria-hidden":"true"})," ",a))),l.a.createElement("div",{className:"card-body"},n))};var b=function(e){var t=e.q,a=e.handleInputChange,n=e.handleFormSubmit;return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Query"},l.a.createElement("strong",null,"Book")),l.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:t,placeholder:"Search Book",name:"q",onChange:a,required:!0})),l.a.createElement("div",{className:"pull-right"},l.a.createElement("button",{onClick:n,type:"submit",className:"btn btn-lg btn-danger float-right"},"Search")))},g=(a(40),function(e){var t=e.children;return l.a.createElement("ul",{className:"list-group"},t)});function p(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function k(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function N(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function w(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(41);var S=function(e){var t=e.title,a=e.subtitle,n=e.authors,r=e.link,o=e.description,c=e.image,i=e.Button;return l.a.createElement(p,null,l.a.createElement(N,{className:"flex-wrap-reverse"},l.a.createElement(w,{size:"md-8"},l.a.createElement("h3",null,t),a&&l.a.createElement("h5",{className:"font-italic"},a)),l.a.createElement(w,{size:"md-4"},l.a.createElement("div",{className:"btn-container"},l.a.createElement("a",{className:"btn btn-light",target:"_blank",rel:"noopener noreferrer",href:r},"View"),l.a.createElement(i,null)))),l.a.createElement(N,null,l.a.createElement(w,{size:"md-6"},l.a.createElement("p",{className:"font-italic small"}," Author: ",n))),l.a.createElement(N,null,l.a.createElement(w,{size:"12 sm-4 md-2"},l.a.createElement("img",{className:"img-thumbnail img-fluid w-100",src:c,alt:t})),l.a.createElement(w,{size:"12 sm-8 md-10"},l.a.createElement("p",null," ",o," "))))};var B=function(){return l.a.createElement("footer",null,l.a.createElement("hr",null),l.a.createElement("p",{className:"text-center"},l.a.createElement("i",null)," GBS&S built using React"))},y=a(15),j=a.n(y),I={getBooks:function(e){return j.a.get("/api/google",{params:{q:"title"+e}})},getSavedBooks:function(){return j.a.get("/api/books/")},deleteBook:function(e){return j.a.delete("/api/books/"+e)},saveBook:function(e){return j.a.post("/api/books",e)}},O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],q:"",message:"Search for a book"},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(s.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),a.getBooks()},a.getBooks=function(){I.getBooks(a.state.q).then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.handleBookSave=function(e){var t=a.state.books.find(function(t){return t.id===e});I.saveBook({googleId:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail}).then(function(){return a.getBooks()})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(k,null,l.a.createElement(N,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",{className:"text-center"},"Google Books Search & Save"),l.a.createElement("h2",{className:"text-center"},"Search for a Book. Save for later."))),l.a.createElement(w,{size:"md-12"},l.a.createElement(E,{title:"Book Search",icon:"far fa-book"},l.a.createElement(b,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q})))),l.a.createElement(N,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(E,{title:"Results"},this.state.books.length?l.a.createElement(g,null,this.state.books.map(function(t){return l.a.createElement(S,{key:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors.join(", "),description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,Button:function(){return l.a.createElement("button",{onClick:function(){return e.handleBookSave(t.id)},className:"btn btn-primary ml-2"},"Save")}})})):l.a.createElement("h2",{className:"text-center"},this.state.message)))),l.a.createElement(B,null))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={books:[]},a.getSavedBooks=function(){I.getSavedBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.handleBookDelete=function(e){I.deleteBook(e).then(function(e){return a.getSavedBooks()})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(k,null,l.a.createElement(N,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",{className:"text-center"},l.a.createElement("strong",null,"Google Books Search & Save")),l.a.createElement("h2",{className:"text-center"},"Search for a Book. Save for later.")))),l.a.createElement(N,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(E,{title:"Saved Books",icon:"download"},this.state.books.length?l.a.createElement(g,null,this.state.books.map(function(t){return l.a.createElement(S,{key:t._id,title:t.title,subtitle:t.subtitle,link:t.link,authors:t.authors.join(", "),description:t.description,image:t.image,Button:function(){return l.a.createElement("button",{onClick:function(){return e.handleBookDelete(t._id)},className:"btn btn-danger ml-2"},"Delete")}})})):l.a.createElement("h2",{className:"text-center"},"No Books Saved")))),l.a.createElement(B,null))}}]),t}(n.Component);var z=function(){return l.a.createElement(k,{fluid:!0},l.a.createElement(N,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Not Found"}))))))},C=(a(59),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1,width:window.innerWidth},a.updateWidth=function(){var e={width:window.innerWidth};a.state.open&&e.width>991&&(e.open=!1),a.setState(e)},a.toggleNav=function(){a.setState({open:!a.state.open})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-2"},l.a.createElement(c.b,{className:"navbar-brand",to:"/"},"Home"),l.a.createElement("button",{onClick:this.toggleNav,className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"".concat(this.state.open?"":"collapse ","navbar-collapse"),id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{onClick:this.toggleNav,className:"/"===window.location.pathname?"nav-link active":"nav-link",to:"/"},"Search")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{onClick:this.toggleNav,className:"/saved"===window.location.pathname?"nav-link active":"nav-link",to:"/saved"},"Saved")))))}}]),t}(n.Component));var q=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:O}),l.a.createElement(i.a,{exact:!0,path:"/saved",component:x}),l.a.createElement(i.a,{component:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.ccfa79a3.chunk.js.map