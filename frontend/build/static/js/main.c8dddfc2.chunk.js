(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{16:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},55:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){"use strict";s.r(t);var c=s(1),r=s.n(c),a=s(27),n=s.n(a),i=(s(34),s(2)),l=(s(35),s(0));var j=function(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("h1",{children:"Welcome to Twitter Search Thingy"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae volutpat tortor. Maecenas dignissim fringilla nulla ut faucibus. Fusce eget efficitur sapien, id gravida odio. Aenean tristique eros eu massa venenatis dignissim. Curabitur tempor, enim vel faucibus auctor, lectus est ullamcorper eros, eget porta eros lacus vehicula eros. Quisque augue odio, suscipit sodales porttitor quis, varius vitae massa. Sed rutrum at orci ut maximus. Nunc vel tempus urna."}),Object(l.jsx)("img",{src:"https://via.placeholder.com/300",alt:"Placeholder"})]})},d=s(4),o=s(8),u=s.n(o),h=s(12),b=(s(16),s(17).default);var m=function(e){var t=Object(c.useState)(),s=Object(d.a)(t,2),r=s[0],a=s[1],n=function(){var t=Object(h.a)(u.a.mark((function t(s){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s&&s.preventDefault(),t.next=3,b.get("http://localhost:5000/api/search",{params:{query:r}});case 3:c=t.sent,e.setQueryResults(c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsx)("form",{onSubmit:n,className:"inputForm",children:Object(l.jsx)("input",{className:"inputForm__input",onChange:function(e){a(encodeURIComponent(e.target.value))},type:"text",placeholder:"Search Twitter"})})};var O=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("details",{className:"rules",children:[Object(l.jsx)("summary",{children:"Search Rules"}),Object(l.jsx)("p",{className:"rules__description",children:"Welcome! Search Twitter allows you to search the last 6-9 days worth of tweets. Below are some rules you can use to find what you are looking for."}),Object(l.jsxs)("table",{className:"rules__table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Example"}),Object(l.jsx)("th",{children:"Result"})]})}),Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"#Braves"}),Object(l.jsx)("td",{children:"Finds tweets with the hashtag Braves"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"from:Braves"}),Object(l.jsx)("td",{children:"Finds tweets sent by @Braves"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"to:Braves"}),Object(l.jsx)("td",{children:"Finds tweets sent to @Braves"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"@Braves"}),Object(l.jsx)("td",{children:"Finds tweets mentioning @Braves"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Braves"}),Object(l.jsx)("td",{children:"Finds tweets containing 'Braves' anywhere"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"to:Braves"}),Object(l.jsx)("td",{children:"Finds tweets sent to @Braves"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:'"Braves"'}),Object(l.jsx)("td",{children:'Finds tweets containing exactly "Braves". NOTE: requires double quotes.'})]})]})]})]})})},x=s(7),_=(s(55),s(28)),v=s(29);var f=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),s=t[0],r=t[1];function a(){r(!1===s)}return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"header__wrapper",children:[Object(l.jsx)(_.a,{className:"header__menuButton",icon:v.a,onClick:a}),Object(l.jsx)("h1",{className:"header__title",children:" Search Twitter"})]}),Object(l.jsxs)("nav",{className:"header__navBar ".concat(s?"header__navBar--open":""),children:[Object(l.jsx)(x.b,{to:"/",className:"header__navBar__link",onClick:a,children:"Home"}),Object(l.jsx)(x.b,{to:"/search",className:"header__navBar__link",onClick:a,children:"Search"}),Object(l.jsx)(x.b,{to:"/random",className:"header__navBar__link",onClick:a,children:"Random"})]})]})};s(60),s(61);var p=function(e){return Object(l.jsxs)("div",{className:"tweet",children:[Object(l.jsx)("a",{href:"https://twitter.com/".concat(e.handle,"/status/").concat(e.id),target:"_blank",className:"tweet__link"}),Object(l.jsxs)("div",{className:"tweet__userInfo",children:[Object(l.jsx)("img",{src:e.profile_picture_url,alt:"blank",className:"tweet__userInfo__profilePicture"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"tweet__userInfo__name",children:e.name}),Object(l.jsxs)("a",{className:"tweet__userInfo__handle",href:"https://twitter.com/".concat(e.handle),target:"_blank",rel:"noreferrer",children:["@",e.handle]})]})]}),Object(l.jsxs)("p",{className:"tweet__body",children:[" ",e.body]}),Object(l.jsx)("div",{className:"tweet__media",children:e.media_urls&&e.media_urls.map((function(e){return Object(l.jsx)("img",{className:"tweet__media__img",src:e,alt:e})}))}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"tweet__info",children:[Object(l.jsx)("div",{className:"tweet_info__date",children:e.date}),Object(l.jsx)("div",{className:"tweet_info__time",children:e.time}),Object(l.jsx)("div",{className:"tweet_info__source",children:e.source})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"tweet__metrics",children:[Object(l.jsxs)("div",{className:"tweet__metrics__comments",children:[Object(l.jsx)("strong",{children:e.comments})," comments"]}),Object(l.jsxs)("div",{className:"tweet__metrics__retweets",children:[Object(l.jsx)("strong",{children:e.retweets})," retweets"]}),Object(l.jsxs)("div",{className:"tweet__metrics__likes",children:[Object(l.jsx)("strong",{children:e.likes})," likes"]})]})]},e.key)};var w=function(e){return Object(l.jsx)("div",{className:"results",children:e.tweets&&e.tweets.data.map((function(e){return Object(l.jsx)(p,{id:e.id,profile_picture_url:e.user_info.profile_picture_url,name:e.user_info.name,handle:e.user_info.username,body:e.text,media_urls:e.media_urls,time:e.time,date:e.date,source:e.source,comments:e.public_metrics.reply_count,retweets:e.public_metrics.retweet_count,likes:e.public_metrics.like_count},e.id)}))})};var N=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),s=t[0],r=t[1];return Object(l.jsxs)("div",{className:"searchTwitter",children:[Object(l.jsx)(O,{}),Object(l.jsx)(m,{setQueryResults:r}),Object(l.jsx)(w,{tweets:s})]})};var g=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Stream Tweets"})})},k=s(17).default;var y=function(e){var t=function(){var t=Object(h.a)(u.a.mark((function t(s){var c,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s&&s.preventDefault(),t.next=3,k.get("http://localhost:5000/api/search",{params:{query:s.target.value}});case 3:c=t.sent,r=c.data.length,a={data:[c.data[Math.floor(Math.random()*r)]]},e.setQueryResults(a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{children:[Object(l.jsx)("button",{value:"from:chesscom",onClick:function(e){return t(e)},children:"Chess.com"}),Object(l.jsx)("button",{value:"from:dilbert_daily",onClick:function(e){t(e)},children:"Dilbert Daily"}),Object(l.jsx)("button",{value:"from:DukeMBB",onClick:function(e){t(e)},children:"Duke Basketball"}),Object(l.jsx)("button",{value:"from:realclearnews",onClick:function(e){t(e)},children:"RealClearNews"})]})})};var B=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),s=t[0],r=t[1];return Object(l.jsxs)("div",{className:"randomTweets",children:[Object(l.jsx)("h1",{className:"title",children:"Random"}),Object(l.jsx)(y,{setQueryResults:r}),Object(l.jsx)(w,{tweets:s})]})};var S=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"contentWrapper",children:[Object(l.jsx)(f,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",element:Object(l.jsx)(j,{})}),Object(l.jsx)(i.a,{path:"/search",element:Object(l.jsx)(N,{})}),Object(l.jsx)(i.a,{path:"/stream",element:Object(l.jsx)(g,{})}),Object(l.jsx)(i.a,{path:"/random",element:Object(l.jsx)(B,{})})]})]})})};n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x.a,{children:Object(l.jsx)(S,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.c8dddfc2.chunk.js.map