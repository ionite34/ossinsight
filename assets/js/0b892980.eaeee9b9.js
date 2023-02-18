(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4206],{1890:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var a=n(63366),r=n(87462),o=n(67294),l=n(86010),i=n(94780),s=n(57579),c=n(36622),d=n(1568),u=n(9942),p=n(70918),m=n(78884),E=n(81719),h=n(34867);function g(e){return(0,h.Z)("MuiDialog",e)}const T=(0,n(1588).Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var f=n(15156),x=n(58735),N=n(62097),v=n(85893);const I=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Z=(0,E.ZP)(x.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),R=(0,E.ZP)(d.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),b=(0,E.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.container,t[`scroll${(0,c.Z)(n.scroll)}`]]}})((({ownerState:e})=>(0,r.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),A=(0,E.ZP)(p.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.paper,t[`scrollPaper${(0,c.Z)(n.scroll)}`],t[`paperWidth${(0,c.Z)(String(n.maxWidth))}`],n.fullWidth&&t.paperFullWidth,n.fullScreen&&t.paperFullScreen]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${T.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&"xs"!==t.maxWidth&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${T.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${T.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}))),S=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiDialog"}),d=(0,N.Z)(),E={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{"aria-describedby":h,"aria-labelledby":T,BackdropComponent:x,BackdropProps:S,children:C,className:y,disableEscapeKeyDown:L=!1,fullScreen:D=!1,fullWidth:O=!1,maxWidth:w="sm",onBackdropClick:B,onClose:W,open:k,PaperComponent:P=p.Z,PaperProps:M={},scroll:U="paper",TransitionComponent:$=u.Z,transitionDuration:H=E,TransitionProps:F}=n,Y=(0,a.Z)(n,I),V=(0,r.Z)({},n,{disableEscapeKeyDown:L,fullScreen:D,fullWidth:O,maxWidth:w,scroll:U}),_=(e=>{const{classes:t,scroll:n,maxWidth:a,fullWidth:r,fullScreen:o}=e,l={root:["root"],container:["container",`scroll${(0,c.Z)(n)}`],paper:["paper",`paperScroll${(0,c.Z)(n)}`,`paperWidth${(0,c.Z)(String(a))}`,r&&"paperFullWidth",o&&"paperFullScreen"]};return(0,i.Z)(l,g,t)})(V),G=o.useRef(),q=(0,s.Z)(T),K=o.useMemo((()=>({titleId:q})),[q]);return(0,v.jsx)(R,(0,r.Z)({className:(0,l.Z)(_.root,y),closeAfterTransition:!0,components:{Backdrop:Z},componentsProps:{backdrop:(0,r.Z)({transitionDuration:H,as:x},S)},disableEscapeKeyDown:L,onClose:W,open:k,ref:t,onClick:e=>{G.current&&(G.current=null,B&&B(e),W&&W(e,"backdropClick"))},ownerState:V},Y,{children:(0,v.jsx)($,(0,r.Z)({appear:!0,in:k,timeout:H,role:"presentation"},F,{children:(0,v.jsx)(b,{className:(0,l.Z)(_.container),onMouseDown:e=>{G.current=e.target===e.currentTarget},ownerState:V,children:(0,v.jsx)(A,(0,r.Z)({as:P,elevation:24,role:"dialog","aria-describedby":h,"aria-labelledby":q},M,{className:(0,l.Z)(_.paper,M.className),ownerState:V,children:(0,v.jsx)(f.Z.Provider,{value:K,children:C})}))})}))}))}))},15156:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)({})},95398:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var a=n(63366),r=n(87462),o=n(67294),l=n(86010),i=n(94780),s=n(81719),c=n(78884),d=n(34867);function u(e){return(0,d.Z)("MuiDialogContent",e)}(0,n(1588).Z)("MuiDialogContent",["root","dividers"]);var p=n(32941),m=n(85893);const E=["className","dividers"],h=(0,s.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dividers&&t.dividers]}})((({theme:e,ownerState:t})=>(0,r.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${p.Z.root} + &`]:{paddingTop:0}}))),g=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiDialogContent"}),{className:o,dividers:s=!1}=n,d=(0,a.Z)(n,E),p=(0,r.Z)({},n,{dividers:s}),g=(e=>{const{classes:t,dividers:n}=e,a={root:["root",n&&"dividers"]};return(0,i.Z)(a,u,t)})(p);return(0,m.jsx)(h,(0,r.Z)({className:(0,l.Z)(g.root,o),ownerState:p,ref:t},d))}))},32941:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o,a:()=>r});var a=n(34867);function r(e){return(0,a.Z)("MuiDialogTitle",e)}const o=(0,n(1588).Z)("MuiDialogTitle",["root"])},19401:(e,t,n)=>{"use strict";n.d(t,{T:()=>E});var a=n(87462),r=n(67294),o=n(89747),l=n(76743),i=n(61802),s=n(85214),c=n(81284),d=n(81719);const u=(0,d.ZP)(s.Z)({position:"relative",padding:0}),p=(0,d.ZP)(c.ZP)({position:"absolute",width:"100%",paddingLeft:0,transition:"all .5s ease",opacity:.4,"&.item-enter":{opacity:0,transform:"translate3d(-10%, 0, 0) scale(0.85)"},"&.item-enter-active":{opacity:.4,transform:"none"},"&.item-exit":{opacity:.4,transform:"none"},"&.item-exit-active":{opacity:0,transform:"translate3d(-10%, 0, 0) scale(0.85)"},"&:hover":{opacity:1}});function m(e,t){let{maxLength:n,itemHeight:s,getKey:c,children:d,...m}=e;const[E,h]=(0,r.useState)([]),g=(0,r.useCallback)((e=>{h((t=>t.length===n?[e].concat(t.slice(0,n-1)):[e].concat(t)))}),[n]);return(0,r.useEffect)((()=>{const e={add:g};(0,i.nf)(t)&&("function"==typeof t?t(e):t.current=e)}),[]),r.createElement(o.Z,(0,a.Z)({component:u},m,{sx:{height:s*n}}),E.map(((e,t)=>r.createElement(l.Z,{key:c(e),timeout:500,classNames:"item"},r.createElement(p,{sx:{top:t*s,height:s}},d(e))))))}const E=(0,r.forwardRef)(m)},88579:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(67294),r=n(39960),o=n(45344),l=n(90244),i=n(93978),s=n(5605),c=n(39807),d=n(69417);function u(e){let{stats:t,showTable:n=!1}=e;return a.createElement(l.Z,{className:"clearTable"},a.createElement(i.Z,null,a.createElement(d.Z,null,n?a.createElement(s.Z,null,"Table"):void 0,a.createElement(s.Z,null,"Index"),a.createElement(s.Z,null,"Calls"))),a.createElement(c.Z,null,t.map((e=>a.createElement(d.Z,{key:`${e.tableName}.${e.indexName}`},n?a.createElement(s.Z,null,a.createElement(r.Z,{to:`/stats/tables/${e.tableName}`},e.tableName)):void 0,a.createElement(s.Z,null,e.indexName),a.createElement(s.Z,null,a.createElement(o.Z,{value:e.calls??0,hasComma:!0,duration:200,size:14})))))))}},98322:(e,t,n)=>{"use strict";n.d(t,{Y:()=>o});var a=n(67294),r=n(73766);function o(e,t){(0,a.useEffect)((()=>{const n=(0,r.v)(e,t);return()=>(0,r.r)(n)}),[e,t])}},74426:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var a=n(67294),r=n(88242),o=n(88579),l=n(6971),i=n(98322),s=n(19401),c=n(26432),d=n(81719),u=n(1890),p=n(95398),m=n(69243),E=n(61953),h=n(14850),g=n(36782),T=n(61802);const f=e=>e.id;function x(){const e=(0,a.useRef)(null),t=(0,a.useRef)(),n=(0,a.useRef)([[],0]),r=(0,a.useRef)(),o=(0,l.WV)("stats-query-records",void 0,!1,!0,"unique");(0,a.useEffect)((()=>{(0,T.nf)(o.data)&&(n.current=[o.data.data,0],r.current=o.data.data.reduce(((e,t)=>Math.max(e,t.ts+1)),0))}),[o.data]);const d=(0,l.WV)("stats-query-records-latest",{offset:r.current},!1,(0,T.nf)(r.current),"unique");(0,i.Y)(d.reload,5e3);const[x,N]=(0,a.useState)(!1);(0,a.useEffect)((()=>{if((0,T.nf)(d.data)){const[e,t]=n.current??[[],0];n.current=[e.slice(t).concat(d.data.data),0],r.current=d.data.data.reduce(((e,t)=>Math.max(e,t.ts+1)),r.current??0)}}),[d.data]);const I=(0,a.useCallback)((()=>{clearInterval(t.current),t.current=setInterval((()=>{const[t,a]=n.current;var r;a<t.length&&(t[a].id=`${t[a].id}-${Date.now()}`,null==(r=e.current)||r.add(t[a]),n.current[1]++)}),500),N(!1)}),[]),Z=(0,a.useCallback)((()=>{clearInterval(t.current),N(!0)}),[]);(0,a.useEffect)((()=>(I(),Z)),[]);const[R,b]=(0,a.useState)(),[A,S]=(0,a.useState)(!1),C=(0,c.Z)((e=>{b(e),S(!0)})),y=(0,c.Z)((()=>{S(!1)}));return a.createElement(a.Fragment,null,a.createElement(s.T,{ref:e,maxLength:20,itemHeight:32,getKey:f,onMouseEnter:Z,onMouseLeave:I},(e=>function(e,t){return a.createElement(v,{sql:e.digest_text,onClick:()=>t(e)})}(e,C))),a.createElement(m.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:x&&!A,message:"Move mouse out to resume"}),a.createElement(u.Z,{open:A,onClose:y,maxWidth:"lg",fullWidth:!0},a.createElement(p.Z,null,a.createElement(E.Z,null,"Query: ",null==R?void 0:R.query_name),a.createElement(E.Z,{sx:{my:2}},"Executed at: ",null==R?void 0:R.executed_at),a.createElement(h.Z,{className:"language-sql"},(0,g.WU)((null==R?void 0:R.digest_text)??"",{language:"mysql"})))))}const N=(0,d.ZP)("span")({whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"rgb(248, 248, 242)",cursor:"pointer"});function v(e){let{sql:t,onClick:r}=e;const[o,l]=(0,a.useState)(t);return(0,a.useEffect)((()=>{try{const{highlight:e}=n(26586);l(e(t,{html:!0}))}catch(e){}}),[t]),a.createElement(N,{dangerouslySetInnerHTML:{__html:o},onClick:r})}var I=n(36336),Z=n(29630),R=n(18661),b=n(62348);function A(){const[e,t]=(0,a.useState)("live-sql");return a.createElement(r.Z,{title:"Stats"},a.createElement(I.Z,{maxWidth:"lg",sx:{py:2}},a.createElement(Z.Z,{variant:"h1",mb:2},"Database Stats"),a.createElement(b.Z,{onChange:(e,n)=>t(n),value:e,sx:{mb:2}},a.createElement(R.Z,{label:"Process List",value:"live-sql"}),a.createElement(R.Z,{label:"Index Usage",value:"index-usage"})),"live-sql"===e&&a.createElement(S,null),"index-usage"===e&&a.createElement(C,null)))}function S(){return a.createElement(x,null)}function C(){const{data:e,reload:t}=(0,l.WV)("stats-indexes-usage",void 0,!1,!0,!0);return(0,i.Y)(t,1e3),a.createElement(o.Z,{showTable:!0,stats:(null==e?void 0:e.data)??[]})}},8106:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294),r=n(86010),o=n(95999);const l={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function i(e){let{code:t,className:n}=e;const[i,s]=(0,a.useState)(!1),c=(0,a.useRef)(void 0),d=(0,a.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(console.error),s(!0),c.current=window.setTimeout((()=>{s(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),a.createElement("button",{type:"button","aria-label":i?(0,o.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,o.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,l.copyButton,i&&l.copyButtonCopied),onClick:d},a.createElement("span",{className:l.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:l.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:l.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},88242:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(87462),r=n(51624),o=n(67294),l=n(61802),i=n(61953);function s(e){let{children:t,header:n,dark:s,sideWidth:c,Side:d,footer:u=!0,...p}=e;return(0,o.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),o.createElement(r.Z,(0,a.Z)({},p,{customFooter:u,header:n,sideWidth:c,side:c&&(0,l.nf)(d)?o.createElement(i.Z,{component:"aside",width:c,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},o.createElement(i.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},o.createElement(d,null))):void 0}),o.createElement("div",{hidden:!0,style:{height:72}}),o.createElement("div",{style:{paddingLeft:c,paddingRight:c}},o.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}},26586:(e,t,n)=>{"use strict";const a=n(43540),r={html:!1,classPrefix:"sql-hl-",colors:{keyword:"\x1b[35m",function:"\x1b[31m",number:"\x1b[32m",string:"\x1b[32m",special:"\x1b[33m",bracket:"\x1b[33m",clear:"\x1b[0m"}},o="default",l=[{name:"keyword",group:1,regex:new RegExp(`(^|[^a-zA-Z_])(${a.join("|")})(?=[^a-zA-Z_]|$)`,"gi")},{name:"special",regex:/(=|!=|%|\/|\*|-|,|;|:|\+|<|>)/g},{name:"function",regex:/(\w+?)\(/g,trimEnd:1},{name:"number",regex:/((?<![a-zA-z])\d+(?:\.\d+)?)/g},{name:"string",regex:/(['](?:\\'|.)*?[']|["](?:\\"|.)*?["]|[`](?:\\`|.)*?[`])/g},{name:"bracket",regex:/([()])/g}];function i(e){const t=[];for(const o of l){let n;for(;n=o.regex.exec(e);){let e=n[0],a=0;if(o.group){e=n[o.group+1];for(let e=1;e<=o.group;e++)a+=n[e].length}const r=o.trimEnd?e.substring(0,e.length-o.trimEnd):e;t.push({name:o.name,start:n.index+a,length:r.length})}}const n=t.slice().sort(((e,t)=>e.start-t.start)),a=[];let r=0;for(let l=0;l<n.length;l++)n[l].start<r||(n[l].start>r&&a.push({name:o,content:e.substring(r,n[l].start)}),a.push({name:n[l].name,content:e.substring(n[l].start,n[l].start+n[l].length)}),r=n[l].start+n[l].length);return r<e.length-1&&a.push({name:o,content:e.substring(r,r+e.length+1)}),a}e.exports={getSegments:i,highlight:function(e,t){return t=Object.assign({},r,t),i(e).map((({name:e,content:n})=>e===o?n:t.html?`<span class="${t.classPrefix}${e}">${n}</span>`:t.colors[e]+n+t.colors.clear)).join("")}}},43540:e=>{e.exports=["ADD","ADD CONSTRAINT","ALTER","ALTER COLUMN","ALTER TABLE","ALL","AND","ANY","AS","ASC","BACKUP DATABASE","BETWEEN","CASE","CHECK","COLUMN","CONSTRAINT","CREATE","CREATE DATABASE","CREATE INDEX","CREATE OR REPLACE VIEW","CREATE TABLE","CREATE PROCEDURE","CREATE UNIQUE INDEX","CREATE VIEW","DATABASE","DEFAULT","DELETE","DESC","DISTINCT","DROP","DROP COLUMN","DROP CONSTRAINT","DROP DATABASE","DROP DEFAULT","DROP INDEX","DROP TABLE","DROP VIEW","EXEC","EXISTS","FOREIGN KEY","FROM","FULL OUTER JOIN","GROUP BY","HAVING","IN","INDEX","INNER JOIN","INSERT INTO","INSERT INTO SELECT","IS NULL","IS NOT NULL","JOIN","LEFT JOIN","LIKE","LIMIT","NOT","NOT NULL","OR","ORDER BY","OUTER JOIN","PRIMARY KEY","PROCEDURE","RIGHT JOIN","ROWNUM","SELECT","SELECT DISTINCT","SELECT INTO","SELECT TOP","SET","TABLE","TOP","TRUNCATE TABLE","UNION","UNION ALL","UNIQUE","UPDATE","VALUES","VIEW","WHERE","PRAGMA","INTEGER","PRIMARY","CHAR","DATETIME","DECIMAL","BINARY","TIMESTAMP","VARCHAR","VARBINARY","TINYBLOB","TINYTEXT","BLOB","LONGTEXT","NULL","REFERENCES","INDEX_LIST","BY","CURRENT_DATE","CURRENT_TIME","EACH","ELSE","ELSEIF","FALSE","FOR","GROUP","IF","IFNULL","INSERT","INTERVAL","INTO","IS","KEY","KEYS","LEFT","MATCH","ON","OPTION","ORDER","OUT","OUTER","REPLACE","TINYINT","RIGHT","LEADING","TRAILING","THEN","TO","TRUE","WHEN","WITH","UNSIGNED","CASCADE","ENGINE","TEXT","AUTO_INCREMENT","SHOW","BEGIN","END","PRINT","OVERLAPS"]}}]);