import{a as A,b as D,c as L}from"./chunk-T7FTVVH4.js";import{c as y,d as I,e as k,f as S,g as E,h as T,i as F,j}from"./chunk-SSWCHCGC.js";import"./chunk-W2GSVJ4G.js";import"./chunk-EAQDNLNN.js";import{a as h,b as w}from"./chunk-T5O4TYWI.js";import"./chunk-5IO2JF2N.js";import{b,d as O}from"./chunk-6DTOOMV2.js";import"./chunk-22Z3IEFB.js";import"./chunk-HU7WFQWJ.js";import"./chunk-TNQGBTTS.js";import"./chunk-LZJPA33N.js";import"./chunk-B6GQN5TU.js";import"./chunk-BLCVZY47.js";import{$a as o,Db as s,Kb as x,Lb as u,Mb as g,Nb as n,Ob as i,Pb as m,Tb as C,Ya as f,Z as _,ab as v,dc as a,ec as l,fc as d,lb as M,pb as P}from"./chunk-X7EC65UH.js";var R=(()=>{class t extends A{static{this.PICTORIAL_SERVICE_URL="/pictorials"}constructor(){super(t.PICTORIAL_SERVICE_URL)}static{this.\u0275fac=function(c){return new(c||t)}}static{this.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var $=(t,p)=>p.id;function V(t,p){if(t&1&&m(0,"img",9),t&2){let r=p.$implicit;s("src",r.source,f)("title",r.title)}}function H(t,p){if(t&1&&(n(0,"div",12)(1,"span"),a(2),i()()),t&2){let r=p.$implicit;o(2),l(r.toString().toLowerCase())}}var Z=(()=>{class t extends D{constructor(r){super(r),this.pictorialService=r}static{this.\u0275fac=function(c){return new(c||t)(v(R))}}static{this.\u0275cmp=M({type:t,selectors:[["sns-pictorial"]],features:[P],decls:36,vars:11,consts:[["appearance","outlined",1,"post","pictorial"],["mat-card-avatar","",3,"src","title"],[1,"post-title",3,"title"],[1,"post-date"],[1,"author-identification"],[1,"author-displayname"],[1,"author-username"],[1,"post-content"],[1,"pictorial-images"],[3,"src","title"],["overflow-auto-scroll","",1,"post-categories"],["title","Post Purpose",1,"post-purpose"],["title","Post Mood",1,"post-mood"],["type","button","title","Like Post","mat-fab","","extended","",1,"post-action",3,"click"],["aria-hidden","false","aria-label","like post",1,"action-like",3,"fontIcon"],["type","button","title","Comment","mat-fab","","extended","",1,"post-action",3,"click"],["aria-hidden","false","aria-label","comment post","fontIcon","comment",1,"action-comment"]],template:function(c,e){c&1&&(n(0,"mat-card",0)(1,"mat-card-header"),m(2,"img",1),n(3,"mat-card-title",2)(4,"span"),a(5),i()(),n(6,"div",3)(7,"span"),a(8),i()(),n(9,"mat-card-subtitle")(10,"div",4)(11,"span",5),a(12),i(),n(13,"span"),a(14,"|"),i(),n(15,"span",6),a(16),i()()()(),n(17,"mat-card-content",7)(18,"p"),a(19),i(),n(20,"div",8),u(21,V,1,2,"img",9,$),i()(),n(23,"mat-card-actions")(24,"div",10)(25,"div",11)(26,"span"),a(27,"pictorial"),i()(),u(28,H,3,1,"div",12,x),i(),n(30,"button",13),C("click",function(){return e.fav()}),m(31,"mat-icon",14),a(32),i(),n(33,"button",15),C("click",function(){return e.commentPost()}),m(34,"mat-icon",16),a(35),i()()()),c&2&&(o(2),s("src",e.post.author.avatar,f)("title",e.post.author.username),o(),s("title",e.post.title),o(2),l(e.post.title),o(3),l(e.date),o(4),l(e.post.author.displayName),o(4),d("@",e.post.author.username,""),o(3),l(e.post.content),o(2),g(e.post.media),o(7),g(e.post.mood),o(3),s("fontIcon",e.isFav()?"favorite":"favorite_border"),o(),d(" ",e.post.likes," "),o(3),d(" ",e.post.comments," "))},dependencies:[j,y,E,F,k,T,S,I,w,h,O,b,L],styles:["mat-card-actions[_ngcontent-%COMP%]{justify-content:end;gap:1rem;padding:0rem 1rem}mat-card[_ngcontent-%COMP%]{background-color:#ffffff1a}.post[_ngcontent-%COMP%]{color:#000;border-color:#008b8b;border-radius:5px;overflow:hidden;--post-text-color: rgba(200, 200, 200, .8)}.post[_ngcontent-%COMP%]:hover{cursor:pointer}.post-title[_ngcontent-%COMP%], .author-identification[_ngcontent-%COMP%], .post-date[_ngcontent-%COMP%], .post-content[_ngcontent-%COMP%], .post-summary[_ngcontent-%COMP%]{color:var(--post-text-color)}.post-title[_ngcontent-%COMP%]{text-wrap:nowrap;text-overflow:ellipsis;overflow:hidden}.author-identification[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;gap:.5rem}.author-displayname[_ngcontent-%COMP%]{text-wrap:nowrap;text-overflow:ellipsis;overflow:hidden}.author-username[_ngcontent-%COMP%]{text-wrap:nowrap;opacity:65%}.post-action[_ngcontent-%COMP%]{height:1.5rem;box-shadow:none!important;background-color:transparent;color:var(--post-text-color)}.action-like[_ngcontent-%COMP%]{color:red}.action-comment[_ngcontent-%COMP%]{color:var(--post-text-color)}.post-date[_ngcontent-%COMP%]{flex:1;justify-self:end;text-align:end;text-wrap:nowrap}.post-categories[_ngcontent-%COMP%]{flex:1;font-size:.9rem;display:flex;flex-flow:row nowrap;gap:.5rem;text-overflow:ellipsis}.post-categories[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.post-purpose[_ngcontent-%COMP%], .post-topic[_ngcontent-%COMP%], .post-mood[_ngcontent-%COMP%]{padding:.2rem;border:1px solid rgba(0,0,0,35%);border-radius:.3rem}.post-purpose[_ngcontent-%COMP%]{background-color:#f0808080}.post-topic[_ngcontent-%COMP%]{background-color:#5f9ea080}.post-mood[_ngcontent-%COMP%]{background-color:#7b68ee80}.pictorial[_ngcontent-%COMP%]{text-align:start}.pictorial-images[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;border-radius:.2rem}.pictorial-images[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{min-width:33%;flex:1;object-fit:cover}"],changeDetection:0})}}return t})();export{Z as PictorialComponent};
