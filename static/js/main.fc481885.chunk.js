(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){t.exports=n(27)},20:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),s=(n(20),n(2)),u=n(3),l=n(14),i=n(5),d=n.n(i),m=n(6),p=Object(s.b)(function(t){return{todos:t.todos}},function(t){return{setTodos:function(e){return t({type:"SET_TODOS",todos:e})},handleDelete:function(e){return t({type:"DELETE_TODO",id:e})}}})(function(t){var e=t.todo,n=t.handleDelete;return a.a.createElement("tr",null,a.a.createElement("th",null,e.id),a.a.createElement("th",null,e.title),a.a.createElement("th",null,e.completed?"\u2705":"\u274c"),a.a.createElement("th",null,e.user.name),a.a.createElement("td",null,a.a.createElement("button",{type:"button",onClick:function(){return n(e.id)}},a.a.createElement("span",null,"\ud83d\uddd1"))))}),f=Object(s.b)(function(t){return{todos:t.todos,selectedSort:t.selectedSort}},function(t){return{setTodos:function(e){return t({type:"SET_TODOS",todos:e})},setSelectedSort:function(e){return t({type:"SET_SORT_TYPE",selectedSort:e})}}})(function(t){var e=t.todos,n=t.setTodos,r=t.selectedSort,o=t.setSelectedSort,c=function(t){var a=[];switch(t){case"id":a=Object(m.a)(e).sort(function(t,e){return t.id-e.id});break;case"title":a=Object(m.a)(e).sort(function(t,e){return t.title.localeCompare(e.title)});break;case"user":a=Object(m.a)(e).sort(function(t,e){return t.user.name.localeCompare(e.user.name)});break;case"completed":a=Object(m.a)(e).sort(function(t,e){return e.completed.toString().localeCompare(t.completed.toString())})}n(r===t?Object(m.a)(e).reverse():a),o(t)};return a.a.createElement("div",null,a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{className:"title",onClick:function(){return c("id")}},"Sort by Id"),a.a.createElement("th",{className:"title",onClick:function(){return c("title")}},"Sort by Title"),a.a.createElement("th",{className:"title",onClick:function(){return c("completed")}},"Sort if is completed"),a.a.createElement("th",{className:"title",onClick:function(){return c("user")}},"Sort by Name"),a.a.createElement("th",{className:"title"},"Delete"))),a.a.createElement("tbody",null,e.map(function(t){return a.a.createElement(p,{todo:t,key:t.id})}))))}),E=function(){var t;return d.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(fetch("https://jsonplaceholder.typicode.com/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}})},b=function(){var t;return d.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(fetch("https://jsonplaceholder.typicode.com/users"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}})};var S=Object(s.b)(function(t){return{isLoading:t.isLoading,buttonStatus:t.buttonStatus}},function(t){return{setTodos:function(e){return t({type:"SET_TODOS",todos:e})},setIsLoading:function(e){return t({type:"SET_LOADING",isLoading:e})},setButtonStatus:function(e){return t({type:"SET_BUTTON",buttonStatus:e})}}})(function(t){var e=t.setTodos,n=t.isLoading,r=t.setIsLoading,o=t.buttonStatus,c=t.setButtonStatus;return n?a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"List of Todos"),a.a.createElement("h2",{className:"start-page"},"Loading...")):o?a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"List of Todos"),a.a.createElement("button",{className:"button",type:"button",onClick:function(){var t,n,a,o,s;return d.a.async(function(i){for(;;)switch(i.prev=i.next){case 0:return r(!0),i.next=3,d.a.awrap(Promise.all([E(),b()]));case 3:return t=i.sent,n=Object(l.a)(t,2),a=n[0],o=n[1],r(!1),c(!1),s=a.map(function(t){return Object(u.a)({},t,{user:o.find(function(e){return t.userId===e.id})})}),e(s),i.abrupt("return",s);case 12:case"end":return i.stop()}})}},"Load")):a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"List of Todos"),a.a.createElement(f,null))}),T=n(8),O=Object(T.b)(function(t,e){switch(e.type){case"SET_TODOS":return Object(u.a)({},t,{todos:e.todos});case"SET_LOADING":return Object(u.a)({},t,{isLoading:e.isLoading});case"SET_BUTTON":return Object(u.a)({},t,{buttonStatus:e.buttonStatus});case"SET_SORT_TYPE":return Object(u.a)({},t,{selectedSort:e.selectedSort});case"DELETE_TODO":return Object(u.a)({},t,{todos:t.todos.filter(function(t){return t.id!==e.id})});default:return t}},{todos:[],isLoading:!1,buttonStatus:!0,selectedSort:"id"});c.a.render(a.a.createElement(s.a,{store:O},a.a.createElement(S,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fc481885.chunk.js.map