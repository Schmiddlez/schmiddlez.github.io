import{a as F,b as A,c as R}from"./chunk-T7FTVVH4.js";import{c as y,d as I,e as k,f as E,g as S,h as T,i as D,j}from"./chunk-SSWCHCGC.js";import"./chunk-W2GSVJ4G.js";import"./chunk-EAQDNLNN.js";import{a as O,b as w}from"./chunk-T5O4TYWI.js";import"./chunk-5IO2JF2N.js";import{b as P,d as h}from"./chunk-6DTOOMV2.js";import"./chunk-22Z3IEFB.js";import"./chunk-HU7WFQWJ.js";import"./chunk-TNQGBTTS.js";import"./chunk-LZJPA33N.js";import"./chunk-B6GQN5TU.js";import"./chunk-BLCVZY47.js";import{$a as i,Db as s,Jb as g,Nb as o,Ob as n,Pb as l,Tb as u,Ub as C,Ya as d,Z as M,ab as v,dc as a,ec as m,fc as p,lb as x,pb as b,sb as f}from"./chunk-X7EC65UH.js";var U=(()=>{class t extends F{static{this.COMMENT_SERVICE_URL="/comments"}constructor(){super(t.COMMENT_SERVICE_URL)}static{this.\u0275fac=function(c){return new(c||t)}}static{this.\u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function B(t,_){if(t&1&&(o(0,"span"),a(1,"Click to see:"),n(),o(2,"span"),a(3),n()),t&2){let r=C();i(3),m(r.post.original_post.title)}}function V(t,_){t&1&&(o(0,"span"),a(1,"<original post not found>"),n())}function H(t,_){if(t&1&&l(0,"img",10),t&2){let r=C();s("src",r.post.media.source,d)("title",r.post.media.title)}}var $=(()=>{class t extends A{constructor(r){super(r),this.commentService=r}static{this.\u0275fac=function(c){return new(c||t)(v(U))}}static{this.\u0275cmp=x({type:t,selectors:[["sns-comment"]],features:[b],decls:36,vars:13,consts:[["appearance","outlined",1,"post","comment"],[1,"comment-originalpost"],["aria-hidden","false","aria-label","to original post","fontIcon","subdirectory_arrow_left",1,"comment-to-original"],["mat-card-avatar","",3,"src","title"],[1,"post-title",3,"title"],[1,"post-date"],[1,"author-identification"],[1,"author-displayname"],[1,"author-username"],[1,"post-content"],[1,"comment-media",3,"src","title"],["overflow-auto-scroll","",1,"post-categories"],["title","Post Purpose",1,"post-purpose"],["type","button","title","Like Post","mat-fab","","extended","",1,"post-action",3,"click"],["aria-hidden","false","aria-label","like post",1,"action-like",3,"fontIcon"],["type","button","title","Comment","mat-fab","","extended","",1,"post-action",3,"click"],["aria-hidden","false","aria-label","comment post","fontIcon","comment",1,"action-comment"]],template:function(c,e){c&1&&(o(0,"mat-card",0)(1,"div",1),l(2,"mat-icon",2),f(3,B,4,1)(4,V,2,0,"span"),n(),o(5,"mat-card-header"),l(6,"img",3),o(7,"mat-card-title",4)(8,"span"),a(9),n()(),o(10,"div",5)(11,"span"),a(12),n()(),o(13,"mat-card-subtitle")(14,"div",6)(15,"span",7),a(16),n(),o(17,"span"),a(18,"|"),n(),o(19,"span",8),a(20),n()()()(),o(21,"mat-card-content",9)(22,"p"),a(23),n(),f(24,H,1,2,"img",10),n(),o(25,"mat-card-actions")(26,"div",11)(27,"div",12)(28,"span"),a(29,"comment"),n()()(),o(30,"button",13),u("click",function(){return e.fav()}),l(31,"mat-icon",14),a(32),n(),o(33,"button",15),u("click",function(){return e.commentPost()}),l(34,"mat-icon",16),a(35),n()()()),c&2&&(i(3),g(e.post.original_post?3:4),i(3),s("src",e.post.author.avatar,d)("title",e.post.author.username),i(),s("title",e.post.title),i(2),m(e.post.title),i(3),m(e.date),i(4),m(e.post.author.displayName),i(4),p("@",e.post.author.username,""),i(3),m(e.post.content),i(),g(e.post.media?24:-1),i(7),s("fontIcon",e.isFav()?"favorite":"favorite_border"),i(),p(" ",e.post.likes," "),i(3),p(" ",e.post.comments," "))},dependencies:[j,y,S,D,k,T,E,I,w,O,h,P,R],styles:["mat-card-actions[_ngcontent-%COMP%]{justify-content:end;gap:1rem;padding:0rem 1rem}mat-card[_ngcontent-%COMP%]{background-color:#ffffff1a}.post[_ngcontent-%COMP%]{color:#000;border-color:#008b8b;border-radius:5px;overflow:hidden;--post-text-color: rgba(200, 200, 200, .8)}.post[_ngcontent-%COMP%]:hover{cursor:pointer}.post-title[_ngcontent-%COMP%], .author-identification[_ngcontent-%COMP%], .post-date[_ngcontent-%COMP%], .post-content[_ngcontent-%COMP%], .post-summary[_ngcontent-%COMP%]{color:var(--post-text-color)}.post-title[_ngcontent-%COMP%]{text-wrap:nowrap;text-overflow:ellipsis;overflow:hidden}.author-identification[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;gap:.5rem}.author-displayname[_ngcontent-%COMP%]{text-wrap:nowrap;text-overflow:ellipsis;overflow:hidden}.author-username[_ngcontent-%COMP%]{text-wrap:nowrap;opacity:65%}.post-action[_ngcontent-%COMP%]{height:1.5rem;box-shadow:none!important;background-color:transparent;color:var(--post-text-color)}.action-like[_ngcontent-%COMP%]{color:red}.action-comment[_ngcontent-%COMP%]{color:var(--post-text-color)}.post-date[_ngcontent-%COMP%]{flex:1;justify-self:end;text-align:end;text-wrap:nowrap}.post-categories[_ngcontent-%COMP%]{flex:1;font-size:.9rem;display:flex;flex-flow:row nowrap;gap:.5rem;text-overflow:ellipsis}.post-categories[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.post-purpose[_ngcontent-%COMP%], .post-topic[_ngcontent-%COMP%], .post-mood[_ngcontent-%COMP%]{padding:.2rem;border:1px solid rgba(0,0,0,35%);border-radius:.3rem}.post-purpose[_ngcontent-%COMP%]{background-color:#f0808080}.post-topic[_ngcontent-%COMP%]{background-color:#5f9ea080}.post-mood[_ngcontent-%COMP%]{background-color:#7b68ee80}.comment[_ngcontent-%COMP%]{text-align:start}.comment-media[_ngcontent-%COMP%]{display:block;width:90%;border-radius:2%;box-shadow:var(--mdc-extended-fab-container-elevation-shadow);margin:auto}.comment-originalpost[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;gap:.25rem;padding:.5rem 1rem;letter-spacing:.1rem;opacity:75%}.comment-to-original[_ngcontent-%COMP%]{rotate:90deg;vertical-align:text-bottom}.comment-originalpost[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-top:.5rem}"],changeDetection:0})}}return t})();export{$ as CommentComponent};
