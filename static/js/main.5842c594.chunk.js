(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){},134:function(e,a,t){},149:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},168:function(e,a,t){},177:function(e,a,t){},178:function(e,a,t){},179:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(28),l=t.n(i),o=(t(99),t(24)),c=t(10),s=t(11),m=t(13),u=t(12),d=t(14),p=t(39),b=t.n(p),E=t(15),h=t.n(E),f=t(3),v=t.n(f),g=t(23),C=t(40),y=(t(104),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"FooterContainer"},r.a.createElement(b.a,{fluid:!0},r.a.createElement(h.a,{className:"IconRow"},r.a.createElement(v.a,null,r.a.createElement(g.a,{className:"Icon",icon:C.a,size:"2x"}),r.a.createElement(g.a,{className:"Icon",icon:C.b,size:"2x"}),r.a.createElement(g.a,{className:"Icon",icon:C.c,size:"2x"})))))}}]),a}(r.a.Component)),N=t(41),j=t.n(N),O=t(31),k=t.n(O),q=t(90),S=t.n(q),w=t(22),x=t.n(w),B=t(34),L=t.n(B),T=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(L.a,{show:this.props.isOpen},r.a.createElement(L.a.Header,{closeButton:!0},r.a.createElement(L.a.Title,null,"Modal title")),r.a.createElement(L.a.Body,null,r.a.createElement("p",null,"Modal body text goes here.")),r.a.createElement(L.a.Footer,null,r.a.createElement(x.a,{variant:"secondary"},"Close"),r.a.createElement(x.a,{variant:"primary"},"Save changes")))}}]),a}(r.a.Component),F=t(25),I=(t(134),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={navbarClass:"HeaderContainer",navbrandClass:"NavBrand",isSignInOpened:!1},window.onscroll=function(){document.body.scrollTop>65||document.documentElement.scrollTop>65?(t.setState({navbarClass:"HeaderContainerShrunk"}),t.setState({navbrandClass:"NavBrandShrunk"})):(t.setState({navbarClass:"HeaderContainer"}),t.setState({navbrandClass:"NavBrand"}))},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(j.a,{fixed:"top",expand:"lg",className:this.state.navbarClass},r.a.createElement(j.a.Brand,{className:"NavBrandContainer"},r.a.createElement(o.b,{to:"/",className:this.state.navbrandClass},r.a.createElement(g.a,{className:"SubbotsLogo",icon:F.b,size:"lg"})," UBC Subbots")),r.a.createElement(j.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(k.a,{className:"mr-auto"},r.a.createElement(k.a.Link,{className:"NavContainer"},r.a.createElement(o.b,{to:"/",className:"NavLink"},"Home")),r.a.createElement(k.a.Link,{className:"NavContainer"},r.a.createElement(o.b,{to:"/projects",className:"NavLink"},"Projects")),r.a.createElement(k.a.Link,{className:"NavContainer"},r.a.createElement(o.b,{to:"/teams",className:"NavLink"},"The Teams")),r.a.createElement(k.a.Link,{className:"NavContainer"},r.a.createElement(o.b,{to:"/join",className:"NavLink"},"Join Us")),r.a.createElement(k.a.Link,{className:"NavContainer"},r.a.createElement(o.b,{to:"/sponsors",className:"NavLink"},"Sponsorship"))),r.a.createElement(x.a,{className:"SignInButton",variant:"outline-warning",onClick:function(){return e.setState({isSignInOpened:!0})}},"Member Sign In"),r.a.createElement(T,{show:this.state.isSignInOpened}),r.a.createElement("a",{href:"https://www.ubc.ca/"},r.a.createElement(S.a,{className:"UBCLogo",src:"/images/ubc-logo.png"}))))}}]),a}(r.a.Component)),M=t(91),H=t.n(M),U=1600,D="Electrical",R="Software",_="Mechanical",z=(t(149),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H.a,{bottom:!0,duration:U},r.a.createElement(h.a,null,r.a.createElement(v.a,{sm:1}),r.a.createElement(v.a,{sm:10}),r.a.createElement(v.a,{sm:1})),r.a.createElement(h.a,null,r.a.createElement(v.a,{sm:1}),r.a.createElement(v.a,{sm:10},r.a.createElement("div",{className:"ViewHeaderImage"},r.a.createElement("img",{style:{visibility:"hidden",width:"100%",height:"100%",opacity:"0.4"},src:"/software-team.jpg",alt:"Error!"}))),r.a.createElement(v.a,{sm:1}),r.a.createElement("div",{className:"ViewHeaderTitle"},this.props.title)),r.a.createElement(h.a,null,r.a.createElement(v.a,{sm:1}),r.a.createElement(v.a,{s:10},r.a.createElement("div",{className:"ViewHeaderBlurb"},this.props.blurb)),r.a.createElement(v.a,{sm:1}))))}}]),a}(r.a.Component));function J(e){return r.a.createElement("div",{className:"ViewContainer"},r.a.createElement(b.a,{fluid:!0,className:"p-0"},e.children))}t(150);function W(e){return r.a.createElement(x.a,{className:"ContactButton",variant:"warning"},r.a.createElement("div",{className:"ContactText"},r.a.createElement(g.a,{className:"MailIcon",icon:F.c,size:"lg"}),"Contact Us"))}var A=t(29),G=t(92),V={home:{image:"",title:"Welcome To UBC Subbots",blurb:" (Home Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum."},projects:{image:"",title:"See What We Make",blurb:" (Projects Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum."},teams:{image:"",title:"See What Our Members Do",blurb:" (Teams Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum.",software:{blurb:" (Software Blurb) Lorem ipsum dolor sit amet, consectetur.",body:" (Software Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},electrical:{blurb:"(Electrical Blurb) Lorem ipsum dolor sit amet, consectetur.",body:" (Electrical Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},mechanical:{blurb:"(Mechanical Blurb) Lorem ipsum dolor sit amet, consectetur.",body:" (Mechanical Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},join:{image:"",title:"Become Part Of The Team",blurb:" (Join Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum."},sponsors:{image:"",title:"See Who Makes Us Possible",blurb:" (Sponsors Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum.",sponsor_list:[{image:"ubc_walter_gage.png",link:"http://waltergagebook.engineering.ubc.ca/walter-gage-memorial-bursary-in-engineering/"},{image:"subc.png",link:"https://subc.ca/"},{image:"ubc-applied-sciences-footer-logo.png",link:"https://apsc.ubc.ca/"}]}},P=(t(151),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(J,null,r.a.createElement(z,{title:V.home.title,blurb:V.home.blurb}))}}]),a}(r.a.Component)),Y=t(26),K=t.n(Y),Q=t(7),X=t.n(Q),Z=t(93),$=t.n(Z),ee=(t(168),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={validated:!1,first_name:"",last_name:"",email:"",year:0,team:"",reason:""},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"onFirstNameChange",value:function(e){this.setState({first_name:e.target.value})}},{key:"onLastNameChange",value:function(e){this.setState({last_name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onYearChange",value:function(e){this.setState({year:e.target.value})}},{key:"onTeamChange",value:function(e){this.setState({team:e.target.value})}},{key:"onReasonChange",value:function(e){this.setState({reason:e.target.value})}},{key:"onFormSubmit",value:function(e){if(e.preventDefault(),!0===e.currentTarget.checkValidity()){var a={first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,year:this.state.year,team:this.state.team,reason:this.state.reason};$.a.post("/rest/join",a).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}else console.log("invalid form");this.setState({validated:!0})}},{key:"render",value:function(){return r.a.createElement(J,null,r.a.createElement(z,{title:V.join.title,blurb:V.join.blurb}),r.a.createElement(h.a,null,r.a.createElement(v.a,{sm:3}),r.a.createElement(v.a,{sm:6},r.a.createElement("div",{className:"JoinFormBorder"},r.a.createElement(K.a,{className:"JoinFormContainer"},r.a.createElement(K.a.Header,{className:"JoinFormHeader"},"UBC Subbots 2019-2020 Application"),r.a.createElement(X.a,{noValidate:!0,validated:this.state.validated,className:"JoinForm",onSubmit:this.onFormSubmit.bind(this)},r.a.createElement(X.a.Row,null,r.a.createElement(X.a.Group,{as:v.a},r.a.createElement(X.a.Label,null,"First Name *"),r.a.createElement(X.a.Control,{onChange:this.onFirstNameChange.bind(this),placeholder:"Enter first name",required:!0}),r.a.createElement(X.a.Control.Feedback,{type:"invalid"},"Required Field")),r.a.createElement(X.a.Group,{as:v.a},r.a.createElement(X.a.Label,null,"Last Name * "),r.a.createElement(X.a.Control,{onChange:this.onLastNameChange.bind(this),placeholder:"Enter last name",required:!0}),r.a.createElement(X.a.Control.Feedback,{type:"invalid"},"Required Field"))),r.a.createElement(X.a.Group,{controlId:"formBasicEmail"},r.a.createElement(X.a.Label,null,"Email address * "),r.a.createElement(X.a.Control,{onChange:this.onEmailChange.bind(this),type:"email",placeholder:"Enter email",required:!0}),r.a.createElement(X.a.Control.Feedback,{type:"invalid"},"Required Field")),r.a.createElement(X.a.Row,null,r.a.createElement(X.a.Group,{as:v.a},r.a.createElement(X.a.Label,null,"Year *"),r.a.createElement(X.a.Control,{onChange:this.onYearChange.bind(this),as:"select",required:!0},r.a.createElement("option",{selected:!0,disabled:!0,hidden:!0}),r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"),r.a.createElement("option",null,"6")),r.a.createElement(X.a.Control.Feedback,{type:"invalid"},"Required Field")),r.a.createElement(X.a.Group,{as:v.a},r.a.createElement(X.a.Label,null,"Desired Team *"),r.a.createElement(X.a.Control,{onChange:this.onTeamChange.bind(this),as:"select",required:!0},r.a.createElement("option",{selected:!0,disabled:!0,hidden:!0}),r.a.createElement("option",null,D),r.a.createElement("option",null,R),r.a.createElement("option",null,_)),r.a.createElement(X.a.Control.Feedback,{type:"invalid"},"Required Field"))),r.a.createElement(X.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(X.a.Label,null,"Reason for Application"),r.a.createElement(X.a.Control,{onChange:this.onReasonChange.bind(this),style:{resize:"none"},as:"textarea",rows:"4",placeholder:"Tell us why you want to join"})),r.a.createElement(x.a,{className:"PrimaryButton",variant:"warning",type:"submit"},r.a.createElement("div",{className:"ApplyButtonText"},"Apply")))))),r.a.createElement(v.a,{sm:3})))}}]),a}(r.a.Component)),ae=(t(177),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(J,null,r.a.createElement(z,{title:V.projects.title,blurb:V.projects.blurb}))}}]),a}(r.a.Component)),te=(t(84),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{sm:4},r.a.createElement("a",{href:this.props.link},r.a.createElement(K.a,{className:"SponsorCard"},r.a.createElement(K.a.Body,{className:"SponsorCardBody"},r.a.createElement("img",{className:"SponsorImage",src:"/sponsors/"+this.props.image,alt:"Sponsor"})))))}}]),a}(r.a.Component)),ne=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=V.sponsors.sponsor_list.map(function(e,a){return r.a.createElement(te,{key:a,image:e.image,link:e.link})});return r.a.createElement(J,null,r.a.createElement(z,{title:V.sponsors.title,blurb:V.sponsors.blurb}),r.a.createElement(h.a,null,r.a.createElement(v.a,{sm:2}),r.a.createElement(v.a,{sm:8},r.a.createElement(h.a,{className:"SponsorRow"},e)),r.a.createElement(v.a,{sm:2})))}}]),a}(r.a.Component),re=(t(85),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).icons={Software:F.d,Mechanical:F.e,Electrical:F.a},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(K.a,{className:"TeamCard"},r.a.createElement(K.a.Header,{className:"TeamCardHeader"},this.props.team),r.a.createElement(K.a.Body,null,r.a.createElement(g.a,{className:"TeamIcon",icon:this.icons[this.props.team],size:"6x"}),r.a.createElement(K.a.Text,{className:"TeamText"},V.teams[this.props.team.toLowerCase()].blurb),r.a.createElement(x.a,{className:"SecondaryButton",variant:"primary",href:"#"+this.props.team},"Learn More"))))}}]),a}(r.a.Component)),ie=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).icons={Software:F.d,Mechanical:F.e,Electrical:F.a},t.names={Software:"Software Team",Mechanical:"Mechanical Team",Electrical:"Electrical Team"},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:this.props.team,className:"HeaderBuffer"}),r.a.createElement(v.a,null,r.a.createElement("h3",{className:"TeamBodyHeader my-auto"},r.a.createElement(g.a,{className:"TeamIcon",icon:this.icons[this.props.team],size:"lg"}),this.names[this.props.team]),r.a.createElement("hr",null),r.a.createElement(h.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement("h4",{className:"text-center"},"What We Do"),r.a.createElement("div",{className:"TeamBodyFrame"})),r.a.createElement(v.a,{sm:6},r.a.createElement("h4",{className:"text-center"},"What You'll Learn"),r.a.createElement("div",{className:"TeamBodyFrame"}))),r.a.createElement("div",{className:"TeamBodyText"},V.teams[this.props.team.toLowerCase()].body)))}}]),a}(r.a.Component),le=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(J,null,r.a.createElement(z,{title:V.teams.title,blurb:V.teams.blurb}),r.a.createElement(h.a,null,r.a.createElement(v.a,{sm:2}),r.a.createElement(v.a,{sm:8},r.a.createElement(h.a,null,r.a.createElement(re,{team:"Software"}),r.a.createElement(re,{team:"Electrical"}),r.a.createElement(re,{team:"Mechanical"}))),r.a.createElement(v.a,{sm:2})),r.a.createElement("div",{className:"SeperatorTop"}),r.a.createElement("div",{className:"TeamBodyContainer"},r.a.createElement(ie,{team:"Software"}),r.a.createElement(ie,{team:"Electrical"}),r.a.createElement(ie,{team:"Mechanical"})),r.a.createElement("div",{className:"SeperatorBottom"}))}}]),a}(r.a.Component);function oe(){return r.a.createElement("main",null,r.a.createElement(G.a,null),r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/",component:P}),r.a.createElement(A.a,{path:"/teams",component:le}),r.a.createElement(A.a,{path:"/projects",component:ae}),r.a.createElement(A.a,{path:"/sponsors",component:ne}),r.a.createElement(A.a,{path:"/join",component:ee})))}t(178);l.a.render(r.a.createElement(function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(I,null),r.a.createElement(oe,null),r.a.createElement(W,null),r.a.createElement(y,null)))},null),document.getElementById("root"))},84:function(e,a,t){},85:function(e,a,t){},94:function(e,a,t){e.exports=t(179)},99:function(e,a,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.5842c594.chunk.js.map