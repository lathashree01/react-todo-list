(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{51:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(9),c=n.n(s),i=(n(51),n(40)),r=n(36),d=n(17),l=n(18),u=n(14),j=n(22),b=n(20),h=n(3),p=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).handleDeleteTodo=o.handleDeleteTodo.bind(Object(u.a)(o)),o}return Object(l.a)(n,[{key:"handleDeleteTodo",value:function(){var e=this;window.confirm("Do you want to delete this?")&&this.props.setTodos((function(t){return t.filter((function(t){return t.id!==e.props.todo.id}))}))}},{key:"render",value:function(){return Object(h.jsx)("span",{role:"button",onClick:this.handleDeleteTodo,style:{color:"red",fontWeight:"bold",marginLeft:10},children:"X"})}}]),n}(a.a.Component),O=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).handleToggleTodo=o.handleToggleTodo.bind(Object(u.a)(o)),o}return Object(l.a)(n,[{key:"handleToggleTodo",value:function(e){var t=this.props.todos.map((function(t){return t.id===e.id?Object(r.a)(Object(r.a)({},t),{},{done:!t.done}):t}));this.props.setTodos(t)}},{key:"render",value:function(){var e=this;return this.props.todos.length?Object(h.jsx)("ul",{children:this.props.todos.map((function(t){return Object(h.jsxs)("li",{className:"list-style",children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"checkbox",className:"checkbox",defaultChecked:t.done}),t.text]}),Object(h.jsx)(p,{todo:t,className:"button-class",setTodos:e.props.setTodos})]},t.id)}))}):Object(h.jsx)("h3",{className:"no-todo",children:"No TO-Dos, enjoy your day."})}}]),n}(a.a.Component),f=n(88),x=n(87),T=n(86),m=n(84),v=n(85),g=n(83),y=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).passToParent=o.passToParent.bind(Object(u.a)(o)),o}return Object(l.a)(n,[{key:"passToParent",value:function(){this.props.onChangeState(!1)}},{key:"render",value:function(){return Object(h.jsxs)(x.a,{open:this.props.open,onClose:this.passToParent,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(h.jsx)(g.a,{id:"alert-dialog-title",children:"Info"}),Object(h.jsx)(m.a,{children:Object(h.jsx)(v.a,{id:"alert-dialog-description",children:"Can't add empty To-do"})}),Object(h.jsx)(T.a,{children:Object(h.jsx)(f.a,{onClick:this.passToParent,color:"primary",autoFocus:!0,children:" Ok "})})]})}}]),n}(a.a.Component),C=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).handleAddTodo=o.handleAddTodo.bind(Object(u.a)(o)),o.handleClose=o.handleClose.bind(Object(u.a)(o)),o.inputRef=a.a.createRef(),o.state={open:!1},o}return Object(l.a)(n,[{key:"handleClose",value:function(e){this.setState({open:e})}},{key:"handleAddTodo",value:function(e){if(e.preventDefault(),this.inputRef.current.value.trim().length>0){var t=e.target.elements.addTodo.value,n={id:Math.random(),text:t,done:!1};this.props.setTodos((function(e){return e.concat(n)})),this.inputRef.current.value=""}else this.setState({open:!0})}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:this.handleAddTodo,children:[Object(h.jsx)("input",{name:"addTodo",className:"add-todo-input",placeholder:"Type in your ToDo .. ",ref:this.inputRef}),Object(h.jsx)("button",{className:"button-class add-todo",type:"submit",children:"Add"})]}),Object(h.jsx)(y,{open:this.state.open,onChangeState:this.handleClose})]})}}]),n}(a.a.Component),k=(n(57),n(39));function D(){var e=a.a.useState([]),t=Object(i.a)(e,2),n=t[0],o=t[1],s=(new Date).toDateString();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"TO-DO List "}),Object(h.jsxs)("h3",{children:["Date : ",s]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"button-class update-diary",onClick:function(){},children:" Update to Diary "}),Object(h.jsx)("button",{className:"button-class  update-diary",onClick:function(){o((function(){return[]}))},children:" Clear All "}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(C,{setTodos:o})]}),Object(h.jsx)("div",{children:Object(h.jsx)(O,{todos:n,setTodos:o})}),Object(h.jsx)(k.a,{color:["#aac5f0","#a8e381","#ed93a7"],type:"circle",bg:!0})]})}var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),o(e),a(e),s(e),c(e)}))};c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(D,{className:"complete-page"})}),document.getElementById("root")),N()}},[[58,1,2]]]);
//# sourceMappingURL=main.0a8a8fcc.chunk.js.map