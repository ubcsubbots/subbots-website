(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){},134:function(e,a,t){},147:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},168:function(e,a,t){},177:function(e,a,t){},178:function(e,a,t){},179:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(28),l=t.n(i),o=(t(99),t(24)),c=t(10),s=t(11),m=t(13),u=t(12),d=t(14),p=t(39),b=t.n(p),E=t(15),h=t.n(E),f=t(3),g=t.n(f),v=t(23),C=t(41),N=(t(104),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"FooterContainer"},r.a.createElement(b.a,{fluid:!0},r.a.createElement(h.a,{className:"IconRow"},r.a.createElement(g.a,{sm:3,className:"my-auto"},r.a.createElement("div",{className:"CopyrightText"},"Copyright \xa9 UBC Subbots 2018")),r.a.createElement(g.a,null,r.a.createElement("a",{href:"https://www.facebook.com/ubc.subbots/"},r.a.createElement(v.a,{className:"Icon",icon:C.a,size:"2x"})),r.a.createElement("a",{href:"https://github.com/ubc-subbots"},r.a.createElement(v.a,{className:"Icon",icon:C.b,size:"2x"})),r.a.createElement("a",{href:"https://ca.linkedin.com/company/ubc-subbots"},r.a.createElement(v.a,{className:"Icon",icon:C.c,size:"2x"}))),r.a.createElement(g.a,{sm:3}))))}}]),a}(r.a.Component)),y=t(42),j=t.n(y),O=t(31),w=t.n(O),S=t(40),k=t.n(S),q=t(22),T=t.n(q),x=t(34),B=t.n(x),L=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(B.a,{show:this.props.isOpen},r.a.createElement(B.a.Header,{closeButton:!0},r.a.createElement(B.a.Title,null,"Modal title")),r.a.createElement(B.a.Body,null,r.a.createElement("p",null,"Modal body text goes here.")),r.a.createElement(B.a.Footer,null,r.a.createElement(T.a,{variant:"secondary"},"Close"),r.a.createElement(T.a,{variant:"primary"},"Save changes")))}}]),a}(r.a.Component),F=t(25),A=(t(134),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={navbarClass:"HeaderContainer",navbrandClass:"NavBrand",isSignInOpened:!1},window.onscroll=function(){document.body.scrollTop>60||document.documentElement.scrollTop>60?(t.setState({navbarClass:"HeaderContainerShrunk"}),t.setState({navbrandClass:"NavBrandShrunk"})):(t.setState({navbarClass:"HeaderContainer"}),t.setState({navbrandClass:"NavBrand"}))},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(j.a,{fixed:"top",expand:"lg",className:this.state.navbarClass},r.a.createElement(j.a.Brand,{className:"NavBrandContainer"},r.a.createElement(o.b,{to:"/",className:this.state.navbrandClass},r.a.createElement(v.a,{className:"SubbotsLogo",icon:F.b,size:"lg"})," UBC Subbots")),r.a.createElement(j.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,{className:"mr-auto"},r.a.createElement(w.a.Link,{className:"NavContainer"},r.a.createElement(o.b,{to:"/",className:"NavLink"},"Home")),r.a.createElement(w.a.Link,{className:"NavContainer"},r.a.createElement(o.b,{to:"/projects",className:"NavLink"},"Projects")),r.a.createElement(w.a.Link,{className:"NavContainer"},r.a.createElement(o.b,{to:"/teams",className:"NavLink"},"The Teams")),r.a.createElement(w.a.Link,{className:"NavContainer"},r.a.createElement(o.b,{to:"/join",className:"NavLink"},"Join Us")),r.a.createElement(w.a.Link,{className:"NavContainer"},r.a.createElement(o.b,{to:"/sponsors",className:"NavLink"},"Sponsorship"))),r.a.createElement(T.a,{className:"SignInButton",variant:"outline-warning",onClick:function(){return e.setState({isSignInOpened:!0})}},"Member Sign In"),r.a.createElement(L,{show:this.state.isSignInOpened}),r.a.createElement("a",{href:"https://www.ubc.ca/"},r.a.createElement(k.a,{className:"UBCLogo",src:"/subbots-website/images/ubc-logo.png"}))))}}]),a}(r.a.Component)),I=(t(147),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(g.a,{sm:1}),r.a.createElement(g.a,{sm:10}),r.a.createElement(g.a,{sm:1})),r.a.createElement(h.a,null,r.a.createElement(g.a,{sm:1}),r.a.createElement(g.a,{sm:10},r.a.createElement("div",{className:"ViewHeaderImageContainer"},r.a.createElement(k.a,{className:"ViewHeaderImage",src:"/subbots-website/images/"+this.props.image,alt:"Error!"}))),r.a.createElement(g.a,{sm:1}),r.a.createElement("div",{className:"ViewHeaderTitle"},this.props.title)),r.a.createElement(h.a,null,r.a.createElement(g.a,{sm:1}),r.a.createElement(g.a,{s:10},r.a.createElement("div",{className:"ViewHeaderBlurb"},this.props.blurb)),r.a.createElement(g.a,{sm:1})))}}]),a}(r.a.Component)),M={FADE_DURATION:1600,ELECTRICAL_TEAM:"Electrical",SOFTWARE_TEAM:"Software",MECHANICAL_TEAM:"Mechanical"},_=t(91),R=t.n(_);function H(e){return r.a.createElement("div",{className:"ViewContainer"},r.a.createElement(R.a,{bottom:!0,duration:M.FADE_DURATION},r.a.createElement(b.a,{fluid:!0,className:"p-0"},e.children)))}t(150);function U(e){return r.a.createElement(T.a,{className:"ContactButton",variant:"warning"},r.a.createElement("div",{className:"ContactText"},r.a.createElement(v.a,{className:"MailIcon",icon:F.c,size:"lg"}),"Contact Us"))}var D=t(29),W=t(92),z={home:{image:"software.jpg",title:"Welcome To UBC Subbots",blurb:" (Home Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum."},projects:{image:"mechanical.jpg",title:"See What We Make",blurb:" (Projects Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum."},teams:{image:"electrical.jpg",title:"See What Our Members Do",blurb:" (Teams Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum.",software:{blurb:" (Software Blurb) Lorem ipsum dolor sit amet, consectetur.",body:" (Software Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},electrical:{blurb:"(Electrical Blurb) Lorem ipsum dolor sit amet, consectetur.",body:" (Electrical Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},mechanical:{blurb:"(Mechanical Blurb) Lorem ipsum dolor sit amet, consectetur.",body:" (Mechanical Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},join:{image:"software.jpg",title:"Become Part Of The Team",blurb:" (Join Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum."},sponsors:{image:"electrical.jpg",title:"See Who Makes Us Possible",blurb:" (Sponsors Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum.",sponsor_list:[{image:"ubc_walter_gage.png",link:"http://waltergagebook.engineering.ubc.ca/walter-gage-memorial-bursary-in-engineering/"},{image:"subc.png",link:"https://subc.ca/"},{image:"ubc-applied-sciences-footer-logo.png",link:"https://apsc.ubc.ca/"},{image:"ubc-applied-sciences-footer-logo.png",link:"https://apsc.ubc.ca/"}]}},J=(t(151),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(H,null,r.a.createElement(I,{title:z.home.title,blurb:z.home.blurb,image:z.home.image}))}}]),a}(r.a.Component)),V=t(26),G=t.n(V),P=t(7),Y=t.n(P),K=t(93),Q=t.n(K),X=(t(168),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={validated:!1,first_name:"",last_name:"",email:"",year:0,team:"",reason:""},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"onFirstNameChange",value:function(e){this.setState({first_name:e.target.value})}},{key:"onLastNameChange",value:function(e){this.setState({last_name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onYearChange",value:function(e){this.setState({year:e.target.value})}},{key:"onTeamChange",value:function(e){this.setState({team:e.target.value})}},{key:"onReasonChange",value:function(e){this.setState({reason:e.target.value})}},{key:"onFormSubmit",value:function(e){if(e.preventDefault(),!0===e.currentTarget.checkValidity()){var a={first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,year:this.state.year,team:this.state.team,reason:this.state.reason};Q.a.post("/rest/join",a).then(function(e){console.log(e);var a=e.data.signee_email.status,t=e.data.subbot_email.status;a||t?!a&&t?alert("INFO: Subbots has recieved your infomation, but your personal confirmation failed to send"):a&&!t||alert("Success! Your application has been sent"):alert("ERROR: An unexpected email error has occured. Please try again in a few minutes")}).catch(function(e){console.log(e)})}else console.log("invalid form");this.setState({validated:!0})}},{key:"render",value:function(){return r.a.createElement(H,null,r.a.createElement(I,{title:z.join.title,blurb:z.join.blurb,image:z.join.image}),r.a.createElement(h.a,null,r.a.createElement(g.a,{sm:3}),r.a.createElement(g.a,{sm:6},r.a.createElement("div",{className:"JoinFormBorder"},r.a.createElement(G.a,{className:"JoinFormContainer"},r.a.createElement(G.a.Header,{className:"JoinFormHeader"},"UBC Subbots 2019-2020 Application"),r.a.createElement(Y.a,{noValidate:!0,validated:this.state.validated,className:"JoinForm",onSubmit:this.onFormSubmit.bind(this)},r.a.createElement(Y.a.Row,null,r.a.createElement(Y.a.Group,{as:g.a},r.a.createElement(Y.a.Label,null,"First Name *"),r.a.createElement(Y.a.Control,{onChange:this.onFirstNameChange.bind(this),placeholder:"Enter first name",required:!0}),r.a.createElement(Y.a.Control.Feedback,{type:"invalid"},"Required Field")),r.a.createElement(Y.a.Group,{as:g.a},r.a.createElement(Y.a.Label,null,"Last Name * "),r.a.createElement(Y.a.Control,{onChange:this.onLastNameChange.bind(this),placeholder:"Enter last name",required:!0}),r.a.createElement(Y.a.Control.Feedback,{type:"invalid"},"Required Field"))),r.a.createElement(Y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(Y.a.Label,null,"Email address * "),r.a.createElement(Y.a.Control,{onChange:this.onEmailChange.bind(this),type:"email",placeholder:"Enter email",required:!0}),r.a.createElement(Y.a.Control.Feedback,{type:"invalid"},"Required Field")),r.a.createElement(Y.a.Row,null,r.a.createElement(Y.a.Group,{as:g.a},r.a.createElement(Y.a.Label,null,"Year *"),r.a.createElement(Y.a.Control,{onChange:this.onYearChange.bind(this),as:"select",required:!0},r.a.createElement("option",{selected:!0,disabled:!0,hidden:!0}),r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"),r.a.createElement("option",null,"6")),r.a.createElement(Y.a.Control.Feedback,{type:"invalid"},"Required Field")),r.a.createElement(Y.a.Group,{as:g.a},r.a.createElement(Y.a.Label,null,"Desired Team *"),r.a.createElement(Y.a.Control,{onChange:this.onTeamChange.bind(this),as:"select",required:!0},r.a.createElement("option",{selected:!0,disabled:!0,hidden:!0}),r.a.createElement("option",null,M.ELECTRICAL_TEAM),r.a.createElement("option",null,M.SOFTWARE_TEAM),r.a.createElement("option",null,M.MECHANICAL_TEAM)),r.a.createElement(Y.a.Control.Feedback,{type:"invalid"},"Required Field"))),r.a.createElement(Y.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(Y.a.Label,null,"Reason for Application"),r.a.createElement(Y.a.Control,{onChange:this.onReasonChange.bind(this),style:{resize:"none"},as:"textarea",rows:"4",placeholder:"Tell us why you want to join"})),r.a.createElement(T.a,{className:"PrimaryButton",variant:"warning",type:"submit"},r.a.createElement("div",{className:"ApplyButtonText"},"Apply")))))),r.a.createElement(g.a,{sm:3})))}}]),a}(r.a.Component)),Z=(t(177),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(H,null,r.a.createElement(I,{title:z.projects.title,blurb:z.projects.blurb,image:z.projects.image}))}}]),a}(r.a.Component)),$=(t(85),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{sm:3},r.a.createElement("a",{href:this.props.link},r.a.createElement(G.a,{className:"SponsorCard"},r.a.createElement(G.a.Body,{className:"SponsorCardBody"},r.a.createElement("img",{className:"SponsorImage",src:"/subbots-website/sponsors/"+this.props.image,alt:"Sponsor"})))))}}]),a}(r.a.Component)),ee=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=z.sponsors.sponsor_list.map(function(e,a){return r.a.createElement($,{key:a,image:e.image,link:e.link})});return r.a.createElement(H,null,r.a.createElement(I,{title:z.sponsors.title,blurb:z.sponsors.blurb,image:z.sponsors.image}),r.a.createElement(h.a,null,r.a.createElement(g.a,{sm:2}),r.a.createElement(g.a,{sm:8},r.a.createElement(h.a,{className:"SponsorRow"},e)),r.a.createElement(g.a,{sm:2})))}}]),a}(r.a.Component),ae=(t(86),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).icons={Software:F.d,Mechanical:F.e,Electrical:F.a},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(G.a,{className:"TeamCard"},r.a.createElement(G.a.Header,{className:"TeamCardHeader"},this.props.team),r.a.createElement(G.a.Body,null,r.a.createElement(v.a,{className:"TeamIcon",icon:this.icons[this.props.team],size:"6x"}),r.a.createElement(G.a.Text,{className:"TeamText"},z.teams[this.props.team.toLowerCase()].blurb),r.a.createElement(T.a,{className:"SecondaryButton",variant:"primary",href:"#"+this.props.team},"Learn More"))))}}]),a}(r.a.Component)),te=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).icons={Software:F.d,Mechanical:F.e,Electrical:F.a},t.names={Software:"Software Team",Mechanical:"Mechanical Team",Electrical:"Electrical Team"},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:this.props.team,className:"HeaderBuffer"}),r.a.createElement(g.a,null,r.a.createElement("h3",{className:"TeamBodyHeader my-auto"},r.a.createElement(v.a,{className:"TeamIcon",icon:this.icons[this.props.team],size:"lg"}),this.names[this.props.team]),r.a.createElement("hr",null),r.a.createElement(h.a,null,r.a.createElement(g.a,{sm:6},r.a.createElement("h4",{className:"text-center"},"What We Do"),r.a.createElement("div",{className:"TeamBodyFrame"})),r.a.createElement(g.a,{sm:6},r.a.createElement("h4",{className:"text-center"},"What You'll Learn"),r.a.createElement("div",{className:"TeamBodyFrame"}))),r.a.createElement("div",{className:"TeamBodyText"},z.teams[this.props.team.toLowerCase()].body)))}}]),a}(r.a.Component),ne=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(H,null,r.a.createElement(I,{title:z.teams.title,blurb:z.teams.blurb,image:z.teams.image}),r.a.createElement(h.a,null,r.a.createElement(g.a,{sm:2}),r.a.createElement(g.a,{sm:8},r.a.createElement(h.a,null,r.a.createElement(ae,{team:"Software"}),r.a.createElement(ae,{team:"Electrical"}),r.a.createElement(ae,{team:"Mechanical"}))),r.a.createElement(g.a,{sm:2})),r.a.createElement("div",{className:"SeperatorTop"}),r.a.createElement("div",{className:"TeamBodyContainer"},r.a.createElement(te,{team:"Software"}),r.a.createElement(te,{team:"Electrical"}),r.a.createElement(te,{team:"Mechanical"})),r.a.createElement("div",{className:"SeperatorBottom"}))}}]),a}(r.a.Component);function re(){return r.a.createElement("main",null,r.a.createElement(W.a,null),r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/",component:J}),r.a.createElement(D.a,{path:"/teams",component:ne}),r.a.createElement(D.a,{path:"/projects",component:Z}),r.a.createElement(D.a,{path:"/sponsors",component:ee}),r.a.createElement(D.a,{path:"/join",component:X})))}t(178);l.a.render(r.a.createElement(function(){return console.log("/subbots-website"),r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{basename:"/subbots-website"},r.a.createElement(A,null),r.a.createElement(re,null),r.a.createElement(U,null),r.a.createElement(N,null)))},null),document.getElementById("root"))},85:function(e,a,t){},86:function(e,a,t){},94:function(e,a,t){e.exports=t(179)},99:function(e,a,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.dc4a0c84.chunk.js.map