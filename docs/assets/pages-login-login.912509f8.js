import{x as e,L as a,j as t,k as s,o,c as i,w as n,e as l,f as c,n as r,q as u,i as p,R as d,z as m,l as h,t as g,u as f,O as b}from"./index-78c97046.js";import{_ as w}from"./uni-easyinput.ac57fbe1.js";import{_ as C}from"./uni-forms-item.bb56df94.js";import{_}from"./uni-forms.03fa1a2f.js";import{_ as y}from"./uni-icons.a42508ef.js";import{_ as k}from"./plugin-vueexport-helper.1b428a4d.js";import{_ as x}from"./uni-id-pages-agreements.218c8123.js";import{_ as v}from"./uni-id-pages-fab-login.6c81a3b6.js";import{m as V}from"./login-page.mixin.a9c6238d.js";import"./uni-popup-dialog.6b3fa630.js";import"./store.3177e926.js";const j=k({props:{modelValue:String,value:String,scene:{type:String,default:()=>""},focus:{type:Boolean,default:()=>!1}},computed:{val:{get(){return this.value||this.modelValue},set(e){this.$emit("update:modelValue",e)}}},data:()=>({focusCaptchaInput:!1,captchaBase64:"",loging:!1}),watch:{scene:{handler(a){a?this.getImageCaptcha(this.focus):e({title:"scene不能为空",icon:"none"})},immediate:!0}},methods:{getImageCaptcha(t=!0){this.loging=!0,t&&(this.val="",this.focusCaptchaInput=!0);a.importObject("uni-captcha-co",{customUI:!0}).getImageCaptcha({scene:this.scene}).then((e=>{this.captchaBase64=e.captchaBase64})).catch((a=>{e({title:a.message,icon:"none"})})).finally((e=>{this.loging=!1}))}}},[["render",function(e,a,m,h,g,f){const b=t(s("uni-icons"),y),w=u,C=p,_=d;return o(),i(C,{class:"captcha-box"},{default:n((()=>[l(C,{class:"captcha-img-box"},{default:n((()=>[g.loging?(o(),i(b,{key:0,class:"loding",size:"20px",color:"#BBB",type:"spinner-cycle"})):c("",!0),l(w,{class:r(["captcha-img",{opacity:g.loging}]),onClick:f.getImageCaptcha,src:g.captchaBase64,mode:"widthFix"},null,8,["class","onClick","src"])])),_:1}),l(_,{onBlur:a[0]||(a[0]=e=>g.focusCaptchaInput=!1),focus:g.focusCaptchaInput,type:"text",class:"captcha",inputBorder:!1,maxlength:"4",modelValue:f.val,"onUpdate:modelValue":a[1]||(a[1]=e=>f.val=e),placeholder:"请输入验证码"},null,8,["focus","modelValue"])])),_:1})}],["__scopeId","data-v-57703449"]]),B=a.importObject("uni-id-co",{errorOptions:{type:"toast"}});const I=k({mixins:[V],data:()=>({mobile:"",password:"",captcha:"",needCaptcha:!1,focusMobile:!1,focusPassword:!1,logo:"/static/logo.png"}),onShow(){document.onkeydown=e=>{var a=e||window.event;a&&13==a.keyCode&&this.pwdLogin()}},methods:{toRetrievePwd(){let e="/pages/retrieve/retrieve";/^1\d{10}$/.test(this.mobile)&&(e+=`?phoneNumber=${this.mobile}`),m({url:e,animationType:"slide-in-right",animationDuration:200})},pwdLogin(){if(!this.password.length)return this.focusPassword=!0,e({title:"请输入密码",icon:"none",duration:3e3});if(11!=this.mobile.length)return this.focusMobile=!0,e({title:"请输入有效的手机号",icon:"none",duration:3e3});if(this.needCaptcha&&4!=this.captcha.length)return this.$refs.captcha.getImageCaptcha(),e({title:"请输入验证码",icon:"none",duration:3e3});if(this.needAgreements&&!this.agree)return this.$refs.agreements.popup(this.pwdLogin);let a={mobile:this.mobile,password:this.password,captcha:this.captcha};/^1\d{10}$/.test(this.mobile),a.mobile=this.mobile,B.login(a).then((e=>{this.loginSuccess(e)})).catch((e=>{"uni-id-captcha-required"==e.errCode?this.needCaptcha=!0:this.needCaptcha&&this.$refs.captcha.getImageCaptcha()}))},toRegister(){m({url:this.config.isAdmin?"/pages/register/register-admin":"/pages/register/register",animationType:"slide-in-right",animationDuration:200,fail(e){console.error(e)}})}}},[["render",function(e,a,r,d,m,y){const k=u,V=p,B=f,I=t(s("uni-easyinput"),w),$=t(s("uni-forms-item"),C),L=t(s("uni-forms"),_),P=t(s("uni-captcha"),j),S=t(s("uni-id-pages-agreements"),x),R=b,U=t(s("uni-id-pages-fab-login"),v);return o(),i(V,{class:"uni-content"},{default:n((()=>[l(V,{class:"login-logo"},{default:n((()=>[l(k,{src:m.logo},null,8,["src"])])),_:1}),l(B,{class:"title title-box"},{default:n((()=>[h("账号密码登录")])),_:1}),l(L,null,{default:n((()=>[l($,{name:"mobile"},{default:n((()=>[l(I,{focus:m.focusMobile,maxlength:"11",onBlur:a[0]||(a[0]=e=>m.focusMobile=!1),class:"input-box",inputBorder:!1,modelValue:m.mobile,"onUpdate:modelValue":a[1]||(a[1]=e=>m.mobile=e),placeholder:"请输入手机号",clearSize:"20"},null,8,["focus","modelValue"])])),_:1}),l($,{name:"password"},{default:n((()=>[l(I,{focus:m.focusPassword,maxlength:"24",onBlur:a[2]||(a[2]=e=>m.focusPassword=!1),class:"input-box",clearable:"",type:"password",inputBorder:!1,modelValue:m.password,"onUpdate:modelValue":a[3]||(a[3]=e=>m.password=e),placeholder:"请输入密码"},null,8,["focus","modelValue"])])),_:1})])),_:1}),m.needCaptcha?(o(),i(P,{key:0,focus:"",ref:"captcha",scene:"login-by-pwd",modelValue:m.captcha,"onUpdate:modelValue":a[4]||(a[4]=e=>m.captcha=e)},null,8,["modelValue"])):c("",!0),l(S,{scope:"login",ref:"agreements"},null,512),l(R,{class:"uni-btn",type:"primary",onClick:y.pwdLogin},{default:n((()=>[h("登录")])),_:1},8,["onClick"]),l(V,{class:"link-box"},{default:n((()=>[e.config.isAdmin?c("",!0):(o(),i(V,{key:0},{default:n((()=>[l(B,{class:"forget"},{default:n((()=>[h("忘记了？")])),_:1}),l(B,{class:"link",onClick:y.toRetrievePwd},{default:n((()=>[h("找回密码")])),_:1},8,["onClick"])])),_:1})),l(B,{class:"link",onClick:y.toRegister},{default:n((()=>[h(g(e.config.isAdmin?"注册管理员账号":"注册账号"),1)])),_:1},8,["onClick"])])),_:1}),l(U,{ref:"uniFabLogin"},null,512)])),_:1})}],["__scopeId","data-v-569f36a0"]]);export{I as default};