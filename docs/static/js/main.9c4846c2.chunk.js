(this["webpackJsonpplan-retiro"]=this["webpackJsonpplan-retiro"]||[]).push([[0],{128:function(e,a,t){e.exports={formStyle:"FormCalculatorSecondary_formStyle__33VJg",imgStyle:"FormCalculatorSecondary_imgStyle__AYPQu",textCenter:"FormCalculatorSecondary_textCenter__3IdyO",centerButton:"FormCalculatorSecondary_centerButton__2XVBa",forgotDiv:"FormCalculatorSecondary_forgotDiv__1iJYR",googleDiv:"FormCalculatorSecondary_googleDiv__3asLf",newAccount:"FormCalculatorSecondary_newAccount__2qP-P",vAEnd:"FormCalculatorSecondary_vAEnd__3-8gu",centerContet:"FormCalculatorSecondary_centerContet__3cvCK"}},287:function(e,a,t){e.exports={fondo:"PrincipalCalculator_fondo__2AJRk"}},288:function(e,a,t){e.exports={fondo:"SecondaryCalculator_fondo__2RZcC"}},293:function(e,a,t){e.exports={panelStyle:"ResultPanel_panelStyle__1LUaO"}},319:function(e,a,t){},320:function(e,a,t){},523:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(46),l=t.n(c),s=(t(319),t(320),t(321),t(11)),o=t(7),i="[auth] Start",u="[auth] End",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case i:return{MAX_AGE:120,user:Object(o.a)(Object(o.a)({},a.payload.user),{},{logged:!0}),planData:a.payload.planData};case u:return{user:{logged:!1},planData:[]};default:return e}},d=Object(n.createContext)(null),m=t(56),b=t(9),h=t(522),x=t(539),O=t(540),p=t(110),g=t(534),f=t(164),_=t(541),v=t(542),y=t(81),C=t.n(y),S=t(80),I=t.p+"../media/retplan-logo.cb869e57.png",N=t(538),D=N.a.Types.StringType,w=N.a.Model({salary:D().isRequired("Campo requerido").minLength(1,"Debe tener m\xednimo ".concat(1," cifras")).addRule((function(e,a){var t=e.replace(/\$|,/g,"");return!/^[1-9]\d*\.{1,2}$/.test(t)}),"Ingresa una cantidad v\xe1lida (example: 4500, 4500.51)"),rate:D().isRequired("Campo requerido").minLength(1,"Debe tener m\xednimo ".concat(1," cifras")).addRule((function(e,a){return!/^[1-9]\d{0,1}\.{1,2}$/.test(e)}),"Ingresa una tasa v\xe1lida (example: 10, 10.51)"),age:D().isRequired("Campo requerido").minLength(1,"Debe tener m\xednimo ".concat(1," cifras")).addRule((function(e,a){return!/(^\D)|(^0)/.test(e)}),"Ingrese una edad v\xe1lida")}),k=t(24),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(n.useState)(Object(o.a)(Object(o.a)({},e),{},{loading:!1,error:{status:!1,error_msg:""}})),t=Object(s.a)(a,2),r=t[0],c=t[1];return{formValue:r,setFormValue:c,handleInputChange:function(e){var a=e.name,t=e.value;c(Object(o.a)(Object(o.a)({},r),{},Object(k.a)({},a,t)))},resetForm:function(){c(Object(o.a)(Object(o.a)({},e),{},{loading:!1,error:{status:!1,error_msg:""}}))},setFormError:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";c(Object(o.a)(Object(o.a)({},r),{},{error:{status:e,error_msg:a}}))},setLoading:function(e){c(Object(o.a)(Object(o.a)({},r),{},{loading:e}))}}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;return new Promise((function(a,t){setTimeout((function(){a(!0)}),e)}))},P=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)},E=function(e){var a="",t=e.split("."),n=Number(t[0]).toLocaleString("en-US"),r=null!=t[1]?"."+t[1]:null;return a+=r?n+r:n},$=function(e,a){return e.pop(),!e.includes(P(a.value))&&(e.push(a.value),!0)},V=t(18),L=t(530),T=t(533),R=t(4),B=["name","label","accepter","helpBlock","prefix","posfix"],G=["name","label","accepter","helpBlock","prefix","posfix"],q=function(e){var a=e.name,t=e.label,n=e.accepter,r=e.helpBlock,c=e.prefix,l=e.posfix,s=Object(V.a)(e,B);return Object(R.jsx)(g.a.Group,{children:c?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(g.a.ControlLabel,{children:t}),Object(R.jsxs)(L.a,{children:[Object(R.jsx)(L.a.Addon,{children:c}),Object(R.jsx)(g.a.Control,Object(o.a)({name:a,accepter:n},s)),Object(R.jsx)(g.a.HelpText,{children:r})]})]}):Object(R.jsx)(R.Fragment,{children:l?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(g.a.ControlLabel,{children:t}),Object(R.jsxs)(L.a,{children:[Object(R.jsx)(g.a.Control,Object(o.a)({name:a,accepter:n},s)),Object(R.jsx)(L.a.Addon,{children:l}),Object(R.jsx)(g.a.HelpText,{children:r})]})]}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(g.a.ControlLabel,{children:t}),Object(R.jsx)(g.a.Control,Object(o.a)({name:a,accepter:n},s)),Object(R.jsx)(g.a.HelpText,{children:r})]})})})},z=function(e){var a=e.name,t=e.label,n=(e.accepter,e.helpBlock,e.prefix,e.posfix,Object(V.a)(e,G));return Object(R.jsxs)(g.a.Group,{children:[Object(R.jsx)(g.a.ControlLabel,{children:t}),Object(R.jsx)(T.a,Object(o.a)({className:"w-100",name:a},n))]})},H=function(e){var a=e.formValue,t=e.handleInputChange,n=e.label,r=e.placeholder,c=a.salary;return Object(R.jsx)(q,{prefix:"$",name:"salary",id:"id_salary_input",label:n,placeholder:r,value:c,onChange:function(e){var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===(e=e.replace(/\$|,/g,"")))return e;var a=e.match(/(^[1-9]\d{0,10}$)|(^[1-9]\d{0,10}\.$)|(^[1-9]\d{0,10}\.\d{1,2}$)/g);return!!a&&E(a[0])}(e);!1!==a&&t({name:"salary",value:a})}})};H.defaultProps={};var J=function(e){var a=e.formValue,t=e.handleInputChange,n=e.label,r=e.placeholder,c=a.rate;return Object(R.jsx)(q,{posfix:"%",name:"rate",id:"id_rate_input",label:n,placeholder:r,value:c,onChange:function(e){!1!==function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===e)return e;var a=e.match(/(^[1-9]\d{0,1}$)|(^[1-9]\d{0,1}\.\d{0,2}$)/g);return!!a&&a[0]}(e)&&t({name:"rate",value:e})}})};J.defaultProps={};var M=t(536),K=function(e){var a=e.formValue,t=e.handleInputChange,n=a.rate;return Object(R.jsx)(M.a,{max:100,step:.2,progress:!0,value:Number(n),onChange:function(e){t({name:"rate",value:e+""})}})};K.defaultProps={};var U=function(e){var a=e.formValue,t=e.handleInputChange,n=e.label,r=e.placeholder,c=a.month_pay;return Object(R.jsx)(z,{name:"month_pay",id:"id_month_pay_input",label:n,trigger:["Enter","Space","Comma"],placeholder:r,value:c,onCreate:function(e,a){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6;if($(e,a))if(e.length>t)e.pop();else{var n=a.value.match(/(^[1-9]\d{0,10}$)|(^[1-9]\d{0,10}\.\d{1,2}$)/g);n&&""!==n?(e.pop(),e.push(P(a.value))):e.pop()}}(e,a),t({name:"month_pay",value:e})},onClean:function(e){t({name:"month_pay",value:[]})},onChange:function(e,a){"click"===a.type&&t({name:"month_pay",value:e})}})};U.defaultProps={};var X=function(e,a){var t=e.salary,n=void 0===t?"$30,000.00":t,r=e.rate,c=void 0===r?"10.0":r,l=e.month_pay,s=void 0===l?["$5,000","$10,000.00","20,000.00"]:l,o=e.age,i=void 0===o?26:o,u=Number(n.replace(/\$|,/g,"")),j=Number(c),d=Number(i);return s.map((function(e,t){for(var r=(new Date).getFullYear(),l=1,s=0,o=12*Number(e.replace(/\$|,/g,"")),i=W(o),m={id:t+1,salary:n,annualSaving:i,rate:c+"%",month_pay:e,success:!1,advice:"",breakDown:[{id:l,key:"t-".concat(t,"-r-").concat(l-1),year:r+"",return:"$0.00",investment_and_returns:i,final_salary:"$0.00",current_age:d+" a\xf1os"}]};d+l<a&&s<u;){var b=Number(m.breakDown[l-1].investment_and_returns.replace(/\$|,/g,"")),h=b*(j/100),x=h+b+o;s=h/12,m.breakDown.push({id:l+1,key:"t-".concat(t,"-r-").concat(l),year:++r+"",return:W(h),investment_and_returns:W(x),final_salary:W(s),current_age:d+l+" a\xf1os"}),l++}return s<u?m.advice="Tu meta no podr\xe1 cumplirse antes de que cumplas m\xe1ximo ".concat(a," a\xf1os debido a que los par\xe1metros insertados pueden ser poco realistas. Intenta de nuevo, con un menor salario objetivo, aumentando la tasa de rendimiento o aumentando los abonos mensuales"):m.success=!0,m})).sort((function(e,a){return a.breakDown.length-e.breakDown.length}))},W=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)},Y=function(e){var a=e.formValue,t=e.handleInputChange,r=e.label,c=e.placeholder,l=Object(n.useContext)(d).reducerData.MAX_AGE,s=a.age;return Object(R.jsx)(q,{posfix:"a\xf1os",name:"age",id:"id_age_input",label:r,placeholder:c,value:s,onChange:function(e){!1!==function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;if(""===e)return e;var t=e.match(/^[1-9]\d{0,2}$/g);return!!(t&&Number(e)>=0&&Number(e)<=a)&&t[0]}(e,l)&&t({name:"age",value:e})}})};Y.defaultProps={};var Q=function(){var e=Object(b.o)(),a=F({salary:"15,000",rate:"10.1",month_pay:[],age:"26"}),t=a.formValue,r=a.handleInputChange,c=a.setFormError,l=a.setLoading,s=a.resetForm,o=t.error,j=o.status,m=o.error_msg,h=t.loading,y=t.salary,N=t.rate,D=t.month_pay,k=t.age,P=Object(n.useContext)(d),E=P.reducerData,$=P.dispatch,V=E.MAX_AGE;return Object(R.jsx)("div",{className:"container animate__animated animate__bounceInRight allHeightWidth v-a-middle ".concat(C.a.fondo),children:Object(R.jsx)(x.a,{justify:"center",children:Object(R.jsx)(x.a.Item,{as:O.a,xs:20,md:14,children:Object(R.jsxs)(x.a,{justify:"center",className:"".concat(C.a.formStyle),children:[Object(R.jsx)(x.a.Item,{as:O.a,xs:10,xsOffset:14,md:8,mdOffset:16,lg:6,lgOffset:18,className:"mt-4 ta-center",children:Object(R.jsx)(p.a,{color:"red",appearance:"ghost",endIcon:Object(R.jsx)(S.c,{}),onClick:function(){A(400).then((function(a){console.log("LogOut!!!!"),$({type:u}),e("/start")}))},children:"Salir"})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:20,children:Object(R.jsx)("img",{src:I,className:C.a.imgStyle,alt:"logo"})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:20,className:"mt-3",children:Object(R.jsx)("h4",{id:"id_bienvenida",className:C.a.textCenter,children:"Comienza a ver el poder que tienen las inversiones sobre tu ahorro"})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:20,className:"mt-5",children:Object(R.jsx)(g.a,{formValue:{salary:y,rate:N,age:k},onSubmit:function(a){console.log("formStatus --\x3e ",a),a&&(l(!0),A(500).then((function(a){if(D.length<1)c(!0,"Al menos debes agregar 1 abono mensual");else if(N<1)c(!0,"Ingresa una tasa de rendimiento v\xe1lida mayor igual a 1");else{var n=X(t,V);console.log("Sucess!!!"),s(),$({type:i,payload:{user:{status:a},planData:n}}),e("/secondary-calculator")}})))},fluid:!0,model:w,children:Object(R.jsxs)(x.a,{className:"mb-3 ".concat(C.a.vAEnd),children:[Object(R.jsx)(x.a.Item,{as:O.a,xs:24,lg:14,children:Object(R.jsx)(H,{formValue:t,handleInputChange:r,label:"\xbfCu\xe1nto te gustar\xeda recibir mensualmente?",placeholder:"Ej: 4500"})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:24,lg:10,children:Object(R.jsx)(J,{formValue:t,handleInputChange:r,label:"Tasa de rendimiento",placeholder:"Ej: 10.5"})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:24,lg:24,className:"mt-4",children:Object(R.jsx)(K,{formValue:t,handleInputChange:r})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:24,lg:18,className:"mt-4",children:Object(R.jsx)(U,{formValue:t,handleInputChange:r,label:"\xbfCu\xe1nto abonar\xedas mensualmente? (max 6)",placeholder:"Ej: 1000"})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:24,lg:6,className:"mt-4",children:Object(R.jsx)(Y,{formValue:t,handleInputChange:r,label:"Tu edad",placeholder:"Ej: 20"})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:24,lg:24,className:"mt-4",children:h?Object(R.jsx)("div",{className:C.a.centerContet,children:Object(R.jsx)(f.a,{size:"md"})}):Object(R.jsx)(_.a,{children:Object(R.jsxs)(p.a,{appearance:"primary",type:"submit",block:!0,className:C.a.centerButton,children:["Calcular plan",Object(R.jsx)(S.d,{style:{marginLeft:"10px"}})]})})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:20,lg:24,className:"mt-4",children:j&&Object(R.jsx)(v.a,{showIcon:!0,type:"error",children:m})})]})})})]})})})})};Q.defaultProps={};var Z=Q,ee=t(287),ae=t.n(ee),te=function(){return Object(R.jsx)("div",{className:ae.a.fondo,children:Object(R.jsx)(Z,{})})},ne=t(288),re=t.n(ne),ce=t(128),le=t.n(ce),se=t(127),oe=t(535),ie=t(543),ue=t(197),je=function(){var e=Object(n.useContext)(d).reducerData.planData,a=function(e){return e.replace(/\$|,/g,"")};return Object(R.jsx)(ue.b,{data:function(){for(var t=[],n=e.sort((function(e,a){return a.breakDown.length-e.breakDown.length})),r=e.length,c=0;c<n[0].breakDown.length;c++){for(var l=[n[0].breakDown[c].year],s=0;s<r;s++){var o=n[s].breakDown[c];o?l.push(Number(a(o.final_salary))):l.push(null)}t.push(l)}return t}(),children:e.map((function(e,a){return Object(R.jsx)(ue.a,{name:"Abono: ".concat(e.month_pay),area:!0},a)}))})},de=function(){var e=Object(n.useContext)(d).reducerData.planData,a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1];return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(p.a,{block:!0,color:"violet",appearance:"primary",endIcon:Object(R.jsx)(S.a,{}),onClick:function(){c(!0)},children:"Gr\xe1fica"}),Object(R.jsxs)(oe.a,{size:"md",open:r,onClose:function(){return c(!1)},children:[Object(R.jsx)(oe.a.Header,{children:Object(R.jsx)(oe.a.Title,{children:"Gr\xe1fica Comparativa"})}),Object(R.jsxs)(oe.a.Body,{children:[Object(R.jsx)("p",{children:"Meta mensual: $".concat(e[0].salary)}),Object(R.jsx)("p",{children:"Mejor abono: ".concat(e[e.length-1].month_pay)}),Object(R.jsx)("p",{children:"En el mejor caso lograr\xe1s tu meta cuando tengas: ".concat(e[e.length-1].breakDown[e[e.length-1].breakDown.length-1].current_age)}),Object(R.jsx)(ie.a,{}),Object(R.jsx)(je,{})]})]})]})},me=function(){var e=Object(b.o)(),a=F({salary:"",rate:"",month_pay:[],age:""}),t=a.formValue,r=a.handleInputChange,c=a.setFormError,l=a.setLoading,s=a.resetForm,o=t.error,j=o.status,m=o.error_msg,h=t.loading,y=t.salary,C=t.rate,I=t.month_pay,N=t.age,D=Object(n.useContext)(d),k=D.reducerData,P=D.dispatch,E=k.MAX_AGE;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("div",{className:"container animate__animated animate__bounceInLeft",children:Object(R.jsx)(x.a,{justify:"end",children:Object(R.jsx)(x.a.Item,{as:O.a,className:"mt-3 ta-center",children:Object(R.jsx)(p.a,{size:"lg",color:"red",appearance:"primary",endIcon:Object(R.jsx)(S.c,{}),onClick:function(){A(400).then((function(a){console.log("LogOut!!!!"),P({type:u}),e("/start")}))},children:"Salir"})})})}),Object(R.jsx)("div",{className:"container animate__animated animate__bounceInRight",children:Object(R.jsx)(x.a,{justify:"center",children:Object(R.jsx)(x.a.Item,{as:O.a,xs:24,children:Object(R.jsxs)(x.a,{align:"middle",justify:"center",className:"mt-5 ".concat(le.a.formStyle),children:[Object(R.jsx)(se.a,{as:O.a,xs:24,className:"ta-center mt-3",children:Object(R.jsx)("h5",{children:"Completa la informaci\xf3n requerida y comprueba el poder de las inversiones a largo plazo"})}),Object(R.jsx)(se.a,{as:O.a,xs:24,children:Object(R.jsx)(g.a,{formValue:{salary:y,rate:C,age:N},onSubmit:function(a){console.log("formStatus --\x3e ",a),a&&(l(!0),A(500).then((function(a){if(I.length<1)c(!0,"Al menos debes agregar 1 abono mensual");else if(C<1)c(!0,"Ingresa una tasa de rendimiento v\xe1lida mayor igual a 1");else{var n=X(t,E);console.log("Sucess!!!"),s(),P({type:i,payload:{user:{status:a},planData:n}}),e("/secondary-calculator")}})))},fluid:!0,model:w,children:Object(R.jsxs)(x.a,{justify:"center",className:"mt-4 mb-3 ".concat(le.a.vAEnd),children:[Object(R.jsx)(x.a.Item,{as:O.a,xs:20,lg:4,children:Object(R.jsx)(H,{formValue:t,handleInputChange:r,label:"Sueldo mensual deseado",placeholder:"Ej: 4500"})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:20,lg:3,children:Object(R.jsx)(J,{formValue:t,handleInputChange:r,label:"Tasa",placeholder:"Ej: 10.5"})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:20,lg:8,children:Object(R.jsx)(U,{formValue:t,handleInputChange:r,label:"Abono(s) mensual (max 6)",placeholder:"Ej: 1000"})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:20,lg:3,children:Object(R.jsx)(Y,{formValue:t,handleInputChange:r,label:"Edad",placeholder:"Ej: 20"})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:20,lg:3,children:h?Object(R.jsx)("div",{className:le.a.centerContet,children:Object(R.jsx)(f.a,{size:"md"})}):Object(R.jsx)(_.a,{children:Object(R.jsxs)(p.a,{appearance:"primary",type:"submit",block:!0,className:le.a.centerButton,children:["Calcular",Object(R.jsx)(S.b,{style:{marginLeft:"10px"}})]})})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:20,lg:2,children:Object(R.jsx)(de,{})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:20,lg:24,className:"mt-4",children:j&&Object(R.jsx)(v.a,{showIcon:!0,type:"error",children:m})})]})})})]})})})})]})};me.defaultProps={};var be=me,he=t(532),xe=t(537),Oe=t(544),pe=["type","header","message"],ge=function(e){var a=e.type,t=e.header,n=e.message,r=Object(V.a)(e,pe);return Object(R.jsx)(Oe.a,Object(o.a)(Object(o.a)({},r),{},{type:a,header:t,children:n}))},fe=t(293),_e=t.n(fe),ve=he.a.Column,ye=he.a.HeaderCell,Ce=he.a.Cell,Se=function(){var e=Object(n.useContext)(d).reducerData.planData,a=r.a.useState(),t=Object(s.a)(a,2),c=t[0],l=t[1],o=r.a.useState(),i=Object(s.a)(o,2),u=i[0],j=i[1],m=r.a.useState(!1),b=Object(s.a)(m,2),h=b[0],p=b[1],g=function(e,a){p(!0),setTimeout((function(){p(!1),l(e),j(a)}),500)};return Object(R.jsx)("div",{className:"container animate__animated animate__bounceInLeft mb-5",children:Object(R.jsxs)(x.a,{justify:"center",children:[Object(R.jsx)(x.a.Item,{as:O.a,xs:24,lg:24,className:"mt-3",children:Object(R.jsx)(ge,{className:"w-100",type:"info",header:"Tu plan de retiro es el siguiente:",message:Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("h5",{children:"Deseas un salario de: $".concat(e[0].salary)}),Object(R.jsx)("h5",{children:"Invirtiendo tus ahorros a una tasa del: $".concat(e[0].rate)})]})})},0),e.map((function(a,t){return Object(R.jsx)(x.a.Item,{as:O.a,xs:24,lg:24,className:"mt-3",children:Object(R.jsxs)(xe.a,{className:" ".concat(_e.a.panelStyle),header:"Plan # ".concat(t+1),bordered:!0,children:[Object(R.jsx)("h6",{className:"mb-4",children:"Meta slarial mensual: $".concat(a.salary," | Tasa de rendimento: ").concat(a.rate," | Abono mensual: ").concat(a.month_pay)}),Object(R.jsx)("h6",{className:"mb-4",children:"Tu ahorro anual es: ".concat(a.annualSaving)}),a.success?Object(R.jsx)("h6",{className:"mb-4",children:"Tu meta se cumplir\xe1 cuando tengas: ".concat(a.breakDown[a.breakDown.length-1].current_age)}):Object(R.jsx)("h6",{className:"mb-4",children:"Tu meta NO podr\xe1 cumplirse incluso despu\xe9s de los: ".concat(a.breakDown[a.breakDown.length-1].current_age)}),a.success?Object(R.jsxs)(he.a,{height:800,data:(n=t,c&&u?e[n].breakDown.sort((function(e,a){var t=e[c],n=a[c];return"string"===typeof t&&(t=t.charCodeAt()),"string"===typeof n&&(n=n.charCodeAt()),"asc"===u?t-n:n-t})):e[n].breakDown),sortColumn:c,sortType:u,onSortColumn:g,loading:h,rowKey:"key",children:[Object(R.jsxs)(ve,{width:80,align:"center",sortable:!0,resizable:!0,children:[Object(R.jsx)(ye,{children:"Id"}),Object(R.jsx)(Ce,{dataKey:"key",children:function(e){return e.id}})]}),Object(R.jsxs)(ve,{width:100,sortable:!0,resizable:!0,children:[Object(R.jsx)(ye,{children:"A\xf1o"}),Object(R.jsx)(Ce,{dataKey:"year"})]}),Object(R.jsxs)(ve,{width:150,sortable:!0,resizable:!0,children:[Object(R.jsx)(ye,{children:"Rendimiento"}),Object(R.jsx)(Ce,{dataKey:"return"})]}),Object(R.jsxs)(ve,{width:250,sortable:!0,resizable:!0,children:[Object(R.jsx)(ye,{children:"Acumulaci\xf3n"}),Object(R.jsx)(Ce,{dataKey:"investment_and_returns"})]}),Object(R.jsxs)(ve,{sortable:!0,width:180,children:[Object(R.jsx)(ye,{children:"Ganar\xedas mensualmente"}),Object(R.jsx)(Ce,{dataKey:"final_salary"})]}),Object(R.jsxs)(ve,{sortable:!0,flexGrow:1,children:[Object(R.jsx)(ye,{children:"Edad"}),Object(R.jsx)(Ce,{dataKey:"current_age"})]})]}):Object(R.jsx)(ge,{className:"w-100",type:"warning",header:"Advertencia:",message:Object(R.jsx)("h5",{children:a.advice})})]})},t);var n}))]})})};Se.defaultProps={};var Ie=Se,Ne=function(){return Object(R.jsx)("div",{className:re.a.fondo,children:Object(R.jsxs)(x.a,{justify:"center",children:[Object(R.jsx)(x.a.Item,{as:O.a,xs:24,children:Object(R.jsx)(be,{})}),Object(R.jsx)(x.a.Item,{as:O.a,xs:24,className:"mt-2",children:Object(R.jsx)(Ie,{})})]})})},De=t(545),we=t(546),ke=function(){return Object(R.jsx)(De.a,{children:Object(R.jsx)(we.a,{children:Object(R.jsx)(b.b,{})})})};ke.defaultProps={};var Fe=ke,Ae=function(){var e=Object(n.useContext)(d).theme;return Object(R.jsx)(h.a,{theme:e,children:Object(R.jsx)(b.e,{children:Object(R.jsxs)(b.c,{path:"",element:Object(R.jsx)(Fe,{}),children:[Object(R.jsx)(b.c,{index:!0,element:Object(R.jsx)(te,{})}),Object(R.jsx)(b.c,{path:"secondary-calculator",element:Object(R.jsx)(Ne,{})})]})})})},Pe=t(82),Ee=t.n(Pe),$e=function(){var e=Object(b.o)(),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(n.useState)(Object(o.a)(Object(o.a)({},e),{},{loading:!1})),t=Object(s.a)(a,2),r=t[0],c=t[1];return{startValue:r,setStartValue:c,setLoading:function(e){c(Object(o.a)(Object(o.a)({},r),{},{loading:e}))}}}({}),t=a.startValue,r=a.setLoading,c=t.loading,l=Object(n.useContext)(d).dispatch;return Object(R.jsx)(h.a,{theme:"dark",children:Object(R.jsx)(x.a,{className:Ee.a.allHeighWidth,justify:"center",children:Object(R.jsx)(x.a.Item,{className:"h-100",as:O.a,xs:24,children:Object(R.jsx)("div",{className:"h-100 ".concat(Ee.a.carousel1),children:Object(R.jsx)("div",{className:"v-a-middle allHeightWidth ",justify:"center",children:c?Object(R.jsx)("div",{className:Ee.a.loadingStyle,children:Object(R.jsx)(f.a,{size:"lg"})}):Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(x.a,{justify:"center",children:[Object(R.jsx)(x.a.Item,{className:"h-100",as:O.a,xs:24,children:Object(R.jsx)("h1",{className:" ".concat(Ee.a.textCenter," ").concat(Ee.a.header),children:"Plan de Retiro"})}),Object(R.jsx)(x.a.Item,{className:"mt-5 h-100 ".concat(Ee.a.textCenter),as:O.a,xs:24,children:Object(R.jsx)(p.a,{onClick:function(a){a&&(r(!0),A().then((function(a){console.log("Sucess!!!"),r(!1),l({type:i,payload:{user:{status:a},planData:[]}});var t=localStorage.getItem("lastPath")||"/";e(t,{replace:!0})})))},className:"animate__animated animate__backInDown ".concat(Ee.a.customButton),appearance:"primary",children:"Iniciar"})})]})})})})})})})},Ve=function(){return Object(R.jsxs)("div",{className:"container",children:[Object(R.jsx)("h3",{children:"404 - Page not found"}),Object(R.jsx)(ie.a,{}),Object(R.jsx)(m.b,{className:"rs-nav-item",to:"/",children:"Go Home"})]})},Le=function(e){var a=e.children,t=Object(n.useContext)(d).reducerData,r=Object(b.m)(),c=r.pathname,l=r.search;return t.planData.length<1?(console.log("chii"),localStorage.setItem("lastPath","/")):(console.log("nooo"),localStorage.setItem("lastPath","".concat(c).concat(l))),t.user.logged?a:Object(R.jsx)(b.a,{to:"/start"})},Te=function(e){var a=e.children,t=Object(n.useContext)(d).reducerData,r=localStorage.getItem("lastPath");return t.user.logged?Object(R.jsx)(b.a,{to:r}):a},Re=function(){return Object(R.jsx)(m.a,{children:Object(R.jsxs)(b.e,{children:[Object(R.jsx)(b.c,{exact:!0,path:"/start",element:Object(R.jsx)(Te,{children:Object(R.jsx)($e,{})})}),Object(R.jsx)(b.c,{exact:!0,path:"/*",element:Object(R.jsx)(Le,{children:Object(R.jsx)(Ae,{})})}),Object(R.jsx)(b.c,{path:"*",element:Object(R.jsx)(Ve,{})})]})})};Re.defaultProps={};var Be=Re,Ge=function(){return{user:JSON.parse(localStorage.getItem("userSession"))||{logged:!1},planData:localStorage.getItem("planData")?JSON.parse(localStorage.getItem("planData")):[],MAX_AGE:120}},qe=function(){var e=Object(n.useReducer)(j,{},Ge),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],i=l[1],u=Object(n.useState)("dark"),m=Object(s.a)(u,2),b=m[0],h=m[1];return Object(n.useEffect)((function(){t.user&&(localStorage.setItem("userSession",JSON.stringify(t.user)),localStorage.setItem("planData",JSON.stringify(t.planData)))}),[t]),Object(R.jsx)(d.Provider,{value:{reducerData:t,dispatch:r,theme:b,setTheme:h,active:o,setActive:i},children:Object(R.jsx)(Be,{})})};l.a.render(Object(R.jsx)(qe,{}),document.getElementById("root"))},81:function(e,a,t){e.exports={formStyle:"FormCalculatorPrincipal_formStyle__3YGiq",imgStyle:"FormCalculatorPrincipal_imgStyle__23zPm",textCenter:"FormCalculatorPrincipal_textCenter__6xTLy",centerButton:"FormCalculatorPrincipal_centerButton__3kQHv",forgotDiv:"FormCalculatorPrincipal_forgotDiv__26IJt",googleDiv:"FormCalculatorPrincipal_googleDiv__3j4b2",newAccount:"FormCalculatorPrincipal_newAccount__8xv9l",vAEnd:"FormCalculatorPrincipal_vAEnd__1bnLm",centerContet:"FormCalculatorPrincipal_centerContet__15Nuv"}},82:function(e,a,t){e.exports={allHeighWidth:"StartScreen_allHeighWidth__1Dhx0",centerContainer:"StartScreen_centerContainer__3Rt14",carousel1:"StartScreen_carousel1__erORt",customButton:"StartScreen_customButton__2tm44",textCenter:"StartScreen_textCenter__xTagx",header:"StartScreen_header__GapZQ"}}},[[523,1,2]]]);
//# sourceMappingURL=main.9c4846c2.chunk.js.map