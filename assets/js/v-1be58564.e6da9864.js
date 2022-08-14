"use strict";(self.webpackChunkmyBlog_aurora=self.webpackChunkmyBlog_aurora||[]).push([[3991],{1812:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-1be58564",path:"/page/photo.html",title:"相册功能",lang:"zh-CN",frontmatter:{tag:["相册","photo"]},excerpt:"",headers:[{level:2,title:"配置",slug:"配置",children:[]},{level:2,title:"标签页面配置",slug:"标签页面配置",children:[]}],git:{updatedTime:1660451769e3,contributors:[{name:"‘Veh7’",email:"‘925779572@qq.com’",commits:1}]}}},5937:(s,n,a)=>{a.r(n),a.d(n,{default:()=>r});var e=a(6252);const o=(0,e._)("h1",{id:"相册功能",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#相册功能","aria-hidden":"true"},"#"),(0,e.Uk)(" 相册功能")],-1),p=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210911121146092",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20210911121146092.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),t=(0,e.uE)('<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><blockquote><p>此页面手机端默认是两列，PC端为5列，主题会自动计算宽度</p></blockquote><p>主题会寻找在<code>docs/photos/readme.md</code>中的所有图片，在此页面中展示，所以一定要在<code>docs/photos/readme.md</code>中，加入自己的图片，可以是本地，或者图片url连接，如果不存在此文件，那么会使用默认的图片进行展示</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>//docs/photos/reasdme.md\n<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160320304</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160320304.png?x-oss-process=style/pictureProcess1</span>)</span>\n\n<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160335602</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160335602.png?x-oss-process=style/pictureProcess1</span>)</span>\n\n<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160455739</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160455739.png?x-oss-process=style/pictureProcess1</span>)</span>\n\n<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160510785</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160510785.png?x-oss-process=style/pictureProcess1</span>)</span>\n\n<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160523968</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160523968.png?x-oss-process=style/pictureProcess1</span>)</span>\n\n<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160541591</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160541591.png?x-oss-process=style/pictureProcess1</span>)</span>\n\n<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160601558</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160601558.png?x-oss-process=style/pictureProcess1</span>)</span>\n\n<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160650553</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160650553.png?x-oss-process=style/pictureProcess1</span>)</span>\n\n<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160702449</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160702449.png?x-oss-process=style/pictureProcess1</span>)</span>\n\n<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160713886</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160713886.png?x-oss-process=style/pictureProcess1</span>)</span>\n\n<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160725684</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160725684.png?x-oss-process=style/pictureProcess1</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="标签页面配置" tabindex="-1"><a class="header-anchor" href="#标签页面配置" aria-hidden="true">#</a> 标签页面配置</h2>',5),l=(0,e.Uk)("标签页面配置"),c={},r=(0,a(3744).Z)(c,[["render",function(s,n){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,p,t,(0,e._)("p",null,[(0,e.Wm)(a,{to:"/page/tag.html"},{default:(0,e.w5)((()=>[l])),_:1})])],64)}]])}}]);