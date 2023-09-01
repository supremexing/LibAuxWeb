import{L as o,x as e,V as s,o as t,c as a,w as r,i as n,e as i,l as u,q as l,u as m,j as d,k as p,O as f}from"./index-3d964674.js";import{_ as c}from"./uni-match-media.be2950a2.js";import{_ as h}from"./uni-easyinput.bf9a8b40.js";import{_ as b}from"./uni-forms-item.0d54b455.js";import{_ as w}from"./u-pupu-sms-code.c3e4e4b8.js";import{_}from"./uni-forms.ef96fb88.js";import{m as g}from"./login-page.mixin.29f570ae.js";import{_ as j}from"./plugin-vueexport-helper.1b428a4d.js";import"./uni-icons.98af5dad.js";import"./u-button.ed15a739.js";import"./u-loading-icon.201d967c.js";import"./u-toast.ff2cd4e5.js";import"./u-transition.fc8a9d58.js";import"./store.3ca31581.js";const y=o.importObject("uni-id-co",{errorOptions:{type:"toast"}});const k=j({mixins:[g],data:()=>({lock:!1,focusPhone:!0,focusPassword:!1,formData:{phone:"",password:""},rules:{phone:{rules:[{required:!0,errorMessage:"请输入手机号"},{pattern:/^1\d{10}$/,errorMessage:"手机号码格式不正确"}]},password:{rules:[{required:!0,errorMessage:"请输入新密码"},{pattern:/^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{6,24}$/,errorMessage:"密码为 6-24 位字母与数字"}]}},logo:"/static/logo.png"}),onLoad(o){o&&o.phoneNumber&&(this.formData.phone=o.phoneNumber,o.lock&&(this.lock=o.lock,this.focusPhone=!0))},onReady(){this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=o=>{var e=o||window.event;e&&13==e.keyCode&&this.submit()}},methods:{submit(){const o=this.$refs.refSMSCode.getSMSCode();if(!/^\d{4}$/.test(o))return e({title:"请输入短信验证码",icon:"none",duration:1e3});this.$refs.form.validate().then((e=>{let{phone:t,password:a}=this.formData;y.resetPwdBySms({mobile:t,smsCode:o,password:a}).then((o=>{s()}))})).catch((o=>{let e=o[0].key;e=e.replace(e[0],e[0].toUpperCase()),this["focus"+e]=!0}))}}},[["render",function(o,e,s,g,j,y){const k=l,x=n,C=m,D=d(p("uni-match-media"),c),P=d(p("uni-easyinput"),h),S=d(p("uni-forms-item"),b),v=d(p("u-pupu-sms-code"),w),M=f,V=d(p("uni-forms"),_);return t(),a(x,{class:"uni-content"},{default:r((()=>[i(D,{"min-width":690},{default:r((()=>[i(x,{class:"login-logo"},{default:r((()=>[i(k,{src:j.logo},null,8,["src"])])),_:1}),i(C,{class:"title title-box"},{default:r((()=>[u("通过手机验证码找回密码")])),_:1})])),_:1}),i(V,{ref:"form",value:j.formData,"err-show-type":"toast"},{default:r((()=>[i(S,{name:"phone"},{default:r((()=>[i(P,{focus:j.focusPhone,onBlur:e[0]||(e[0]=o=>j.focusPhone=!1),class:"input-box",disabled:j.lock,type:"number",inputBorder:!1,modelValue:j.formData.phone,"onUpdate:modelValue":e[1]||(e[1]=o=>j.formData.phone=o),maxlength:"11",placeholder:"请输入手机号"},null,8,["focus","disabled","modelValue"])])),_:1}),i(S,{name:"password"},{default:r((()=>[i(P,{focus:j.focusPassword,maxlength:"24",onBlur:e[2]||(e[2]=o=>j.focusPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:j.formData.password,"onUpdate:modelValue":e[3]||(e[3]=o=>j.formData.password=o),placeholder:"请设置 6-24 位新密码"},null,8,["focus","modelValue"])])),_:1}),i(S,{name:"smsCode"},{default:r((()=>[i(v,{ref:"refSMSCode",mobile:j.formData.phone},null,8,["mobile"])])),_:1}),i(M,{class:"uni-btn send-btn-box",type:"primary",onClick:y.submit},{default:r((()=>[u("提交")])),_:1},8,["onClick"])])),_:1},8,["value"])])),_:1})}],["__scopeId","data-v-b2102036"]]);export{k as default};
