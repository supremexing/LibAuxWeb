import{_ as t,V as s,ap as e,o as l,c as r,w as a,i as n,f as o,aq as u}from"./index-a42ec16d.js";import{_ as i}from"./plugin-vueexport-helper.1b428a4d.js";const c=i({onLoad({url:l,title:r}){"http"!=l.substring(0,4)?(t({title:"错误",content:'不是一个有效的网站链接,"'+l+'"',showCancel:!1,confirmText:"知道了",complete:()=>{s()}}),r="页面路径错误"):this.url=l,r&&e({title:r})},data:()=>({url:null})},[["render",function(t,s,e,i,c,p){const f=u,d=n;return l(),r(d,null,{default:a((()=>[c.url?(l(),r(f,{key:0,src:c.url},null,8,["src"])):o("",!0)])),_:1})}]]);export{c as default};