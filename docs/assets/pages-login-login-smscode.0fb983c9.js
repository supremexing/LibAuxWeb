import{L as s,x as o,o as t,c as e,w as i,i as n,e as a,l as r,q as l,u as m,j as u,k as d,O as p}from"./index-3d964674.js";import{_ as c}from"./u-pupu-sms-code.c3e4e4b8.js";import{_ as f}from"./uni-forms.ef96fb88.js";import{m as b}from"./login-page.mixin.29f570ae.js";import{_ as g}from"./plugin-vueexport-helper.1b428a4d.js";import"./u-button.ed15a739.js";import"./u-loading-icon.201d967c.js";import"./u-toast.ff2cd4e5.js";import"./u-transition.fc8a9d58.js";import"./store.3ca31581.js";const h=g({mixins:[b],data:()=>({mobile:"",logo:"/static/logo.png"}),onLoad({phoneNumber:s}){this.mobile=s},onShow(){document.onkeydown=s=>{var o=s||window.event;o&&13==o.keyCode&&this.submit()}},onReady(){this.$refs.refsms.handleSendSMS()},methods:{submit(){const t=this.$refs.refsms.getSMSCode(),e=s.importObject("uni-id-co",{errorOptions:{type:"toast"}});if(4!=t.length)return o({title:"验证码不能为空",icon:"none",duration:1e3});e.loginBySms({mobile:this.mobile,smsCode:t}).then((s=>{this.loginSuccess(s)}))}}},[["render",function(s,o,b,g,h,j){const _=l,S=n,y=m,x=u(d("u-pupu-sms-code"),c),k=u(d("uni-forms"),f),w=p;return t(),e(S,{class:"uni-content"},{default:i((()=>[a(S,{class:"login-logo"},{default:i((()=>[a(_,{src:h.logo},null,8,["src"])])),_:1}),a(y,{class:"title"},{default:i((()=>[r("请输入验证码")])),_:1}),a(y,{class:"tip"},{default:i((()=>[r("若未绑定图书馆，请查看群公告处理")])),_:1}),a(k,null,{default:i((()=>[a(x,{mobile:h.mobile,ref:"refsms"},null,8,["mobile"])])),_:1}),a(w,{class:"uni-btn send-btn",type:"primary",onClick:j.submit},{default:i((()=>[r("登录")])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-be0951d3"]]);export{h as default};
