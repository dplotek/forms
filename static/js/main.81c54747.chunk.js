(this["webpackJsonpforms-v2-git"]=this["webpackJsonpforms-v2-git"]||[]).push([[0],{24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var A,r,a,s,i,c,o,b,d,l,j,u,g,m,O,h,x,w,f,p,E,B,Q,M,D=n(1),v=n.n(D),C=n(15),S=n.n(C),I=(n(24),n(3)),y=n(4),k=n(7),z=n(2),Z=n(5),N=n(0),R=y.b.div(A||(A=Object(I.a)(["\n\twidth: 100%;\n"]))),T=y.b.form(r||(r=Object(I.a)(["\n\tbackground-color: #f4f4f4;\n\tpadding: 1.5rem;\n\tborder-radius: 3px;\n\tbox-shadow: 0px 0px 0px 18px rgba(0, 0, 0, 0.2);\n\tposition: relative;\n"]))),q=y.b.h1(a||(a=Object(I.a)(['\n\tcolor: #fff;\n\tfont-family: "Titillium Web", sans-serif;\n\ttext-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n\ttext-align: center;\n\tmargin: 4rem 0 2rem 0;\n']))),L=function(e){var t=e.children,n=e.title,A=e.handler;return Object(N.jsxs)(R,{children:[Object(N.jsx)(q,{children:n}),Object(N.jsx)(T,{onSubmit:A,children:t})]})},Y=y.b.div(s||(s=Object(I.a)(["\n\tmargin: 0;\n"]))),F=y.b.div(i||(i=Object(I.a)(["\n\tborder: 1px solid #c6c6c6;\n\tborder-radius: 3px;\n\tdisplay: flex;\n\tbackground-color: #fff;\n\talign-items: center;\n"]))),P=y.b.p(c||(c=Object(I.a)(["\n\tcolor: red;\n\tfont-size: 0.8rem;\n\tmargin: 0.5rem 0;\n\theight: 0.5rem;\n"]))),V=y.b.img(o||(o=Object(I.a)(["\n\twidth: auto;\n\theight: 100%;\n\tdisplay: flex;\n\tborder-right: 1px solid #c6c6c6;\n\tpadding: 0.2rem 1rem;\n\tmargin: 0.3rem 0;\n"]))),J=y.b.input(b||(b=Object(I.a)(["\n\tborder: none;\n\twidth: 100%;\n\tmargin: 0 1rem;\n\tfont-size: 1rem;\n\t&:focus {\n\t\toutline: none;\n\t}\n"]))),K=y.b.textarea(d||(d=Object(I.a)(['\n\twidth: calc(100% - 20px);\n\tresize: none;\n\tpadding: 10px;\n\theight: 250px;\n\tborder: 1px solid #c6c6c6;\n\tborder-radius: 3px;\n\tfont-size: 1rem;\n\tfont-family: "Titillium Web", sans-serif;\n\tline-height: 1.5;\n\toutline: none;\n\tmargin-bottom: 0.5rem;\n']))),G=y.b.select(l||(l=Object(I.a)(["\n\tcolor: #000;\n\twidth: 100%;\n\theight: 40px;\n\tborder: none;\n\tfont-size: 1rem;\n\tborder-radius: 3px;\n\tpadding: 0 1rem;\n\t&:focus {\n\t\toutline: none;\n\t}\n"]))),H=function(e){var t=e.icon,n=e.children,A=e.errorMessage;return Object(N.jsxs)(Y,{children:[Object(N.jsxs)(F,{children:[Object(N.jsx)(V,{src:t}),n]}),Object(N.jsx)(P,{children:A})]})},W=n.p+"static/media/check.e18fa25d.svg",U=n(8),X=Object(D.createContext)(),$=function(e){var t=e.children,n=Object(D.useState)([]),A=Object(Z.a)(n,2),r=A[0],a=A[1],s=Object(D.useState)(!1),i=Object(Z.a)(s,2),c=i[0],o=i[1],b=Object(D.useState)(!0),d=Object(Z.a)(b,2),l=d[0],j=d[1],u=Object(D.useState)({registration:!1,sendMail:!1,signIn:!1,logOut:!1,recover:!1,subscribe:!1}),g=Object(Z.a)(u,2),m=g[0],O=g[1],h=Object(D.useState)([]),x=Object(Z.a)(h,2),w=x[0],f=x[1];return Object(N.jsx)(X.Provider,{value:{users:r,addNewUser:function(e){return a((function(t){return[].concat(Object(U.a)(t),[e])}))},logged:c,setLogged:o,showSubscribeForm:l,setShowSubscribeForm:j,showNotification:m,setShowNotification:O,loggedData:w,setLoggedData:f},children:t})},_=y.b.div(j||(j=Object(I.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: green;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tborder-radius: 3px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n"]))),ee=y.b.img(u||(u=Object(I.a)(["\n\twidth: 80px;\n\theight: 80px;\n"]))),te=function(e){var t=e.message,n=e.id,A=Object(D.useContext)(X).setShowNotification;return Object(D.useEffect)((function(){var e=setTimeout((function(){A((function(e){return Object(z.a)(Object(z.a)({},e),{},Object(k.a)({},n,!1))}))}),3e3);return function(){clearTimeout(e)}})),Object(N.jsxs)(_,{children:[Object(N.jsx)(ee,{src:W}),Object(N.jsx)("h4",{children:t})]})},ne=y.b.div(g||(g=Object(I.a)(["\n\twidth: ",";\n"])),(function(e){var t=e.size;return("big"===t?"100%":"medium"===t&&"50%")||"small"===t&&"40%"})),Ae=y.b.div(m||(m=Object(I.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]))),re=y.b.button(O||(O=Object(I.a)(["\n\theight: 3rem;\n\tborder: 1px solid #3a9a00;\n\tborder-radius: 3px;\n\tfont-size: 1rem;\n\tcolor: white;\n\ttext-shadow: 2px 2px 5px rgba(0, 0, 0, 0.52);\n\tfont-weight: 400;\n\tfont-size: 1.5rem;\n\tcursor: pointer;\n\twidth: 100%;\n\t","\n\t","\n"])),(function(e){return e.decline?"background-color: #f55668;":"background-color: #92cf2b;"}),(function(e){return"small"===e.size&&Object(y.a)(h||(h=Object(I.a)(["\n\t\t\tfont-size: 1.2rem;\n\t\t"])))})),ae=function(e){var t=e.size,n=e.decline,A=e.text,r=e.type,a=e.handler;return Object(N.jsx)(ne,{size:t,children:Object(N.jsx)(re,{decline:n,size:t,type:r,onClick:a,children:A})})},se=y.b.div(x||(x=Object(I.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-bottom: 1rem;\n"]))),ie=y.b.input.attrs({type:"checkbox"})(w||(w=Object(I.a)(['\n\tmargin-right: 15px;\n\twidth: 25px;\n\theight: 25px;\n\t&:checked::before {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\twidth: 15px;\n\t\theight: 15px;\n\t\tbackground-color: #92cf2b;\n\t\tborder: 4px solid white;\n\t\toutline: 1px solid black;\n\t\tborder-radius: 2px;\n\t\tcontent: "";\n\t\tfont-size: 14px;\n\t\tdisplay: flex;\n\t}\n']))),ce=y.b.label(f||(f=Object(I.a)(["\n\tcolor: #787878;\n\tdisplay: block;\n\t","\n"])),(function(e){return e.error&&"\n    color: red;\n"})),oe=function(e){var t=e.text,n=e.children,A=e.id,r=e.error,a="";switch(t){case"terms":a="I have read and accept the terms of use.";break;case"copy":a="Send a copy to my Email";break;case"remember":a="Remember me";break;default:a=""}return Object(N.jsxs)(se,{children:[n,Object(N.jsx)(ce,{htmlFor:A,error:r,children:a})]})},be="data:image/jpeg;base64,/9j/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAgEBAgICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//dAAQAA//uAA5BZG9iZQBkwAAAAAH/wAARCAAWABcDABEAAREBAhEB/8QAXAABAQEAAAAAAAAAAAAAAAAACAoEAQEAAAAAAAAAAAAAAAAAAAAAEAACAgIBBAMAAwAAAAAAAAABAwIEBREhAAYSEyIxQTJRYhEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAAABEQIRAD8Ave7ktuodvZ27XZ6rFTDZOzXZx8HopOYmQB4JDYjQ/egEFXKZCnkF5WvcsQyC3CwLXtnJ02+XlItmZGTQw8SEiRIEg7B6B89B/9C9TubP9u4Wg6HcFpEK9xDkSpS2191LYSU1S6y9tZBkZGJloRG+SOgFmIbSTlsW7JL9uOVkaTb6jD2eykuyqVpfr48/NAkNfu+gcWIzeJztYXMRer3kcCRTL5qkRsQemQi5DCB/GcYnXQf/0a+bly3kLLbl6y63afLza+wyTWzl/qciToDgD6A4HHQZug347KZHEWBbxl2zRseEl+6s2apmExqUJeJAnA/0djY39gaD/9k=",de="data:image/jpeg;base64,/9j/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAgEBAgICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//dAAQAA//uAA5BZG9iZQBkwAAAAAH/wAARCAAWABcDABEAAREBAhEB/8QAYQAAAwEAAAAAAAAAAAAAAAAABAUKAwEBAAAAAAAAAAAAAAAAAAAAABAAAQQBAwMEAgMAAAAAAAAAAgEDBAUSBhETABQVBxYhIhdRVZTVEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMAAAERAhEAPwC2+59VtV13BLiRtPT6afmVdYjCsgzw2VyJLbS3LtbCLkiOtKv6IVICElBH+btV/wAfp7+pZf63QPKb1S1hbc77rOlqysiYJLtZ0S1SIw67ukeOiN2ZuvSHzT4ABIkFFJdhFVQP/9Cy2i4qapkytQo47S3LatxKIVEZVo62SgNvHJwS8e3WkpYSdt3T3aRCFXMQw9ot8nkvIh7Sw7jzuA8nHlt43tM8vPZfTt99t/vlxffoCbsQvKuJI02DwVFQAsyNP/DkytfeIW1tXlaEVsQszxykY5Nns0qCKN5B/9G6Oy9ItP20x2dOtdQuvu4p8SawGmmgFAajx2gqEbYjsNoggAogiKbJ0An4V0xx8XlNScWfJxd7X8fJjjyYeKxzx+N9t9ugKr/SKiqpQTa671RClNiYg/HnVzbgi4KgY7pU/IkK7KnQf//Z",le=function(){var e=Object(D.useContext)(X),t=e.showNotification,n=e.setShowNotification,A=Object(D.useState)({name:"",email:"",message:"",checked:!1}),r=Object(Z.a)(A,2),a=r[0],s=r[1],i=Object(D.useState)({emailMessage:"",nameMessage:"",textMessage:""}),c=Object(Z.a)(i,2),o=c[0],b=c[1],d=function(e,t){b((function(n){return Object(z.a)(Object(z.a)({},n),{},Object(k.a)({},e,t))}))},l=a.name,j=a.email,u=a.message,g=a.checked,m=function(e){s((function(t){return Object(z.a)(Object(z.a)({},t),{},Object(k.a)({},e.target.id,e.target.value))}))},O=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return Object(N.jsxs)(L,{title:"Send Email",children:[t.sendMail?Object(N.jsx)(te,{id:"sendMail",message:"Message sent"}):"",Object(N.jsx)(H,{icon:be,type:"text",placeholder:"Your Name",errorMessage:o.nameMessage,children:Object(N.jsx)(J,{placeholder:"Your name",id:"name",value:l,onChange:m})}),Object(N.jsx)(H,{icon:de,errorMessage:o.emailMessage,children:Object(N.jsx)(J,{id:"email",placeholder:"Your email",value:j,onChange:m})}),Object(N.jsx)(K,{placeholder:"Type your message ...",id:"message",value:u,onChange:m}),Object(N.jsx)(oe,{text:"copy",id:"mailCopy",children:Object(N.jsx)(ie,{checked:g,onChange:function(){return s((function(e){return Object(z.a)(Object(z.a)({},e),{},{checked:!g})}))}})}),Object(N.jsx)(ae,{text:"Send Email",handler:function(e){e.preventDefault(),j.match(O)?l.length<1?(d("nameMessage","Name field cannot be empty"),j.match(O)?d("emailMessage",""):d("emailMessage","Invalid email adress")):(d("emailMessage",""),s({name:"",email:"",message:"",checked:!1}),n((function(e){return Object(z.a)(Object(z.a)({},e),{},{sendMail:!0})})),d("emailMessage",""),d("nameMessage","")):(d("emailMessage","Invalid email adress"),l.length<1?d("nameMessage","Name field cannot be empty"):d("nameMessage",""))}})]})},je=function(){var e=Object(D.useContext)(X),t=e.users,n=e.showNotification,A=e.setShowNotification,r=Object(D.useState)(""),a=Object(Z.a)(r,2),s=a[0],i=a[1],c=Object(D.useState)(""),o=Object(Z.a)(c,2),b=o[0],d=o[1],l=Object(D.useState)(""),j=Object(Z.a)(l,2),u=j[0],g=j[1];return Object(N.jsxs)(L,{title:"Recover Form",children:[n.recover?Object(N.jsx)(te,{id:"recover",message:"Your password: ".concat(b)}):"",Object(N.jsx)(H,{icon:de,errorMessage:u,children:Object(N.jsx)(J,{placeholder:"Enter your Email",value:s,onChange:function(e){return i(e.target.value)}})}),Object(N.jsx)(H,{icon:be,children:Object(N.jsx)(J,{placeholder:"Enter your Phone number"})}),Object(N.jsxs)(Ae,{children:[Object(N.jsx)(ae,{size:"small",text:"Send",handler:function(e){e.preventDefault();var n=t.find((function(e){return e.mail===s}));s.length<1?g("Email cannot be empty"):(g(""),n?(d(n.password),A((function(e){return Object(z.a)(Object(z.a)({},e),{},{recover:!0})})),g(""),i("")):g("User not found"))}}),Object(N.jsx)(ae,{size:"small",text:"Done",handler:function(e){e.preventDefault(),console.log("Don't know what this should do")}})]})]})},ue=n(19),ge="data:image/jpeg;base64,/9j/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAgEBAgICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//dAAQAA//uAA5BZG9iZQBkwAAAAAH/wAARCAAWABcDABEAAREBAhEB/8QAZwAAAgMBAAAAAAAAAAAAAAAABgoCAwUHAQEAAAAAAAAAAAAAAAAAAAAAEAACAgECBQIEBwAAAAAAAAACAwEEBQYRAAcSFCETNiIxUbUzQXJ2goWREQEAAAAAAAAAAAAAAAAAAAAA/9oADAMAAAERAhEAPwB27moospr3SWCsOZFG0nFqlYz+GWTzNmnacEfL1CSkI/jHAdBdym0Myual4piGkuQC0GRyZtWe20NgGXDQRRPnaQ6Z+n0AL5E2XnX1JUJhTXQ7FPSqZ+FbbQZAHmMflLBqrif0xwH/0HHdYZHIHrHNvO/cN+PzuSTQcVp5NoqqZS0dVVNknJ1l1jndYhIwE+Y24DbtTr6ppmhqpuq8rOOyNkqqVBqDKzbE4KwMExcshUCRVT8QZFG0bxHnYJcprdtOtcVUTasKq3O+7yst7Ar2+3xOSZX7lIlC3+gyZIOqJ6SneNp4D//RcR1d7r1P+4c19ys8BS/OWLGAoafJSorUL1u8t0dfrGdoAGQOJKVwIdMzG0bzv/oE/Kr37gf7T7NkeA//2Q==",me=function(){var e,t,n,A,r,a=Object(D.useContext)(X),s=a.users,i=a.addNewUser,c=a.showNotification,o=a.setShowNotification,b=Object(ue.a)({}),d=b.register,l=b.handleSubmit,j=b.watch,u=b.reset,g=b.getValues,m=b.formState.errors,O=Object(D.useRef)();O.current=j("password");var h=Object(D.useState)(),x=Object(Z.a)(h,2),w=x[0],f=x[1],p=Object(D.useState)(),E=Object(Z.a)(p,2),B=E[0],Q=E[1];return Object(N.jsxs)(L,{title:"Registration Form",handler:l((function(e){var t=g("username"),n=s.find((function(e){return e.username===t})),A=g("mail"),r=s.find((function(e){return e.mail===A}));void 0!==n?f("Username already exist"):void 0!==r?(Q("Email already exist"),f("")):(i(e),u(),o((function(e){return Object(z.a)(Object(z.a)({},e),{},{registration:!0})})),f(""),Q(""))})),children:[c.registration?Object(N.jsx)(te,{id:"registration",message:"Account created"}):"",Object(N.jsx)(H,{icon:be,errorMessage:(null===(e=m.username)||void 0===e?void 0:e.message)||w,children:Object(N.jsx)(J,Object(z.a)({placeholder:"Username"},d("username",{required:"This field is required",pattern:{value:/^[a-z0-9_-]{3,16}$/,message:"Wrong username"}})))}),Object(N.jsx)(H,{icon:ge,errorMessage:null===(t=m.password)||void 0===t?void 0:t.message,children:Object(N.jsx)(J,Object(z.a)({type:"password",ref:O,placeholder:"Password"},d("password",{required:"This field is required",pattern:{value:/^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,message:"At least 1 digit, 1 uppercase, 8 characters"}})))}),Object(N.jsx)(H,{icon:ge,errorMessage:null===(n=m.confirmPassword)||void 0===n?void 0:n.message,children:Object(N.jsx)(J,Object(z.a)({type:"password",placeholder:"Confirm Password"},d("confirmPassword",{required:"This field is required",validate:function(e){return e===O.current||"The passwords do not match"}})))}),Object(N.jsx)(H,{icon:de,errorMessage:(null===(A=m.mail)||void 0===A?void 0:A.message)||B,children:Object(N.jsx)(J,Object(z.a)({placeholder:"Email"},d("mail",{required:"This field is required",pattern:{value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,message:"Wrong Email"}})))}),Object(N.jsx)(H,{icon:"data:image/jpeg;base64,/9j/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAgEBAgICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//dAAQAA//uAA5BZG9iZQBkwAAAAAH/wAARCAAWABcDABEAAREBAhEB/8QAXQAAAwEAAAAAAAAAAAAAAAAABwgKBgEBAAAAAAAAAAAAAAAAAAAAABAAAgICAQQCAwEAAAAAAAAAAQMCBAURIQAGBxITQRQiMVIRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwAAARECEQA/ALi/Nmau0MXisVVbJKcwy9K7JcjGbUUY1AK0iOfhbO3uY+/QD+Eghhs/4vXgu0V9xqzBbcrqpWbSvWEKsxbYhcI0mxl8nulj46kSfkA2BE6HQGnxrmbuc7SoWsgwutJZYpMsTO2PjWZ6qa0nmTSqURInZkRs8noP/9C67yp26c72w96YmV3DGeRriI3JiYQ1dQNbP7oHuABsyXEffQKwMjm8mijg/wA6/brB6k0cdOy5leL2S+JEEolMrjLbPWPH6741voHT7Zwiu3cFjcOoxkalcB7Ijh1phLbTRvn1Y+cjHfIjofXQf//Rv3IBBBAII0QeQQf6CPsEdAA+1OyKlDyXnOVzp4GK79BGj+jMrAspxII9SKKpTAP+owI+9Afeg//Z",children:Object(N.jsx)(G,Object(z.a)(Object(z.a)({},d("country")),{},{children:["Poland","Germany","USA","Netherlands","Other"].map((function(e){return Object(N.jsx)("option",{children:e},e)}))}))}),Object(N.jsx)(oe,{id:"terms",text:"terms",error:null===(r=m.terms)||void 0===r?void 0:r.message,children:Object(N.jsx)(ie,Object(z.a)({},d("terms",{required:"This field is required"})))}),Object(N.jsx)(Ae,{children:Object(N.jsx)(ae,{text:"Sign in",size:"big",type:"submit"})})]})},Oe=function(){var e=Object(D.useState)({username:"",password:""}),t=Object(Z.a)(e,2),n=t[0],A=t[1],r=function(e){A((function(t){return Object(z.a)(Object(z.a)({},t),{},Object(k.a)({},e.target.id,e.target.value))}))},a=Object(D.useState)({username:"",password:""}),s=Object(Z.a)(a,2),i=s[0],c=s[1],o=function(e,t){c((function(n){return Object(z.a)(Object(z.a)({},n),{},Object(k.a)({},e,t))}))},b=Object(D.useContext)(X),d=b.users,l=b.setLogged,j=b.showNotification,u=b.setShowNotification,g=b.setLoggedData;return Object(N.jsxs)(L,{title:"Sign In Form",children:[j.logOut?Object(N.jsx)(te,{id:"logOut",message:"Logged out"}):"",Object(N.jsx)(H,{icon:be,errorMessage:i.username,children:Object(N.jsx)(J,{id:"username",placeholder:"Username",type:"text",value:n.username,onChange:r})}),Object(N.jsx)(H,{icon:ge,errorMessage:i.password,children:Object(N.jsx)(J,{id:"password",placeholder:"Password",type:"password",value:n.password,onChange:r})}),Object(N.jsxs)(Ae,{children:[Object(N.jsx)(oe,{text:"remember",id:"remember",children:Object(N.jsx)(ie,{})}),Object(N.jsx)(ae,{text:"Sign In",size:"small",small:!0,handler:function(e){e.preventDefault();var t=d.find((function(e){return e.username===n.username}));t?t.password===n.password?(l(!0),o("username",""),o("password",""),g(t)):(o("password","Wrong password"),o("username","")):o("username","Wrong username"),u((function(e){return Object(z.a)(Object(z.a)({},e),{},{signIn:!0})}))}})]})]})},he=function(){var e=Object(D.useContext)(X),t=e.showSubscribeForm,n=e.setShowSubscribeForm,A=e.showNotification,r=e.setShowNotification,a=Object(D.useState)(""),s=Object(Z.a)(a,2),i=s[0],c=s[1],o=Object(D.useState)(""),b=Object(Z.a)(o,2),d=b[0],l=b[1];return Object(N.jsxs)(L,{title:"Subscrbe Form",children:[A.subscribe?Object(N.jsx)(te,{id:"subscribe",message:"Subscribed"}):"",Object(N.jsx)(H,{icon:de,placeholder:"Enter your Email",type:"mail",errorMessage:d,children:Object(N.jsx)(J,{placeholder:"Enter your Email",value:i,onChange:function(e){return c(e.target.value)}})}),Object(N.jsxs)(Ae,{children:[Object(N.jsx)(ae,{text:"Subscribe",size:"small",handler:function(e){e.preventDefault(),i.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?(r((function(e){return Object(z.a)(Object(z.a)({},e),{},{subscribe:!0})})),l(""),c("")):l("Invalid email")}}),Object(N.jsx)(ae,{text:"No, thanks",size:"small",decline:!0,handler:function(e){e.preventDefault(),n(!t)}})]})]})},xe=n.p+"static/media/Masteralb.com TOP LOGO.487e4d49.svg",we=n.p+"static/media/Masteralb.com LOGO.8699c18e.svg",fe=y.b.span(p||(p=Object(I.a)(["\n\tfont-weight: bold;\n"]))),pe=function(){var e=Object(D.useContext)(X),t=e.logged,n=e.setLogged,A=e.showNotification,r=e.setShowNotification,a=e.loggedData,s=e.setLoggedData;return Object(N.jsxs)(L,{title:"User Info",children:[A.signIn?Object(N.jsx)(te,{id:"signIn",message:"Logged In"}):"",Object(N.jsxs)("p",{children:["Username: ",Object(N.jsx)(fe,{children:a.username})," "]}),Object(N.jsxs)("p",{children:["Email: ",Object(N.jsx)(fe,{children:a.mail})," "]}),Object(N.jsxs)("p",{children:["Country: ",Object(N.jsx)(fe,{children:a.country})," "]}),Object(N.jsx)(ae,{text:"Log out",size:"small",decline:!0,handler:function(e){e.preventDefault(),n(!t),r((function(e){return Object(z.a)(Object(z.a)({},e),{},{logOut:!0})})),s([])}})]})},Ee=y.b.div(E||(E=Object(I.a)(["\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\tdisplay: flex;\n\t@media (max-width: 933px) {\n\t\tflex-direction: column;\n\t}\n"]))),Be=y.b.div(B||(B=Object(I.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-bottom: 5rem;\n"]))),Qe=y.b.div(Q||(Q=Object(I.a)(["\n\twidth: 50%;\n\tmargin: 0 5rem;\n\t@media (max-width: 933px) {\n\t\twidth: 80%;\n\t}\n"]))),Me=y.b.img(M||(M=Object(I.a)(["\n\tmargin-top: 5rem;\n\twidth: 100%;\n\tmax-width: 600px;\n\theight: auto;\n"]))),De=function(){var e=Object(D.useContext)(X),t=e.logged,n=e.showSubscribeForm;return Object(N.jsxs)(Be,{children:[Object(N.jsx)(Me,{src:xe}),Object(N.jsxs)(Ee,{children:[Object(N.jsxs)(Qe,{children:[Object(N.jsx)(me,{}),Object(N.jsx)(le,{})]}),Object(N.jsxs)(Qe,{children:[t?Object(N.jsx)(pe,{}):Object(N.jsx)(Oe,{}),Object(N.jsx)(je,{}),n?Object(N.jsx)(he,{}):"",Object(N.jsx)(Me,{src:we})]})]})]})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,A=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),A(e),r(e),a(e),s(e)}))};S.a.render(Object(N.jsx)(v.a.StrictMode,{children:Object(N.jsx)($,{children:Object(N.jsx)(De,{})})}),document.getElementById("root")),ve()}},[[31,1,2]]]);
//# sourceMappingURL=main.81c54747.chunk.js.map