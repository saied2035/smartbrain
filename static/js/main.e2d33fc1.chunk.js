(this.webpackJsonpfacerecognetion=this.webpackJsonpfacerecognetion||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(7),s=n.n(i),r=n(8),c=(n(24),n(3)),o=n(4),l=n(6),d=n(5),g=n(0),m=function(e){var t=e.onSearchChange,n=e.user,a=e.onRouteChange,i=e.onRegisterSubmit,s=e.onSignInSubmit,r=(e.getUserInformation,e.route);return null!==n||"home"===r?Object(g.jsx)("div",{className:"flex justify-end",children:Object(g.jsx)("p",{onClick:function(){window.localStorage.removeItem("user"),s("reset"),i("reset"),a("signIn"),t("reset")},className:"link dim pointer pa2 ma3 shadow-2 f3 bg-light-green ba ",children:"sign out"})}):"signIn"===r?Object(g.jsx)("div",{className:"flex justify-end",children:Object(g.jsx)("p",{onClick:function(){s("reset"),a("register")},className:"link dim pointer pa2 ma3 shadow-2 f3 bg-light-green ba ",children:"register"})}):"register"===r?Object(g.jsx)("div",{className:"flex justify-end",children:Object(g.jsx)("p",{onClick:function(){i("reset"),a("signIn")},className:"link dim pointer pa2 ma3 shadow-2 f3 bg-light-green ba ",children:"sign in"})}):void 0},u=function(e){var t=e.email,n=e.sendEmail,i=e.verifyEmail,s=e.failed,r=e.onInputClick,c=e.remove;return Object(a.useEffect)((function(){n(t)}),[n,t]),Object(g.jsx)("div",{className:"flex justify-center",style:{marginBlockStart:"5.5rem"},children:Object(g.jsxs)("div",{className:"shadow-5 pa2 black-80 ",children:[Object(g.jsx)("p",{className:"f3 ph0 mh0 tc b black-80",children:"Email validation"}),Object(g.jsxs)("p",{className:"f3 fw4 ph0 mh0 tc",children:["There is a code sent to ",Object(g.jsx)("span",{className:"f4 b dark-blue",children:t})]}),Object(g.jsx)("p",{className:"f3 fw4 ph0 mh0 tc",children:"code :"}),s.length?Object(g.jsx)("input",{onMouseEnter:r,className:"center b pa1",type:"text",style:{marginBlock:"0.5rem"}}):Object(g.jsx)("input",{className:"center b pa1",type:"text",style:{marginBlock:"0.5rem"}}),Object(g.jsx)("input",{onClick:function(){var e=document.querySelectorAll("input")[0].value;i(e)},className:"center b ph2 pv1 input-reset b--dark-green bg-light-blue \r grow pointer f3 hover-bg-black hover-white",type:"button",value:"verfiy",style:{marginBlock:"1.5rem"}}),c?Object(g.jsx)("p",{className:"dn",children:s}):Object(g.jsx)("p",{className:"mw5 ma0 f5 center b dark-red georgia shadow-5 pa2 ph3",children:s})]})})},p=n(13),h=n.n(p),b=(n(26),function(){return Object(g.jsxs)("div",{className:"center",children:[Object(g.jsx)(h.a,{className:"Tilt",options:{max:55},style:{height:150,width:150},children:Object(g.jsx)("img",{className:"ma0 pa3 shadow-5 logo grow ba",src:"data:image/png;base64,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",alt:"Logo"})}),Object(g.jsx)("h1",{style:{marginBlock:"auto"},className:"f1 ma0 dark-blue",children:"Face Recognition"})]})}),A=n(2),j=(n(27),function(e){var t=e.onInputClick,n=e.remove,a=e.onSearchChange,i=e.onButtonClick,s=e.error,r=e.imagePath,c=e.chooseImage,o=e.imageName;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"flex justify-center items-center",children:[Object(g.jsxs)("div",{className:"flex justify-center items-center pa1 ma0 mt3 ml2 shadow-5 background-image \r ba b--light-green",style:{marginBlock:0},children:[Object(g.jsx)("input",{onChange:function(e){return c(e)},className:"dn",type:"file"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("input",Object(A.a)({onClick:function(){document.querySelectorAll("input")[0].click()},type:"button",className:"mw4 br2 pa1 fw6 f4 v-mid tc pointer",style:{marginBlock:"0.5rem"},value:o},s.length?{onMouseEnter:t}:{})),Object(g.jsx)("img",{alt:"",className:"absolute ma1 pointer",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAQAAADlauupAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflCQYQMgvEojO1AAACJklEQVQ4y41TTUgbURCe3Y0Jrad6KhVKLhowpOAhoMESyPogJ6GHQq+FQKEH8VD0mEtPGtAkpkJRSik9VQqSgjEKniw9KEQhi4b8uJVKLhGXZHf2J5vXUx7ZJIUOzGHmfd+8+eWgT4zbqSn6OxajOULgkdcLDzgOLFmGD0dHgriz405dXMAwoR23G0OpFFbbbURKh+qtbeP7rS3a8XgGyb8OD/9J7NfW8bEjCL7a3GSPV+UynpnmAOnMNPGqXGb2m0wGAADMhUCApf2zVAIA0EozM7h8f8/AcUVBYXYWAABvKhVESrHabpsLgQCgP5lkwB+I6A+FAAC0l8GgvnJ3h3FF6frQHwqhZFkMP76xAfhJkhyp9hDUxPS0gxxXFAc2UywCJpvNgXo/tlpYDYdZj4aRkVJMNps8IKX9I+Uqpkmjqtq1hdeqytVMc2D2f2ybB12WHeSlRsOuRCIPS6enuDw3p6cJcb87P7c1QrilRsMRQJNlnnt2cMAcJ4bBT4ji6G6hgNVwGMb39+njvT09TcjobqHAT4ginBgG+yyYz4Ox6POxzmYvLykVBH1lfh6/qCqr9Zum6WlCKBUEVGs1REpRsixj0ecDAAD989paF6yTet0xqq5KlqWTep3hvicSPavscuHbbPa/V/lrLkc7IyN99+By6enV1aFr3JtFcX29l8wNnHNkcpK+iMXoTTQKY14vjPE8KNfX3PN8nnu6ve15Ikm9+L/M2Fh5/QHDjwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOS0wNlQxNjo1MDoxMSswMDowMLAGb8gAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDktMDZUMTY6NTA6MTErMDA6MDDBW9d0AAAAAElFTkSuQmCC",onClick:function(e){var t=document.querySelectorAll("input")[1].value;document.querySelectorAll("input")[0].value=null,"select image"!==t?c(e):e.target.click()}})]}),Object(g.jsx)("span",{className:"v-med pa2 fw6 ml3 f4 white",children:"or"}),Object(g.jsxs)("div",{className:"di",children:[Object(g.jsx)("input",Object(A.a)(Object(A.a)({onChange:a,id:"urlimageinput",className:"br3 fw6 v-mid ma1 pa2 bg-white",type:"text",placeholder:"Enter image URL (jpg,jpeg or png)"},s.length?{onMouseEnter:t}:{}),{},{style:{width:"25vw"}})),Object(g.jsx)("img",{alt:"",className:"absolute pointer",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5QkKDhoWppfABAAAAuBJREFUSMe9lV9Ik1EYxn9n81MWLkqzmyBFWuAfXOOriy4yyklkUApZNxHinEqQBiIUiFeFooaUYYQKIgS1ogQp0TZ24aUo+8A/SBFDb8SLFLSm+3e6qK+NdE1Bei6f85z3ec/7nvMeQVKUagNHCwsh6ha5NTUgLhGw24HbnMvJiRMOMeH3gxzD5HaDwS6/9vfDJ6tjZWYmUXSxnaq87nqdmgqrzo267m6QGUzW14N4wITBkDzhP5jkcyQC8jM8fw4Zd9JPNTXBm7c3bgaDOySgG39zbvhGR0F0Yrl4cQ+GyaDJGx4PHD5v/lBWpicSdyL9xPturMMqXCUlsGpet3R1xVVA77EsFg6fDziDxWj8e3d6usmkKLCxEQiEQolddqH73ZrIXYPdajWANIlppzORsdl84ICiwMqKy1VZCY2NFRV5eduj6ryu0xPZAb99jEp02eEwQu6Ra+rjx8Aikaysv9XBYCgUjcL6eiAQDkNXV22tqsLW1i9eVS2WzMwY39o6NKRp4PVq2vLyvzoiu7lqNqcAm6Lh+HEA2ZlY/vTp8PD8PAghBEBHR02NqsbWm5v7+qam4MmT9+/n53dzJYSGJzvbAFyWL6TczZb9hTzLCylTAC9bS0u/yPz8RPKGhvLyvDzo7HQ6VRVaWgYHfT7Y3AwGI5FYC9LSFMVohI4Olyvx+AHgB67FxRTgkXg3Pg4UyyvbE9AvYXu7w2GzJS613pq2tupqmw16e0dGFhb++Ro+ipNjYwIutAx6CgrA2BN1axr/7RnKMBQVGcD7sKpkdjY2MndGMuPd62Qr3mfPwPO9um1uLm4S6rNaH5n7jiKK3G5Yexmqam7WybhSz829eRuJgFp2y/rqFWxmbRUcOgR4xMTp08AxMvf0GR0WLeEwyAt86emBtZHQ0aoqmJquq4/VSCSP8+eOKNFlhwPkPcpKS0G0ixPx37G8L7/4/SDSpTI+DvKgeDQwoJc6UfSfVmBWbIMkIy0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDktMTBUMTQ6MjY6MjIrMDA6MDCfLwCeAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA5LTEwVDE0OjI2OjIyKzAwOjAw7nK4IgAAAABJRU5ErkJggg==",style:{marginLeft:"-1rem"},onClick:function(e){var t=document.querySelectorAll("input")[2].value;document.querySelectorAll("input")[2].value="",t?a("reset"):e.target.click()}})]})]}),Object(g.jsx)("input",{onClick:function(){var e=document.querySelectorAll("input")[2],t=r.replace(/^data:image\/(jpeg|jpg|png);base64,/i,"");t.length&&e.value?i("multipaleInput"):i(t||e.value,window.innerWidth)},type:"submit",className:"fw6 v-mid pa1 dark-red ma0 ml2 bg-white pointer f3 grow",value:"Detect"})]}),n?Object(g.jsx)("p",{className:"dn"}):Object(g.jsx)("div",{className:"flex justify-center",children:Object(g.jsx)("p",{className:"ma0 f5 b dark-red georgia shadow-5 pa2 ph3",children:s})})]})}),f=(n(28),function(e){var t=e.feeling,n=e.age,a=e.gender,i=e.onLoadImage,s=e.box,r=e.imagePath,c=e.response,o=document.querySelector("#urlimageinput");return Object(g.jsx)("div",{className:"flex justify-center ",children:Object(g.jsxs)("div",{className:"flex",children:[Object(g.jsx)("img",Object(A.a)(Object(A.a)(Object(A.a)({onLoad:function(){return i(c)},id:"inputImage",className:"mt2",alt:""},c.detection?{src:r||o.value}:{}),c.detection?{}:{className:"dn"}),{},{style:{width:"30vw",height:"auto"}})),Object(g.jsx)("div",{className:"pointer absolute",style:{width:s.widthRes,height:s.heightRes,marginLeft:s.marginLeft,marginTop:s.marginTop,boxShadow:"0 0 0 3px cyan inset"}}),Object(g.jsx)("div",{className:"flex justify-center absolute",style:{width:"30vw",marginTop:s.marginTop+s.heightRes},children:Object(g.jsxs)("div",{id:"result",className:"mt1 bg-white f5 fw6",children:[Object(g.jsx)("span",{children:t}),Object(g.jsx)("span",{className:"db",children:n}),Object(g.jsx)("span",{children:a})]})})]})})}),y=function(e){var t=e.remove,n=e.onInputClick,a=(e.user,e.response),i=e.onSearchChange,s=e.onButtonClick,r=e.error,c=e.onLoadImage,o=e.box,l=e.chooseImage,d=e.imageName,m=e.imagePath,u=e.feeling,p=e.age,h=e.gender;return Object(g.jsxs)("div",{children:[Object(g.jsx)(b,{}),Object(g.jsx)(j,{onInputClick:n,remove:t,error:r,imagePath:m,onButtonClick:s,onSearchChange:i,chooseImage:l,imageName:d}),Object(g.jsx)(f,{imagePath:m,response:a,onLoadImage:c,box:o,feeling:u,age:p,gender:h})]})},v=(n(29),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onRouteChange,n=e.onRegisterSubmit,a=e.onInsertUser,i=e.name,s=e.email,r=e.password,c=e.onInputClick,o=e.failed,l=e.remove;return Object(g.jsx)("div",{className:"center background shadow-5",style:{width:"34vw"},children:Object(g.jsxs)("div",{className:"mt3",children:[Object(g.jsxs)("fieldset",{id:"sign_up",className:"center ba b--transparent ph0 mh0",children:[Object(g.jsx)("legend",{className:"f1 fw6 ph0 mh0 tc b",children:"Register"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",Object(A.a)(Object(A.a)({},o.length?{className:"mt0"}:{className:"mt1"}),{},{children:[Object(g.jsx)("label",{className:"db fw6 lh-copy f4",htmlFor:"Username",children:"Username"}),Object(g.jsx)("input",Object(A.a)(Object(A.a)({className:"b pa2 ba",onChange:n},o.length?{onMouseEnter:c}:{}),{},{type:"text",name:"username",id:"name"}))]})),Object(g.jsxs)("div",Object(A.a)(Object(A.a)({},o.length?{className:"mt0"}:{className:"mt1"}),{},{children:[Object(g.jsx)("label",{className:"db fw6 lh-copy f4",htmlFor:"email-address",children:"Email"}),Object(g.jsx)("input",Object(A.a)(Object(A.a)({className:"b pa2 ba",onChange:n},o.length?{onMouseEnter:c}:{}),{},{type:"email",name:"email",id:"email"}))]})),Object(g.jsxs)("div",Object(A.a)(Object(A.a)({},o.length?{className:"mt0"}:{className:"mt1"}),{},{children:[Object(g.jsx)("label",{className:"db fw6 lh-copy f4",htmlFor:"password",children:"Password"}),Object(g.jsx)("input",Object(A.a)(Object(A.a)({className:"b pa2 ba",onChange:n},o.length?{onMouseEnter:c}:{}),{},{type:"password",name:"password",id:"password"}))]}))]})]}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{onClick:function(){return a({email:s,password:r,name:i})},className:"center b ph3 pv2 \r b--dark-green bg-white grow pointer f3 hover-bg-black hover-white",type:"submit",value:"Register"})}),Object(g.jsxs)("div",{className:"mt3",children:[l?Object(g.jsx)("p",{className:"dn",children:o}):Object(g.jsx)("p",{className:"ma0 f5 tc b dark-red georgia shadow-5 pa2 ph3",children:o}),Object(g.jsx)("p",{className:"tc f4 mt4 ma0",style:{marginBlockEnd:"0.5rem"},children:"have an account?"}),Object(g.jsx)("input",{onClick:function(){n("reset"),t("signIn")},type:"button",value:"sign in",className:"center mw4 ma0 b dim pointer pa2 shadow-2 \r f4 bg-light-green ba",style:{marginBlockEnd:"1rem"}})]})]})})}}]),n}(a.Component)),O=(n(30),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onInputClick,n=e.onSignInSubmit,a=e.onRouteChange,i=e.email,s=e.password,r=e.onInsertUser,c=e.failed,o=e.remove;return Object(g.jsx)("div",{className:"center background shadow-5",style:{width:"34vw"},children:Object(g.jsxs)("div",{className:"mt3",children:[Object(g.jsxs)("fieldset",{id:"sign_in",className:"center ba b--transparent ph0 mh0",children:[Object(g.jsx)("legend",{className:"f1 fw6 ph0 mh0 tc b",children:"Sign In"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",Object(A.a)(Object(A.a)({},c.length?{className:"mt0"}:{className:"mt1"}),{},{children:[Object(g.jsx)("label",{className:"db fw6 lh-copy f4",htmlFor:"email-address",children:"Email"}),Object(g.jsx)("input",Object(A.a)(Object(A.a)({className:"b pa2 ba",onChange:n},c.length?{onMouseEnter:t}:{}),{},{type:"email",name:"email-address",id:"email-address"}))]})),Object(g.jsxs)("div",Object(A.a)(Object(A.a)({},c.length?{className:"mt0"}:{className:"mt1"}),{},{children:[Object(g.jsx)("label",{className:"db fw6 lh-copy f4",htmlFor:"password",children:"Password"}),Object(g.jsx)("input",Object(A.a)(Object(A.a)({className:"b pa2 ba",onChange:n},c.length?{onMouseEnter:t}:{}),{},{type:"password",name:"password",id:"password"}))]}))]})]}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{onClick:function(){return r({email:i,password:s})},className:"center b ph3 pv2\r b--dark-green bg-white grow pointer f3 hover-bg-black hover-white",type:"submit",value:"Sign in"})}),Object(g.jsxs)("div",{className:"mt3",children:[o?Object(g.jsx)("p",{className:"dn",children:c}):Object(g.jsx)("p",{className:"ma0 f5 tc b dark-red georgia shadow-5 pa2 ph3",children:c}),Object(g.jsx)("p",{className:"tc f4 mt4 ma0",style:{marginBlockEnd:"0.5rem"},children:"don't have an account?"}),Object(g.jsx)("input",{onClick:function(){n("reset"),a("register")},type:"button",value:"register",className:"center mw4 ma0 b dim pointer pa2 shadow-2 \r f4 bg-light-green ba",style:{marginBlockEnd:"3rem"}})]})]})})}}]),n}(a.Component)),I=(n(31),"TEXT"),x="IMAGE_REQUEST_PENDING",w="IMAGE_REQUEST_SUCCESS",E="IMAGE_REQUEST_FAILED",N="MULTIPALEINPUT",S="EMPTYINPUT",C="RESET",R="DETECTED",k="GETTINGIMAGE",B="RESETINPUTIMAGE",M=function(e){return function(t){if(e.target.files){var n=e.target.value.substring(12);(a=e.target.files[0],new Promise((function(e,t){var n=new FileReader;n.readAsDataURL(a),n.onloadend=function(){return e(n.result)}}))).then((function(e){t({type:k,payload:e,imageName:n})}))}else t({type:B});var a}},P="REGISTER",F="SIGN_IN",L="SIGN_IN_EMAIL",U="SIGN_IN_PASSWORD",G="SIGN_IN_DEFAULT",D="REMOVE_ERROR_MSG",Q="REQUEST_PENDING",T="REQUEST_SUCCESS",V="REQUEST_FAILED",J="VERIFIY_EMAIL_SUCCESS",H="VERIFIY_EMAIL_FAILED",q="REGISTER_EMAIL",X="REGISTER_PASSWORD",Y="REGISTER_NAME",z="REGISTER_DEFAULT",K="SENDING_EMAIL_PENDING",W="SENDING_EMAIL_SUCCESS",Z="SENDING_EMAIL_FAILED",_="VERIFIY_EMAIL_PENDING",$="VERIFIY_EMAIL_SUCCESS",ee="VERIFIY_EMAIL_FAILED",te=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=e.onButtonClick,a=e.error,i=e.onLoadImage,s=e.box,r=e.route,c=e.onRouteChange,o=e.onSignInSubmit,l=e.onInputClick,d=e.feeling,p=e.age,h=e.gender,b=this.props,A=b.onInsertUser,j=b.signInEmail,f=b.signInPassword,I=b.failedServer,x=b.remove,w=this.props,E=w.onRegisterSubmit,N=w.registerEmail,S=w.registerPassword,C=w.registerName,R=w.response,k=this.props,B=k.sendEmail,M=k.verifyEmail,P=k.verifyFailed,F=k.user,L=k.chooseImage,U=k.imagePath,G=k.imageName;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(m,{user:F,onRouteChange:c,onRegisterSubmit:E,onSignInSubmit:o,onSearchChange:t,route:r}),"signIn"===r&&null===F?Object(g.jsx)(O,{failed:I,remove:x,onInputClick:l,onInsertUser:A,email:j,password:f,onSignInSubmit:o,onRouteChange:c}):"register"===r&&null==F?Object(g.jsx)(v,{onRouteChange:c,onInsertUser:A,onRegisterSubmit:E,email:N,password:S,name:C,failed:I,remove:x,onInputClick:l}):F.verified?Object(g.jsx)(y,{user:F,error:a,onButtonClick:n,onSearchChange:t,onLoadImage:i,remove:x,onInputClick:l,box:s,feeling:d,age:p,gender:h,chooseImage:L,response:R,imagePath:U,imageName:G}):Object(g.jsx)("div",{children:Object(g.jsx)(u,{verifyEmail:M,sendEmail:B,remove:x,email:F.email,failed:P})})]})}}]),n}(a.Component),ne=Object(r.b)((function(e){return{error:e.getImage.error,response:e.getImage.predict,box:e.getBoxBorders.box,feeling:e.getBoxBorders.feeling,age:e.getBoxBorders.age,gender:e.getBoxBorders.gender,route:e.getRoute.route,signInEmail:e.getSignIn.email,signInPassword:e.getSignIn.password,failedServer:e.compareUserResults.failed,user:JSON.parse(window.localStorage.getItem("user")),registerEmail:e.signNewUser.email,registerPassword:e.signNewUser.password,registerName:e.signNewUser.name,remove:e.getRemoveState.remove,verifyFailed:e.codeVerification.verifyFailed,imagePath:e.deviceImage.image,imageName:e.deviceImage.imageName}}),(function(e){return{onSearchChange:function(t){return e(void 0===(n=t.target)?{type:C}:{type:I,payload:n.value});var n},onButtonClick:function(t,n){return e(function(e,t){return function(n){"multipaleInput"===e?n({type:N,payload:"you can't use the two methods at the same time"}):e.length?(n({type:x,payload:!0}),fetch("https://smart-brain-api-nile.herokuapp.com/predict",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({text:e,imageWidth:t})}).then((function(e){return e.json()})).then((function(e){e.detection?n({type:w,payload:e}):n({type:E,payload:"there is no face in the image."})})).catch((function(e){return n({type:E,payload:"image not found or invalid image."})}))):n({type:S,payload:"you didn't give any input to detect"})}}(t,n))},onLoadImage:function(t){return e(function(e){var t,n=0;for(var a in e.expressions)e.expressions[a]>n&&(t="mood: ".concat(a),n=e.expressions[a]);var i="age: "+Math.ceil(e.age)+" years",s="gender: "+e.gender,r=e.detection._box._height,c=e.detection._box._width,o=e.detection._box._x,l=e.detection._box._y+10;return{type:R,payload:{heightRes:r,widthRes:c,marginLeft:o,marginTop:l},feeling:t,age:i,gender:s}}(t))},onRouteChange:function(t){return e(function(e){return"signIn"===e?{type:F,payload:e}:{type:P,payload:e}}(t))},onSignInSubmit:function(t){return e(void 0===(n=t.target)?{type:G}:"email"===n.type?{type:L,payload:n.value}:{type:U,payload:n.value});var n},onRegisterSubmit:function(t){return e(void 0===(n=t.target)?{type:z}:"email"===n.type?{type:q,payload:n.value}:"password"===n.type?{type:X,payload:n.value}:{type:Y,payload:n.value});var n},onInsertUser:function(t,n,a){return e((i=t,function(e){e({type:Q,payload:!0}),Object.keys(i).includes("name")?fetch("https://smart-brain-api-nile.herokuapp.com/register",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:i.email,password:i.password,name:i.name})}).then((function(e){return e.json()})).then((function(t){t.email?(window.localStorage.setItem("user",JSON.stringify(t)),e({type:T,payload:t})):e({type:V,payload:t})})).catch((function(t){return e({type:V,payload:"error sending request"})})):fetch("https://smart-brain-api-nile.herokuapp.com/signin",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:i.email,password:i.password})}).then((function(e){return e.json()})).then((function(t){t.name?(window.localStorage.setItem("user",JSON.stringify(t)),e({type:T,payload:t})):e({type:V,payload:t})})).catch((function(t){return e({type:V,payload:"error sending request"})}))}));var i},onInputClick:function(t){return e({type:D})},sendEmail:function(t){return e(function(e){return function(t){t({type:K,payload:!0}),fetch("https://smart-brain-api-nile.herokuapp.com/send",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})}).then((function(e){return e.json()})).then((function(e){t("code sent Successfully"===e?{type:W}:{type:Z,payload:e})})).catch((function(e){t({type:Z,payload:"error sending request"})}))}}(t))},verifyEmail:function(t){return e((n=t,function(e){e({type:_,payload:!0}),fetch("https://smart-brain-api-nile.herokuapp.com/verify",{method:"delete",headers:{"content-type":"application/json"},body:JSON.stringify({code:n})}).then((function(e){return e.json()})).then((function(t){t.email?(window.localStorage.setItem("user",JSON.stringify(t)),e({type:$,payload:t})):e({type:ee,payload:t})})).catch((function(t){return e({type:ee,payload:"error sending request"})}))}));var n},chooseImage:function(t){return e(M(t))}}}))(te);n(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=n(9),ie=n(14),se=n(15),re={search:""},ce={predict:{},error:"",isPending:!1},oe={box:{widthRes:"",heightRes:"",marginLeft:"",marginTop:""},feeling:"",age:"",gender:""},le={image:"",imageName:"select image"},de={email:"",password:""},ge={email:"",password:"",name:""},me={remove:!0},ue={route:"signIn"},pe={isPending:!1,failed:"",user:{}},he={isSendPending:!1,sendFailed:""},be={isVerifyPending:!1,verifyFailed:""},Ae=Object(se.createLogger)(),je=Object(ae.b)({getSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case I:return Object.assign({},e,{search:t.payload});case C:return re;default:return e}},getImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case C:case I:case k:case B:return ce;case N:case S:return Object.assign({},e,{error:t.payload,isPending:!1,predict:{}});case x:return Object.assign({},e,{isPending:t.payload,error:!1,predict:{}});case w:return Object.assign({},e,{predict:t.payload,isPending:!1,error:""});case E:return Object.assign({},e,{error:t.payload,isPending:!1,predict:{}});default:return e}},getBoxBorders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case C:case I:case k:case B:return oe;case R:return Object.assign({},e,{box:t.payload,feeling:t.feeling,age:t.age,gender:t.gender});default:return e}},getRoute:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case J:case T:return Object.assign({},e,{route:"home"});case F:case P:return Object.assign({},e,{route:t.payload});default:return e}},getSignIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case L:return Object.assign({},e,{email:t.payload});case U:return Object.assign({},e,{password:t.payload});case G:return Object.assign({},e,{email:"",password:""});default:return e}},compareUserResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case Q:return Object.assign({},e,{user:{},isPending:t.payload,success:"",failed:""});case J:case T:return Object.assign({},e,{user:t.payload,isPending:!1,success:"success",failed:""});case V:return Object.assign({},e,{user:{},isPending:!1,success:"",failed:t.payload});default:return pe}},signNewUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case q:return Object.assign({},e,{email:t.payload});case X:return Object.assign({},e,{password:t.payload});case Y:return Object.assign({},e,{name:t.payload});case z:return Object.assign({},e,{email:"",password:"",name:""});default:return e}},getRemoveState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case H:case V:return Object.assign({},e,{remove:!1});case D:return Object.assign({},e,{remove:!0});default:return e}},emailVerification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case K:return Object.assign({},e,{isSendPending:t.payload,sendFailed:""});case W:return Object.assign({},e,{isSendPending:!1,sendFailed:""});case Z:return Object.assign({},e,{isSendPending:!1,sendFailed:t.payload});default:return he}},codeVerification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case _:return Object.assign({},e,{isVerifyPending:t.payload,verifyFailed:""});case $:return Object.assign({},e,{isVerifyPending:!1,verifyFailed:""});case ee:return Object.assign({},e,{isVerifyPending:!1,verifyFailed:t.payload});default:return be}},deviceImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case B:return le;case k:return Object.assign({},e,{image:t.payload,imageName:t.imageName});default:return e}}}),fe=Object(ae.c)(je,Object(ae.a)(ie.a,Ae));s.a.render(Object(g.jsx)(r.a,{store:fe,children:Object(g.jsx)(ne,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.e2d33fc1.chunk.js.map