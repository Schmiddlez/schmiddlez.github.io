import{a as h}from"./chunk-CR5TPDSS.js";import{B as c,Da as u,Z as r,da as a,j as o,n,r as i}from"./chunk-3AA7O2RR.js";var l=(()=>{class e{constructor(){this.loginSession=new o(!1),this.loginSession$=this.loginSession.asObservable(),this.securedSession=new o(!1),this.securedSession$=this.securedSession.asObservable()}newSession(s){switch(s){case"login":this.loginSession.next(!0);break;case"secured":this.securedSession.next(!0);break}}sessionExpired(s){switch(s){case"login":this.loginSession.next(!1);break;case"secured":this.securedSession.next(!1);break}}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var g=(()=>{class e{static{this.SERVICE_URL="/users/@me/secured"}constructor(){this.userService=a(h),this.confirmationResponse="success",this.securedResponse="secured",this.expiry=1e3*600,this.questions=u([]),this.questions$=this.questions.asReadonly(),this.userService.get$(`${e.SERVICE_URL}/questions`).subscribe({next:s=>{this.questions.set(s)}})}requestVerification$(){return this.userService.get$(`${e.SERVICE_URL}`).pipe(i(s=>s.message==this.confirmationResponse))}confirmVerification$(s){return this.userService.post$(`${e.SERVICE_URL}`,{password:s}).pipe(c(t=>n(!1)),i(t=>t.message==this.securedResponse))}isSecured$(){return this.userService.get$(`${e.SERVICE_URL}/status`).pipe(c(s=>n(!1)),i(s=>s.message==this.securedResponse))}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{l as a,g as b};
