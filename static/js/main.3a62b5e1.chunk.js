(this["webpackJsonpmarkdown-preview-skidoo"]=this["webpackJsonpmarkdown-preview-skidoo"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),i=n.n(o),a=n(4),s=n.n(a),c=(n(22),n.p,n(23),n(5)),l=n(6),u=n(2),d=n(9),h=n(8),p=n(3),b="CHANGETEXT",j=(n(30),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).handleChange=function(e){r.props.changeInput(e.target.value)},r.handleChange=r.handleChange.bind(Object(u.a)(r)),r}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"editor-wrapper",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h2",{children:"Markdown Editor"})}),Object(r.jsx)("div",{className:"textarea-container",children:Object(r.jsx)("textarea",{id:"editor",className:"editorInput",type:"text",onChange:function(t){return e.handleChange(t)},value:this.props.editorText})})]})}}]),n}(i.a.Component)),x=Object(p.b)((function(e){return{editorText:e.editorText}}),{changeInput:function(e){return{type:b,newEditorText:e}}})(j),f=n(15),w=n.n(f),g=n(16),v=n.n(g),O=(n(31),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).produceMarkup=function(e){return{__html:v.a.sanitize(w()(e,{breaks:!0}))}},r.produceMarkup=r.produceMarkup.bind(Object(u.a)(r)),r}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"preview-wrapper",children:[Object(r.jsx)("header",{className:"preview-header",children:Object(r.jsx)("h2",{children:"Markdown HTML Preview"})}),Object(r.jsx)("div",{id:"preview",dangerouslySetInnerHTML:this.produceMarkup(this.props.editorText)})]})}}]),n}(i.a.Component)),k=Object(p.b)((function(e){return{editorText:e.editorText}}))(O);var m=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(x,{}),Object(r.jsx)(k,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),i(e),a(e)}))},y=n(7),_={editorText:"*stars* or _underscores_ for italics.\n **Double stars** or __double underscores__ for bold.\n***Three together*** for ___both___.\n\n# This is H1\n## This is H2\n### This is H3 with some extra pounds ###\n#### You get the idea ####\n##### I don't need extra pounds at the end\n###### H6 is the max\n\nParagraphs: place a blank line between chunks of text.\n\nThis is a URL:  <https://www.github.com>.\nThis is an inline link to [Google](https://www.google.com). \nImages work exactly like links, but they have exclamation points in front.\n![Google Logo](https://www.google.com/images/errors/logo_sm.gif)\n\n* This is a bulleted list\n* Great for shopping lists\n- You can also use hyphens\n+ Or plus symbols\n\nBlockquotes\n> This chunk of text is in a block quote. Its multiple lines will all be\n> indented a bit from the rest of the text.\n> > Multiple levels of block quotes also work.\n>     You can also use preformatted text with your blockquotes\n>     as long as you add at least five spaces.\n\nCode: If you want to include code and have new lines preserved, indent the line with a tab or at least four spaces:\n\n    The text will stay as text, \n    so any *markdown* or <u>HTML</u>\n    \nThis is inline code: `inline code`\n"},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{editorText:t.newEditorText};default:return e}},M=Object(y.b)(C);s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(p.a,{store:M,children:Object(r.jsx)(m,{})})}),document.getElementById("root")),T()}},[[32,1,2]]]);
//# sourceMappingURL=main.3a62b5e1.chunk.js.map