(this.webpackJsonphometask=this.webpackJsonphometask||[]).push([[0],{12:function(e,t,n){e.exports={input:"SuperInputText_input__1P_Mf",superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},14:function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_",button:"SuperButton_button__cV79v"}},17:function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},18:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},24:function(e,t,n){e.exports={App:"App_App__1Sc4o"}},25:function(e,t,n){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8"}},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(23),s=n.n(a),i=(n(32),n(24)),o=n.n(i),j=n(7),u=n(2),l=n(6),b=n.n(l),d=n(0);var h=function(e){return Object(d.jsxs)("div",{className:b.a.message,children:[Object(d.jsx)("img",{src:e.avatar,className:b.a.avatar}),Object(d.jsx)("div",{className:b.a.angle}),Object(d.jsxs)("div",{className:b.a.content,children:[Object(d.jsx)("div",{className:b.a.name,children:e.name}),Object(d.jsx)("div",{className:b.a.text,children:e.message}),Object(d.jsx)("div",{className:b.a.time,children:e.time})]})]})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Kate",m="I need help",p="22:00";var f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(h,{avatar:x,name:O,message:m,time:p}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},_=n(5);var v=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[" ",e.affair.name," "]}),Object(d.jsxs)("span",{children:[" ",e.affair.priority," "]}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var g=function(e){var t=e.data.map((function(t){return Object(d.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(r.useState)(C),t=Object(_.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(_.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(g,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},N=n(27),S=n(25),y=n.n(S),w=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.error,a=e.totalUsers,s=e.onPressKey,i=y.a.error;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,onKeyPress:s,className:i}),Object(d.jsx)("button",{onClick:r,children:"add"}),Object(d.jsx)("span",{children:a}),Object(d.jsx)("div",{children:c})]})},T=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(_.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(_.a)(o,2),u=j[0],l=j[1],b=function(e){alert("Hello, ".concat(e,"!")),i(""),n(e)},h=t.length;return Object(d.jsx)(w,{name:s,setNameCallback:function(e){" "===e.currentTarget.value?l("name is required"):i(e.currentTarget.value)},addUser:function(){return b(s)},error:u,totalUsers:h,onPressKey:function(e){"Enter"===e.key&&b(s)}})},I=n(41);var A=function(){var e=Object(r.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(T,{users:n,addUserCallback:function(e){var t={_id:Object(I.a)(),name:e};c([t].concat(Object(N.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},M=n(8),P=n(9),E=n(12),F=n.n(E),B=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=(e.className,e.spanClassName),i=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(F.a.error," ").concat(s||""),j="".concat(F.a.input," ").concat(a?F.a.errorInput:F.a.superInput," ");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:j},i)),a&&Object(d.jsx)("span",{className:o,children:a})]})},H=n(17),K=n.n(H),W=n(14),J=n.n(W),U=function(e){var t=e.red,n=(e.className,Object(P.a)(e,["red","className"])),r="".concat(J.a.button," ").concat(t?J.a.red:J.a.default);return Object(d.jsx)("button",Object(M.a)({className:r},n))},G=n(18),X=n.n(G),L=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(r||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(d.jsx)("span",{className:X.a.spanClassName,children:c})]})};var R=function(){var e=Object(r.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(_.a)(i,2),j=o[0],u=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:K.a.column,children:[Object(d.jsx)(B,{value:n,onChangeText:c,onEnter:s,error:a}),Object(d.jsx)(B,{className:K.a.blue}),Object(d.jsx)(U,{children:"default"}),Object(d.jsx)(U,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(U,{disabled:!0,children:"disabled"}),Object(d.jsx)(L,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)(L,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var q=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)(k,{}),Object(d.jsx)(A,{}),Object(d.jsx)(R,{})]})};var z=function(){return Object(d.jsx)("div",{children:"Junior"})};var Z=function(){return Object(d.jsx)("div",{children:"JuniorPlus"})};var Q=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},V="/pre-junior",Y="/junior",$="/junior-plus";var D=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(u.a,{to:V})}}),Object(d.jsx)(u.b,{path:V,render:function(){return Object(d.jsx)(q,{})}}),Object(d.jsx)(u.b,{path:Y,render:function(){return Object(d.jsx)(z,{})}}),Object(d.jsx)(u.b,{path:$,render:function(){return Object(d.jsx)(Z,{})}}),"\u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",Object(d.jsx)(u.b,{render:function(){return Object(d.jsx)(Q,{})}})]})})};var ee=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(j.b,{to:V,children:" pre-junior "}),Object(d.jsx)(j.b,{to:Y,children:" junior "})]})};var te=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(ee,{}),Object(d.jsx)(D,{})]})})};var ne=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(te,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ne,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",content:"Message_content__Ltxgc",angle:"Message_angle__1T-oN",text:"Message_text__2fXBO",name:"Message_name__Tzmp0",time:"Message_time__HOFTG"}}},[[39,1,2]]]);
//# sourceMappingURL=main.07aef263.chunk.js.map