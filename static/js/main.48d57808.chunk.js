(this["webpackJsonpbook-bestsellers"]=this["webpackJsonpbook-bestsellers"]||[]).push([[0],{14:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},20:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),s=a.n(r),c=a(8),i=a(4),l=a(5),u=a(7),m=a(6),d=(a(19),a(20),a(3)),k=a(9),h=a(2),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).renderMainLink=function(){return"The New York Times Best Sellers"!==e.props.title?o.a.createElement("h2",{className:"mainLink link",onClick:e.props.loadMain},"BEST SELLERS"):o.a.createElement("h2",{className:"mainLink"},"BOOKS")},e.renderTagline=function(){return"The New York Times Best Sellers"===e.props.title?o.a.createElement("h2",{className:"tagline"},"Ranked lists of children's books sold in the United States."):null},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"topHeading"},o.a.createElement("h1",{className:"heading"},"Best Sellers in Children's Books")),o.a.createElement("div",{className:"menu"},this.renderMainLink(),o.a.createElement("div",{className:"titleFlex"},o.a.createElement("h1",{className:"title"},this.props.title),o.a.createElement("div",{className:"socialFlex"},o.a.createElement("button",{className:"socialButton"},o.a.createElement("a",{className:"socialLink",href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(d.a,{icon:k.a}))),o.a.createElement("button",{className:"socialButton"},o.a.createElement("a",{className:"socialLink",href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(d.a,{icon:k.b}))),o.a.createElement("button",{className:"socialButton"},o.a.createElement("a",{className:"socialLink",href:"https://www.gmail.com",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(d.a,{icon:h.e}))))),this.renderTagline()))}}]),a}(o.a.Component),f=(a(26),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).decideArrow=function(e){return 0===e.rank_last_week||e.rank<=e.rank_last_week?"up":e.rank>e.rank_last_week?"down":void 0},e.renderBookInfo=function(t){var a=e.decideArrow(t);return o.a.createElement("div",{className:"categoryRow",key:t.rank},o.a.createElement("div",{className:"categoryFlex"},o.a.createElement("div",{className:"rankFlex"},o.a.createElement("h1",{className:"categoryRank"},t.rank),o.a.createElement("p",{className:"arrow"},o.a.createElement(d.a,{icon:"up"===a?h.b:h.a}))),o.a.createElement("div",{className:"categoryInfo"},o.a.createElement("h2",{className:"categoryWeeks"},1===t.weeks_on_list?"NEW THIS WEEK":"".concat(t.weeks_on_list," WEEKS ON LIST")),o.a.createElement("h1",{className:"categoryTitle"},t.title),o.a.createElement("div",{className:"authorFlex"},o.a.createElement("h2",{className:"categoryAuthor"},"by ",t.author),o.a.createElement("h2",{className:"publisher"},t.publisher)),o.a.createElement("h2",{className:"description"},t.description))),o.a.createElement("a",{className:"imageLink",href:t.amazon_product_url,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:"categoryImage",src:t.book_image,alt:t.title})))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"categoryList"},this.props.books.map((function(t){return e.renderBookInfo(t)})))}}]),a}(o.a.Component)),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).fetchPictureBooks=function(){fetch("https://api.nytimes.com/svc/books/v3/lists/picture-books.json?api-key=102Qdq9uv9GzycFbWnBWYCKqPVHcwqd0").then((function(e){return e.json()})).then((function(e){var t=e.results.books.filter((function(e){return e.rank<=5}));n.setState((function(a){return{bookLists:Object(c.a)({},a.bookLists,{pictureBooks:{list:e.results,top5:t}})}}))})).catch((function(e){return console.log(e)}))},n.fetchSeriesBooks=function(){fetch("https://api.nytimes.com/svc/books/v3/lists/series-books.json?api-key=102Qdq9uv9GzycFbWnBWYCKqPVHcwqd0").then((function(e){return e.json()})).then((function(e){var t=e.results.books.filter((function(e){return e.rank<=5}));n.setState((function(a){return{bookLists:Object(c.a)({},a.bookLists,{seriesBooks:{list:e.results,top5:t}})}}))})).catch((function(e){return console.log(e)}))},n.fetchMiddleGradeHardcover=function(){fetch("https://api.nytimes.com/svc/books/v3/lists/childrens-middle-grade-hardcover.json?api-key=102Qdq9uv9GzycFbWnBWYCKqPVHcwqd0").then((function(e){return e.json()})).then((function(e){var t=e.results.books.filter((function(e){return e.rank<=5}));n.setState((function(a){return{bookLists:Object(c.a)({},a.bookLists,{middleGradeHardcover:{list:e.results,top5:t}})}}))})).catch((function(e){return console.log(e)}))},n.fetchYoungAdultHardcover=function(){fetch("https://api.nytimes.com/svc/books/v3/lists/young-adult-hardcover.json?api-key=102Qdq9uv9GzycFbWnBWYCKqPVHcwqd0").then((function(e){return e.json()})).then((function(e){var t=e.results.books.filter((function(e){return e.rank<=5}));n.setState((function(a){return{bookLists:Object(c.a)({},a.bookLists,{youngAdultHardcover:{list:e.results,top5:t}})}}))})).catch((function(e){return console.log(e)}))},n.handleClick=function(e){var t=e.target.dataset.list,a=e.target.dataset.heading;n.setState({heading:a,display:t})},n.loadMain=function(){n.setState({heading:"The New York Times Best Sellers",display:"main"})},n.renderCategoryList=function(){var e=n.state.display,t=n.state.bookLists.pictureBooks,a=n.state.bookLists.seriesBooks,r=n.state.bookLists.middleGradeHardcover,s=n.state.bookLists.youngAdultHardcover;return"pictureBooks"===e?o.a.createElement(f,{books:t.list.books}):"seriesBooks"===e?o.a.createElement(f,{books:a.list.books}):"middleGradeHardcover"===e?o.a.createElement(f,{books:r.list.books}):"youngAdultHardcover"===e?o.a.createElement(f,{books:s.list.books}):void 0},n.renderBookRow=function(e,t){var a=e.list,r=e.top5;return o.a.createElement("div",{className:"bookRow"},o.a.createElement("div",{className:"rowTitle","data-list":t,"data-heading":a.display_name,onClick:function(e){return n.handleClick(e)}},a.display_name," ",o.a.createElement("span",{className:"chevronRight"},o.a.createElement(d.a,{icon:h.d}))),o.a.createElement("div",{className:"flexRow"},r.map((function(e){return o.a.createElement("div",{className:5===e.rank?"bookInfo noBorder":"bookInfo",key:e.rank},o.a.createElement("div",{className:"bookFlex"},o.a.createElement("h1",{className:"bookRank"},e.rank),o.a.createElement("img",{className:"bookImage",src:e.book_image,alt:e.title})),o.a.createElement("div",{className:"bottom"},o.a.createElement("h2",{className:"bookWeeks"},1===e.weeks_on_list?"NEW THIS WEEK":"".concat(e.weeks_on_list," WEEKS ON LIST")),o.a.createElement("h1",{className:"bookTitle"},e.title),o.a.createElement("h2",{className:"bookAuthor"},"by ",e.author),o.a.createElement("button",{className:"amazonButton"},o.a.createElement("a",{className:"amazonLink",href:e.amazon_product_url,target:"_blank",rel:"noopener noreferrer"},"BUY")," ",o.a.createElement("span",{className:"chevronDown"},o.a.createElement(d.a,{icon:h.c})))))}))))},n.state={heading:"The New York Times Best Sellers",display:null,bookLists:{}},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchPictureBooks(),this.fetchSeriesBooks(),this.fetchMiddleGradeHardcover(),this.fetchYoungAdultHardcover()}},{key:"componentDidUpdate",value:function(e,t){this.state.bookLists!==t.bookLists&&this.setState({display:"main"})}},{key:"render",value:function(){var e=this.state.display,t=this.state.bookLists.pictureBooks,a=this.state.bookLists.seriesBooks,n=this.state.bookLists.middleGradeHardcover,r=this.state.bookLists.youngAdultHardcover;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{title:this.state.heading,loadMain:this.loadMain}),"main"===e&&t?this.renderBookRow(t,"pictureBooks"):null,"main"===e&&a?this.renderBookRow(a,"seriesBooks"):null,"main"===e&&n?this.renderBookRow(n,"middleGradeHardcover"):null,"main"===e&&r?this.renderBookRow(r,"youngAdultHardcover"):null,"main"!==e?this.renderCategoryList():null)}}]),a}(o.a.Component);s.a.render(o.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.48d57808.chunk.js.map