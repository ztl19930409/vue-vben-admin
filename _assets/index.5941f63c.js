import{a as s,i as t,o as i,j as e,k as n,a8 as o,a9 as a,w as c,n as l}from"./index.a4c995c9.js";import"./xlsx.a48e520c.js";import{A as r}from"./index.149c1c14.js";import"./CloseOutlined.6993095c.js";import"./LeftOutlined.e6de4091.js";import{c as m}from"./functional.46443edd.js";import"./RightOutlined.fc1e80b2.js";const p=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var d=s({components:{Alert:r},setup:()=>({imgList:p,handleClick:function(s){m({imageList:[s]})},handlePreview:function(){m({imageList:p})}})});const u={class:"p-4"},f={class:"flex justify-center mt-4"},h=l("预览图片");d.render=function(s,l,r,m,p,d){const j=t("Alert"),g=t("a-button");return i(),e("div",u,[n(j,{message:"有预览图",type:"info"}),n("div",f,[(i(!0),e(o,null,a(s.imgList,(t=>(i(),e("img",{src:t,key:t,class:"mr-2",onClick:i=>s.handleClick(t)},null,8,["src","onClick"])))),128))]),n(j,{message:"无预览图",type:"info"}),n(g,{onClick:s.handlePreview,type:"primary",class:"mt-4"},{default:c((()=>[h])),_:1},8,["onClick"])])};export default d;