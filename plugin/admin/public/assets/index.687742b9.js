var pe=Object.defineProperty,be=Object.defineProperties;var _e=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var te=(e,t,r)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,z=(e,t)=>{for(var r in t||(t={}))He.call(t,r)&&te(e,r,t[r]);if(ee)for(var r of ee(t))ye.call(t,r)&&te(e,r,t[r]);return e},ae=(e,t)=>be(e,_e(t));var ne=(e,t,r)=>new Promise((m,n)=>{var _=v=>{try{g(r.next(v))}catch(H){n(H)}},d=v=>{try{g(r.throw(v))}catch(H){n(H)}},g=v=>v.done?m(v.value):Promise.resolve(v.value).then(_,d);g((r=r.apply(e,t)).next())});import{j as h,aO as Ce,aq as Pe,a as G,aa as S,U as $e,r as O,aP as Fe,f as $,aQ as ke,S as we,J,aR as Be,aS as Re,a8 as Se,aT as Te,b as ce,aU as Oe,aG as ue,o as x,h as X,i as Z,aV as T,n as W,aW as de,ak as Ae,ac as V,aX as Ie,k as w,aY as je,aZ as Ee,V as fe,a_ as Ne,a$ as xe,b0 as C,N as We,ae as re,aI as oe,aJ as ie,b1 as ze,b2 as De,p as D,b3 as Ve,b4 as Le,F as Me,q as Ue,t as qe,b5 as Je,aK as le,b6 as ge}from"./index.656c725e.js";import{B as Xe}from"./index.cd81be35.js";import{A as Ze}from"./index.3120412e.js";import{u as Ge}from"./useWindowSizeFn.2783558b.js";import{u as Qe}from"./useContentViewHeight.8799f330.js";import{A as Ye}from"./ArrowLeftOutlined.fc4e10b6.js";import{T as Ke}from"./transButton.d84e11d0.js";var et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},tt=et;function se(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},m=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(m=m.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),m.forEach(function(n){at(e,n,r[n])})}return e}function at(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Q=function(t,r){var m=se({},t,r.attrs);return h(Ce,se({},m,{icon:tt}),null)};Q.displayName="ArrowRightOutlined";Q.inheritAttrs=!1;var nt=Q,rt=function(){return{backIcon:S.any,prefixCls:String,title:S.any,subTitle:S.any,breadcrumb:S.object,tags:S.any,footer:S.any,extra:S.any,avatar:S.object,ghost:{type:Boolean,default:void 0},onBack:Function}},ot=G({name:"APageHeader",props:rt(),slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(t,r){var m=r.emit,n=r.slots,_=$e("page-header",t),d=_.prefixCls,g=_.direction,v=_.pageHeader,H=O(!1),j=Fe(),F=function(a){var l=a.width;j.value||(H.value=l<768)},B=$(function(){var i,a,l;return(l=(i=t.ghost)!==null&&i!==void 0?i:(a=v.value)===null||a===void 0?void 0:a.ghost)!==null&&l!==void 0?l:!0}),R=function(){var a,l,u;return(u=(a=t.backIcon)!==null&&a!==void 0?a:(l=n.backIcon)===null||l===void 0?void 0:l.call(n))!==null&&u!==void 0?u:g.value==="rtl"?h(nt,null,null):h(Ye,null,null)},f=function(a){return!a||!t.onBack?null:h(Te,{componentName:"PageHeader",children:function(u){var o=u.back;return h("div",{class:"".concat(d.value,"-back")},[h(Ke,{onClick:function(c){m("back",c)},class:"".concat(d.value,"-back-button"),"aria-label":o},{default:function(){return[a]}})])}},null)},k=function(){var a;return t.breadcrumb?h(Xe,t.breadcrumb,null):(a=n.breadcrumb)===null||a===void 0?void 0:a.call(n)},y=function(){var a,l,u,o,s,c,P,A,L,M=t.avatar,E=(a=t.title)!==null&&a!==void 0?a:(l=n.title)===null||l===void 0?void 0:l.call(n),N=(u=t.subTitle)!==null&&u!==void 0?u:(o=n.subTitle)===null||o===void 0?void 0:o.call(n),U=(s=t.tags)!==null&&s!==void 0?s:(c=n.tags)===null||c===void 0?void 0:c.call(n),q=(P=t.extra)!==null&&P!==void 0?P:(A=n.extra)===null||A===void 0?void 0:A.call(n),I="".concat(d.value,"-heading"),Y=E||N||U||q;if(!Y)return null;var he=R(),K=f(he),me=K||M||Y;return h("div",{class:I},[me&&h("div",{class:"".concat(I,"-left")},[K,M?h(Ze,M,null):(L=n.avatar)===null||L===void 0?void 0:L.call(n),E&&h("span",{class:"".concat(I,"-title"),title:typeof E=="string"?E:void 0},[E]),N&&h("span",{class:"".concat(I,"-sub-title"),title:typeof N=="string"?N:void 0},[N]),U&&h("span",{class:"".concat(I,"-tags")},[U])]),q&&h("span",{class:"".concat(I,"-extra")},[q])])},p=function(){var a,l,u=(a=t.footer)!==null&&a!==void 0?a:Se((l=n.footer)===null||l===void 0?void 0:l.call(n));return Be(u)?null:h("div",{class:"".concat(d.value,"-footer")},[u])},b=function(a){return h("div",{class:"".concat(d.value,"-content")},[a])};return function(){var i,a,l,u=((a=t.breadcrumb)===null||a===void 0?void 0:a.routes)||n.breadcrumb,o=t.footer||n.footer,s=ke((l=n.default)===null||l===void 0?void 0:l.call(n)),c=we(d.value,(i={"has-breadcrumb":u,"has-footer":o},J(i,"".concat(d.value,"-ghost"),B.value),J(i,"".concat(d.value,"-rtl"),g.value==="rtl"),J(i,"".concat(d.value,"-compact"),H.value),i));return h(Re,{onResize:F},{default:function(){return[h("div",{class:c},[k(),y(),s.length?b(s):null,p()])]}})}}}),it=Pe(ot);const lt=G({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=ce("page-footer"),{getCalcContentWidth:t}=Oe();return{prefixCls:e,getCalcContentWidth:t}}});function st(e,t,r,m,n,_){return x(),X("div",{class:W(e.prefixCls),style:de({width:e.getCalcContentWidth})},[Z("div",{class:W(`${e.prefixCls}__left`)},[T(e.$slots,"left",{},void 0,!0)],2),T(e.$slots,"default",{},void 0,!0),Z("div",{class:W(`${e.prefixCls}__right`)},[T(e.$slots,"right",{},void 0,!0)],2)],6)}var ve=ue(lt,[["render",st],["__scopeId","data-v-2c113217"]]);function ct(e){let t;Ae(()=>{e(),V(()=>{t=!0})}),Ie(()=>{t&&e()})}function ut(e,t,r,m,n=0,_=O(0)){const d=O(null),{footerHeightRef:g}=Qe();let v={useLayoutFooter:!0};const H=f=>{v=f};function j(){V(()=>{R()})}function F(f,k="all"){var i,a,l,u;function y(o){return Number(o.replace(/[^\d]/g,""))}let p=0;const b="0px";if(f){const o=getComputedStyle(f),s=y((i=o==null?void 0:o.marginTop)!=null?i:b),c=y((a=o==null?void 0:o.marginBottom)!=null?a:b),P=y((l=o==null?void 0:o.paddingTop)!=null?l:b),A=y((u=o==null?void 0:o.paddingBottom)!=null?u:b);k==="all"?(p+=s,p+=c,p+=P,p+=A):k==="top"?(p+=s,p+=P):(p+=c,p+=A)}return p}function B(f){return f==null?null:f instanceof HTMLDivElement?f:f.$el}function R(){return ne(this,null,function*(){var u;if(!e.value)return;yield V();const f=B(w(t));if(!f)return;const{bottomIncludeBody:k}=je(f);let y=0;r.forEach(o=>{var s,c;y+=(c=(s=B(w(o)))==null?void 0:s.offsetHeight)!=null?c:0});let p=(u=F(f))!=null?u:0;m.forEach(o=>{p+=F(B(w(o)))});let b=0;function i(o,s){if(o&&s){const c=o.parentElement;c&&(Ne(s)?c.classList.contains(s)?b+=F(c,"bottom"):(b+=F(c,"bottom"),i(c,s)):xe(s)&&s>0&&(b+=F(c,"bottom"),i(c,--s)))}}Ee(n)?i(f,w(n)):i(f,n);let a=k-w(g)-w(_)-y-p-b;const l=()=>{var o;(o=v.elements)==null||o.forEach(s=>{var c,P;a+=(P=(c=B(w(s)))==null?void 0:c.offsetHeight)!=null?P:0})};v.useLayoutFooter&&w(g)>0,l(),d.value=a})}return ct(()=>{V(()=>{R()})}),Ge(()=>{R()},50,{immediate:!0}),fe(()=>[g.value],()=>{R()},{flush:"post",immediate:!0}),{redoHeight:j,setCompensation:H,contentHeight:d}}const dt=G({name:"PageWrapper",components:{PageFooter:ve,PageHeader:it},inheritAttrs:!1,props:{title:C.string,dense:C.bool,ghost:C.bool,content:C.string,contentStyle:{type:Object},contentBackground:C.bool,contentFullHeight:C.bool,contentClass:C.string,fixedHeight:C.bool,upwardSpace:C.oneOfType([C.number,C.string]).def(0)},setup(e,{slots:t,attrs:r}){const m=O(null),n=O(null),_=O(null),d=O(null),{prefixCls:g}=ce("page-wrapper");We(vt,$(()=>e.fixedHeight));const v=$(()=>e.contentFullHeight),H=$(()=>e.upwardSpace),{redoHeight:j,setCompensation:F,contentHeight:B}=ut(v,m,[n,d],[_],H);F({useLayoutFooter:!0,elements:[d]});const R=$(()=>{var i;return[g,{[`${g}--dense`]:e.dense},(i=r.class)!=null?i:{}]}),f=$(()=>e.content||(t==null?void 0:t.headerContent)||e.title||y.value.length),k=$(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),y=$(()=>Object.keys(re(t,"default","leftFooter","rightFooter","headerContent"))),p=$(()=>{const{contentFullHeight:i,contentStyle:a,fixedHeight:l}=e;if(!i)return z({},a);const u=`${w(B)}px`;return z(ae(z({},a),{minHeight:u}),l?{height:u}:{})}),b=$(()=>{const{contentBackground:i,contentClass:a}=e;return[`${g}-content`,a,{[`${g}-content-bg`]:i}]});return fe(()=>[k.value],()=>{j()},{flush:"post",immediate:!0}),{getContentStyle:p,wrapperRef:m,headerRef:n,contentRef:_,footerRef:d,getClass:R,getHeaderSlots:y,prefixCls:g,getShowHeader:f,getShowFooter:k,omit:re,getContentClass:b}}});function ft(e,t,r,m,n,_){const d=oe("PageHeader"),g=oe("PageFooter");return x(),X("div",{class:W(e.getClass),ref:"wrapperRef"},[e.getShowHeader?(x(),ie(d,Je({key:0,ghost:e.ghost,title:e.title},e.omit(e.$attrs,"class"),{ref:"headerRef"}),ze({default:D(()=>[e.content?(x(),X(Me,{key:0},[Ue(qe(e.content),1)],64)):T(e.$slots,"headerContent",{key:1})]),_:2},[De(e.getHeaderSlots,v=>({name:v,fn:D(H=>[T(e.$slots,v,Ve(Le(H||{})))])}))]),1040,["ghost","title"])):le("",!0),Z("div",{class:W(["overflow-hidden",e.getContentClass]),style:de(e.getContentStyle),ref:"contentRef"},[T(e.$slots,"default")],6),e.getShowFooter?(x(),ie(g,{key:1,ref:"footerRef"},{left:D(()=>[T(e.$slots,"leftFooter")]),right:D(()=>[T(e.$slots,"rightFooter")]),_:3},512)):le("",!0)],2)}var gt=ue(dt,[["render",ft]]);ge(ve);const Pt=ge(gt),vt="PageWrapperFixedHeight";export{Pt as P,vt as a,ct as o};
