import{a as F,b as D,c as R}from"./chunk-T7FTVVH4.js";import{c as y,d as I,e as S,f as k,g as E,h as A,i as T,j as L}from"./chunk-SSWCHCGC.js";import"./chunk-W2GSVJ4G.js";import"./chunk-EAQDNLNN.js";import{a as w,b as O}from"./chunk-T5O4TYWI.js";import"./chunk-5IO2JF2N.js";import{b as x,d as P}from"./chunk-6DTOOMV2.js";import"./chunk-22Z3IEFB.js";import"./chunk-HU7WFQWJ.js";import"./chunk-TNQGBTTS.js";import"./chunk-LZJPA33N.js";import"./chunk-B6GQN5TU.js";import"./chunk-BLCVZY47.js";import{$a as o,Db as s,Kb as u,Lb as C,Mb as g,Nb as i,Ob as n,Pb as p,Tb as v,Ya as f,Z as _,ab as M,dc as a,ec as c,fc as d,lb as b,pb as h}from"./chunk-X7EC65UH.js";var j=(()=>{class e extends F{static{this.ARTICLE_SERVICE_URL="/articles"}constructor(){super(e.ARTICLE_SERVICE_URL)}static{this.\u0275fac=function(l){return new(l||e)}}static{this.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function V(e,m){if(e&1&&(i(0,"div",11)(1,"span"),a(2),n()()),e&2){let r=m.$implicit;o(2),c(r.toString().toLowerCase())}}function $(e,m){if(e&1&&(i(0,"div",12)(1,"span"),a(2),n()()),e&2){let r=m.$implicit;o(2),c(r.toString().toLowerCase())}}var Y=(()=>{class e extends D{constructor(r){super(r),this.articleService=r}static{this.\u0275fac=function(l){return new(l||e)(M(j))}}static{this.\u0275cmp=b({type:e,selectors:[["sns-article"]],features:[h],decls:36,vars:14,consts:[["appearance","outlined",1,"post","article"],["mat-card-avatar","",3,"src","title"],[1,"post-title",3,"title"],[1,"post-date"],[1,"author-identification"],[1,"author-displayname"],[1,"author-username"],[1,"post-content"],[1,"article-thumbnail",3,"src","title"],["overflow-auto-scroll","",1,"post-categories"],["title","Post Purpose",1,"post-purpose"],["title","Post Topic",1,"post-topic"],["title","Post Mood",1,"post-mood"],["type","button","title","Like Post","mat-fab","","extended","",1,"post-action",3,"click"],["aria-hidden","false","aria-label","like post",1,"action-like",3,"fontIcon"],["type","button","title","Comment","mat-fab","","extended","",1,"post-action",3,"click"],["aria-hidden","false","aria-label","comment post","fontIcon","comment",1,"action-comment"]],template:function(l,t){l&1&&(i(0,"mat-card",0)(1,"mat-card-header"),p(2,"img",1),i(3,"mat-card-title",2)(4,"span"),a(5),n()(),i(6,"div",3)(7,"span"),a(8),n()(),i(9,"mat-card-subtitle")(10,"div",4)(11,"span",5),a(12),n(),i(13,"span"),a(14,"|"),n(),i(15,"span",6),a(16),n()()()(),i(17,"mat-card-content",7)(18,"p"),a(19),n(),p(20,"img",8),n(),i(21,"mat-card-actions")(22,"div",9)(23,"div",10)(24,"span"),a(25),n()(),C(26,V,3,1,"div",11,u),C(28,$,3,1,"div",12,u),n(),i(30,"button",13),v("click",function(){return t.fav()}),p(31,"mat-icon",14),a(32),n(),i(33,"button",15),v("click",function(){return t.commentPost()}),p(34,"mat-icon",16),a(35),n()()()),l&2&&(o(2),s("src",t.post.author.avatar,f)("title",t.post.author.username),o(),s("title",t.post.title),o(2),c(t.post.title),o(3),c(t.date),o(4),c(t.post.author.displayName),o(4),d("@",t.post.author.username,""),o(3),c(t.post.summary),o(),s("src",t.post.thumbnail.source,f)("title",t.post.thumbnail.title),o(5),c(t.post.purpose.toString().toLowerCase()),o(),g(t.post.topics),o(2),g(t.post.mood),o(3),s("fontIcon",t.isFav()?"favorite":"favorite_border"),o(),d(" ",t.post.likes," "),o(3),d(" ",t.post.comments," "))},dependencies:[L,y,E,T,S,A,k,I,O,w,P,x,R],styles:["mat-card-actions[_ngcontent-%COMP%]{justify-content:end;gap:1rem;padding:0rem 1rem}mat-card[_ngcontent-%COMP%]{background-color:#ffffff1a}.post[_ngcontent-%COMP%]{color:#000;border-color:#008b8b;border-radius:5px;overflow:hidden;--post-text-color: rgba(200, 200, 200, .8)}.post[_ngcontent-%COMP%]:hover{cursor:pointer}.post-title[_ngcontent-%COMP%], .author-identification[_ngcontent-%COMP%], .post-date[_ngcontent-%COMP%], .post-content[_ngcontent-%COMP%], .post-summary[_ngcontent-%COMP%]{color:var(--post-text-color)}.post-title[_ngcontent-%COMP%]{text-wrap:nowrap;text-overflow:ellipsis;overflow:hidden}.author-identification[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;gap:.5rem}.author-displayname[_ngcontent-%COMP%]{text-wrap:nowrap;text-overflow:ellipsis;overflow:hidden}.author-username[_ngcontent-%COMP%]{text-wrap:nowrap;opacity:65%}.post-action[_ngcontent-%COMP%]{height:1.5rem;box-shadow:none!important;background-color:transparent;color:var(--post-text-color)}.action-like[_ngcontent-%COMP%]{color:red}.action-comment[_ngcontent-%COMP%]{color:var(--post-text-color)}.post-date[_ngcontent-%COMP%]{flex:1;justify-self:end;text-align:end;text-wrap:nowrap}.post-categories[_ngcontent-%COMP%]{flex:1;font-size:.9rem;display:flex;flex-flow:row nowrap;gap:.5rem;text-overflow:ellipsis}.post-categories[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.post-purpose[_ngcontent-%COMP%], .post-topic[_ngcontent-%COMP%], .post-mood[_ngcontent-%COMP%]{padding:.2rem;border:1px solid rgba(0,0,0,35%);border-radius:.3rem}.post-purpose[_ngcontent-%COMP%]{background-color:#f0808080}.post-topic[_ngcontent-%COMP%]{background-color:#5f9ea080}.post-mood[_ngcontent-%COMP%]{background-color:#7b68ee80}.article[_ngcontent-%COMP%]{text-align:start}.article-thumbnail[_ngcontent-%COMP%]{width:100%;border-radius:2%;box-shadow:var(--mdc-extended-fab-container-elevation-shadow)}"],changeDetection:0})}}return e})();export{Y as ArticleComponent};
