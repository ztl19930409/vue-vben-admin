import{a as r,i as e,o as a,j as s,w as t,k as o,q as i,n}from"./index.a4c995c9.js";import"./xlsx.a48e520c.js";import{B as c,a as l}from"./index.eae9c878.js";var w=r({components:{BasicDrawer:c},setup(){const[r,{closeDrawer:e}]=l();return{register:r,closeDrawer:e}}});const d=n(" Drawer Info. "),p=n("内部关闭drawer");w.render=function(r,n,c,l,w,u){const f=e("a-button"),m=e("BasicDrawer");return a(),s(m,i(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:t((()=>[d,o(f,{type:"primary",onClick:r.closeDrawer},{default:t((()=>[p])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default w;