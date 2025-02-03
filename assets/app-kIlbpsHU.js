(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}})();const I=document.querySelector(".nav-time"),k=document.querySelector(".nav-date"),f=()=>{const t=new Date,o=new Intl.DateTimeFormat("pl-PL",{hour:"2-digit",minute:"2-digit"}).format(t);I.textContent=o,setTimeout(f,1e3)},b=()=>{const t=new Date,o=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(t);k.textContent=o,setTimeout(b,1e3)};b();f();const C=document.querySelector(".nav-menu-btn"),L=document.querySelector(".nav-mobile-menu"),q=document.querySelectorAll(".nav-mobile-menu-box ul li"),y=()=>{L.classList.toggle("hide")};q.forEach(t=>t.addEventListener("click",y));C.addEventListener("click",y);const E=document.querySelector(".copy-icon"),O=document.querySelector(".gradient-info");E.addEventListener("click",()=>{navigator.clipboard.writeText(O.textContent)});const $=document.querySelectorAll(".btn"),x=t=>{const e=t.target.parentElement;$.forEach(o=>{o.matches(".active")&&o.classList.remove("active")}),e.matches(".btn")&&e.classList.add("active")};$.forEach(t=>t.addEventListener("click",x));const T=()=>{const t=document.querySelector(".active");let e;return t===null?e="to right top":e=t.value,e},d=()=>{let t="0123456789abcdef",e="#";for(let o=0;o<6;o++)e=e+t[Math.floor(Math.random()*16)];return e},w=()=>{let t=d(),e=d(),o=d();const r=T();return{rgb1:t,rgb2:e,rgb3:o,currentOrientation:r}},N=t=>{let e;localStorage.getItem("colors")==null?(e=[],e.push(t),localStorage.setItem("colors",JSON.stringify(e))):(e=JSON.parse(localStorage.getItem("colors")),e.push(t),localStorage.setItem("colors",JSON.stringify(e)))},S=()=>{let t;return localStorage.getItem("colors")==null?t=[]:t=JSON.parse(localStorage.getItem("colors")),t},B=()=>{let t;localStorage.getItem("colors")==null?t=[]:(t=JSON.parse(localStorage.getItem("colors")),t.forEach((e,o)=>{t.splice(o,1)})),localStorage.setItem("colors",JSON.stringify(t))},a=document.querySelector("body"),l=document.querySelector(".gradient-info"),s=document.querySelector(".nav-mobile-menu"),v=document.querySelectorAll(".label"),g=document.getElementById("hex1"),m=document.getElementById("hex2"),u=document.getElementById("hex3"),h=t=>{const{rgb1:e,rgb2:o,rgb3:r}=t[0];g.value=e,m.value=o,g.style.backgroundColor=e,m.style.backgroundColor=o,v.length>2&&(u.value=r,u.style.backgroundColor=r)},p=t=>{const{rgb1:e,rgb2:o,rgb3:r,currentOrientation:n}=t[0];v.length===2?n!=="circle"?(a.style.backgroundImage=`linear-gradient(${n}, ${e}, ${o})`,s.style.backgroundImage=`linear-gradient(${n}, ${e}, ${o})`,l.textContent=`background-image:linear-gradient(${n}, ${e}, ${o})`):(a.style.backgroundImage=`radial-gradient(${n}, ${e}, ${o})`,s.style.backgroundImage=`radial-gradient(${n}, ${e}, ${o})`,l.textContent=`background-image:radial-gradient(${n}, ${e}, ${o})`):n!=="circle"?(a.style.backgroundImage=`linear-gradient(${n}, ${e}, ${o}, ${r})`,s.style.backgroundImage=`linear-gradient(${n}, ${e}, ${o},${r})`,l.textContent=`background-image:linear-gradient(${n}, ${e}, ${o},${r})`):(u.value=r,a.style.backgroundImage=`radial-gradient(${n}, ${e}, ${o}, ${r})`,s.style.backgroundImage=`radial-gradient(${n}, ${e}, ${o},${r})`,l.textContent=`background-image:radial-gradient(${n}, ${e}, ${o},${r})`)},D=document.querySelector(".generate"),M=()=>{B();const t=w();N(t);const e=S();h(e),p(e)},J=()=>{const t=S();h(t),p(t)};D.addEventListener("click",M);document.addEventListener("DOMContentLoaded",J);
