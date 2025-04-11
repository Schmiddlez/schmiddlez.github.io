import{a as h}from"./chunk-CRXCR2JF.js";import{b as d}from"./chunk-UUBVQWNF.js";import{Da as n,Z as $,a as l,b as a,r as u}from"./chunk-3AA7O2RR.js";var R=(()=>{class r extends d{static{this.SERVICE_URL="/users"}constructor(){super(r.SERVICE_URL),this.loadingMe=n(!1),this.loadingMe$=this.loadingMe.asReadonly(),this.me=n(h),this.me$=this.me.asReadonly(),this.loadingUser=n(!1),this.loadingUser$=this.loadingUser.asReadonly(),this.user=n(h),this.user$=this.user.asReadonly(),this.loadingMe.set(!0),this.getMe$().subscribe(s=>{s.customStyles={"border-color":"pink"},this.me.set(s)}).add(()=>this.loadingMe.set(!1))}getMe$(){return this.get$(`${r.SERVICE_URL}/@me`)}changePassword$(s,e,t){return this.post$(`${r.SERVICE_URL}/@me/secured/password/update`,{currentPassword:s,newPassword:e,confirmedPassword:t})}resetPassword$(s,e,t){let o=this.questionsArrayToMap(t);return this.post$(`${r.SERVICE_URL}/@me/secured/password/reset`,{newPassword:s,confirmedPassword:e,questions:o})}changeQuestions$(s,e){let t=this.questionsArrayToMap(e);return this.post$(`${r.SERVICE_URL}/@me/secured/questions/reset`,{currentPassword:s,questions:t})}questionsArrayToMap(s){return s.reduce((e,t)=>(e[t.question]=t.answer,e),{})}updateFollows(...s){let e=this.me().follows;for(let t of s)e.includes(t)||e.push(t);this.me.update(t=>a(l({},t),{follows:e}))}removeFollows(...s){let e=this.me().follows;for(let t of s){let o=e.findIndex(i=>i==t);o>=0&&e.splice(o,1)}this.me.update(t=>a(l({},t),{follows:e}))}updateLikes(s){this.me.update(e=>a(l({},e),{likes:s}))}getUserByUsername$(s){return this.get$(`${r.SERVICE_URL}/${s}?username=true`)}getUserByUsername(s){this.get$(`${r.SERVICE_URL}/${s}?username=true`).subscribe({next:e=>{this.user.set(e)},error:e=>{console.log(e)}})}getUserFollows$(s,e=0){return this.get$(`${r.SERVICE_URL}/${s.id}/follows?page=${e}`)}getUserFollowers$(s,e=0){return this.get$(`${r.SERVICE_URL}/${s.id}/followers?page=${e}`)}getUserAnnouncements$(s){return this.get$(`${r.SERVICE_URL}/${s.id}/announcements`)}getUserComments$(s,e=0){return this.get$(`${r.SERVICE_URL}/${s.id}/comments?page=${e}`)}getUserLikes$(s,e=0){return this.get$(`${r.SERVICE_URL}/${s.id}/likes?page=${e}`)}getUserPostsForProfile$(s,e=0){return this.get$(`${r.SERVICE_URL}/${s.id}/posts/profile?page=${e}`)}getUserFollows(s,e=0,t,o){this.getUserFollows$(s,e).subscribe({next:t,error:i=>this.showToastError(i,"An error while retrieving user's follows.")}).add(o)}getUserFollowers(s,e=0,t,o){this.getUserFollowers$(s,e).subscribe({next:t,error:i=>this.showToastError(i,"An error while retrieving user's followers.")}).add(o)}getUserAnnouncements(s,e,t){this.getUserAnnouncements$(s).subscribe({next:e,error:o=>this.showToastError(o,"An error while retrieving user's announcements.")}).add(t)}getUserComments(s,e=0,t,o){this.getUserComments$(s,e).subscribe({next:t,error:i=>this.showToastError(i,"An error while retrieving user's comments.")}).add(o)}getUserLikes(s,e=0,t,o){this.getUserLikes$(s,e).subscribe({next:t,error:i=>this.showToastError(i,"An error while retrieving user's likes.")}).add(o)}getUserPostsForProfile(s,e=0,t,o){this.getUserPostsForProfile$(s,e).subscribe({next:t,error:i=>this.showToastError(i,"An error while retrieving user's posts.")}).add(o)}followUser$(s){return this.post$(`${r.SERVICE_URL}/follow`,s.id).pipe(u(e=>e.message))}unfollowUser$(s){return this.post$(`${r.SERVICE_URL}/unfollow`,s.id).pipe(u(e=>e.message))}showToastError(s,e){this.toastService.show({header:"Error",body:e,type:"danger",source_feature:"sns"})}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275prov=$({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{R as a};
