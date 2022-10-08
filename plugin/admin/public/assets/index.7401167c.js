var f=(t,p,n)=>new Promise((a,u)=>{var c=o=>{try{s(n.next(o))}catch(i){u(i)}},m=o=>{try{s(n.throw(o))}catch(i){u(i)}},s=o=>o.done?a(o.value):Promise.resolve(o.value).then(c,m);s((n=n.apply(t,p)).next())});import{B as R,u as k}from"./useTable.f5c40803.js";import{x as A}from"./BasicForm.67047978.js";import{a as D,g as x,b as P}from"./common.6ce55d48.js";import{b as $}from"./index.e8ce4467.js";import U from"./Update.de2fe265.js";import{aG as S,r as C,a as O,cE as G,ac as N,aI as h,o as V,h as j,j as b,p as F,dJ as q,cb as H,cx as T,q as J,x as K}from"./index.656c725e.js";import"./index.6e6030d1.js";import"./useForm.fec2986b.js";import"./index.687742b9.js";import"./index.cd81be35.js";import"./index.3120412e.js";import"./index.ddc16f9d.js";import"./useWindowSizeFn.2783558b.js";import"./useContentViewHeight.8799f330.js";import"./ArrowLeftOutlined.fc4e10b6.js";import"./transButton.d84e11d0.js";import"./index.28987d30.js";import"./index.2e5a1dae.js";import"./index.d60da1cd.js";import"./_baseIteratee.d7866646.js";import"./index.4f3dd38a.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b54223ae.js";import"./FullscreenOutlined.52703f8e.js";import"./scrollTo.fd8c0855.js";import"./index.bd7662c1.js";import"./index.2cbc8967.js";import"./index.1f507897.js";import"./index.873c27ee.js";import"./index.38230a24.js";import"./uniqBy.73b96c75.js";import"./download.add46730.js";import"./index.2c103eba.js";import"./tree.3e2d93c2.js";const v="/app/admin/auth/adminrule/select",E="/app/admin/auth/adminrule/insert",B="/app/admin/auth/adminrule/update",z="/app/admin/auth/adminrule/delete",g="/app/admin/auth/adminrule/schema",l=C({schemas:[]}),L=O({components:{ModalInserOrEdit:U,BasicTable:R,TableAction:A},setup(){const{createMessage:t}=K(),{success:p}=t,n=C([]),a=C("");G(()=>f(this,null,function*(){const r=yield D(g),w=r.columns;for(let e of w)if(e.primary_key){a.value=e.field;break}const y=r.forms;l.value.schemas=[];for(let e of y)if(e.searchable&&(e.search_type=="between"?(l.value.schemas.push({field:`${e.field}[0]`,component:"Input",label:e.comment||e.field,colProps:{offset:1,span:5}}),l.value.schemas.push({field:`${e.field}[1]`,component:"Input",label:"\u3000\u5230",colProps:{span:5}})):l.value.schemas.push({field:e.field,component:"Input",label:e.comment||e.field,colProps:{offset:1,span:10}})),e.list_show){let _={dataIndex:e.field,title:e.comment||e.field,sorter:e.enable_sort};e.control=="IconPicker"&&(_.width=50,_.customRender=({record:M})=>q(H,{icon:M[e.field]})),n.value.push(_)}l.value.schemas.length||N(()=>{o({useSearchForm:!1})})}));const[u,{openModal:c}]=$(),[m,{reload:s,setProps:o}]=k({api:x(v,{format:"table_tree"}),columns:n,useSearchForm:!0,bordered:!0,isTreeTable:!0,formConfig:l,pagination:!1,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function i(r){return f(this,null,function*(){if(!a.value){T("\u5F53\u524D\u8868\u6CA1\u6709\u4E3B\u952E\uFF0C\u65E0\u6CD5\u7F16\u8F91");return}c(!0,{selectUrl:v,insertUrl:E,updateUrl:B,schemaUrl:g,column:a.value,value:r[a.value]})})}function d(r){return f(this,null,function*(){if(!a.value){T("\u5F53\u524D\u8868\u6CA1\u6709\u4E3B\u952E\uFF0C\u65E0\u6CD5\u5220\u9664");return}yield P(z,{column:a.value,value:r[a.value]}),p("\u5220\u9664\u6210\u529F"),s()})}function I(){c(!0,{selectUrl:v,insertUrl:E,updateUrl:B,schemaUrl:g})}return{registerTable:m,handleEdit:i,handleDelete:d,openRowModal:I,register:u,reload:s}}}),Q={class:"p-4"},W=J(" \u6DFB\u52A0\u8BB0\u5F55 ");function X(t,p,n,a,u,c){const m=h("a-button"),s=h("TableAction"),o=h("BasicTable"),i=h("ModalInserOrEdit");return V(),j("div",Q,[b(o,{onRegister:t.registerTable,showTableSetting:""},{toolbar:F(()=>[b(m,{type:"primary",onClick:t.openRowModal},{default:F(()=>[W]),_:1},8,["onClick"])]),action:F(({record:d})=>[b(s,{actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,d)},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",popConfirm:{title:"\u662F\u5426\u5220\u9664\uFF1F",confirm:t.handleDelete.bind(null,d)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),b(i,{onRegister:t.register,minHeight:300,onReload:t.reload},null,8,["onRegister","onReload"])])}var xe=S(L,[["render",X]]);export{xe as default};
