"use strict";(self.webpackChunkmyBlog_aurora=self.webpackChunkmyBlog_aurora||[]).push([[9406],{4220:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-53a65b51",path:"/plugin/coze/component.html",title:"Coze组件使用",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"CozeMood",slug:"cozemood",children:[{level:3,title:"钩子",slug:"钩子",children:[]},{level:3,title:"插槽",slug:"插槽",children:[]},{level:3,title:"样式变量",slug:"样式变量",children:[]}]},{level:2,title:"CozeLogin",slug:"cozelogin",children:[{level:3,title:"钩子",slug:"钩子-1",children:[]},{level:3,title:"插槽",slug:"插槽-1",children:[]}]},{level:2,title:"RegisterUser",slug:"registeruser",children:[]},{level:2,title:"样式",slug:"样式",children:[]},{level:2,title:"CozePhoto",slug:"cozephoto",children:[]},{level:2,title:"样式配置",slug:"样式配置",children:[]}],git:{updatedTime:1660451769e3,contributors:[{name:"‘Veh7’",email:"‘925779572@qq.com’",commits:1}]}}},917:(n,s,a)=>{a.r(s),a.d(s,{default:()=>M});var t=a(6252);const p=(0,t._)("h1",{id:"coze组件使用",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#coze组件使用","aria-hidden":"true"},"#"),(0,t.Uk)(" Coze组件使用")],-1),o=(0,t._)("blockquote",null,[(0,t._)("p",null,"以下所有的组件都是全局组件")],-1),e=(0,t._)("h2",{id:"cozemood",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#cozemood","aria-hidden":"true"},"#"),(0,t.Uk)(" CozeMood")],-1),c=(0,t._)("p",null,"该组件是展示说说的组件，也就是下面这个页面",-1),l=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108194504444",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108194504444.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),u=(0,t.uE)('<h3 id="钩子" tabindex="-1"><a class="header-anchor" href="#钩子" aria-hidden="true">#</a> 钩子</h3><p>该组件当所有数据加载完成之后，会返回一个钩子函数<code>cozeSuccess</code>，你可以在你自己的主题中，使用该函数</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//Mood.vue</span>\n<span class="token operator">&lt;</span>CozeMood @coze<span class="token operator">-</span>success<span class="token operator">=</span><span class="token string">&quot;cozeSuccess&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>CozeMood<span class="token operator">&gt;</span>\n\n<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">cozeSuccess</span><span class="token punctuation">(</span><span class="token parameter">cozeMoodData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//数据加载完成之后返回</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h3><p>该组件也提供了一些插槽</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;coze-mood-content&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;coze-img&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;coze-mood-bottom-left&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;coze-mood-bottom-right&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>对应位置如下</p>',7),i=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108202006814",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108202006814.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),r=(0,t._)("h3",{id:"样式变量",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#样式变量","aria-hidden":"true"},"#"),(0,t.Uk)(" 样式变量")],-1),k=(0,t._)("p",null,"如果你需要设置背景颜色等等，提供了css变量，请自行使用",-1),g=(0,t._)("h2",{id:"cozelogin",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#cozelogin","aria-hidden":"true"},"#"),(0,t.Uk)(" CozeLogin")],-1),m=(0,t._)("p",null,"该组件是一个注册，登出操作组件，不提供任何的样式，就是一个空壳，提供的目的是，你如果需要让用户登录，发布说说等，可以为用户提供注册等操作，我没有提供样式，是因为什么样式也没有，更便于你们设置其css样式",-1),d=(0,t._)("blockquote",null,[(0,t._)("p",null,"该组件展示效果")],-1),b=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211110234327520",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211110234327520.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),h=(0,t.uE)('<ul><li>结构</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!--这是一个登录注册的组件--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomTop<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">v-on:</span>submit.prevent</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">autocomplete</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入用户名<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">autocomplete</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>输入6到20位包含数字,字母密码<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">autocomplete</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入邮箱 登录不需要此邮箱<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomCenter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common coze-custom-button coze-custom-register<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>verifyIdentify<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>注册<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common coze-custom-button coze-custom-login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loginIn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common coze-custom-button coze-custom-out<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loginOut<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>登出<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomBottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="钩子-1" tabindex="-1"><a class="header-anchor" href="#钩子-1" aria-hidden="true">#</a> 钩子</h3><p>提供的钩子有</p><table><thead><tr><th>名称</th><th>数据</th><th>描述</th></tr></thead><tbody><tr><td>cozeLoginOut</td><td>返回数据</td><td>点击登出按钮返回登出状态</td></tr><tr><td>cozeLogin</td><td>返回用户登录相关信息</td><td>点击登录</td></tr><tr><td>cozeRegister</td><td>返回用户注册数据</td><td>在leanCloud中，注册新用户</td></tr></tbody></table><ul><li>使用案例</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>CozeLogin @coze<span class="token operator">-</span>login<span class="token operator">-</span>out<span class="token operator">=</span><span class="token string">&quot;cozeLoginOut&quot;</span> @coze<span class="token operator">-</span>login<span class="token operator">=</span><span class="token string">&quot;cozeLogin&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>CozeLogin<span class="token operator">&gt;</span>\n\n<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">cozeLoginOut</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;点击登出按钮&quot;</span><span class="token punctuation">)</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">cozeLogin</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;点击登录按钮&quot;</span><span class="token punctuation">)</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">cozeRegister</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;点击注册按钮&quot;</span><span class="token punctuation">)</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',7),q=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108203333154",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108203333154.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),v=(0,t.uE)('<blockquote><p>你可以根据返回的数据，进行额外的一些操作</p></blockquote><blockquote><ul><li><p>registerStatus</p><blockquote><p>为0，表示注册失败，反之</p></blockquote></li><li><p>status</p><blockquote><p>为1，表示成功退出登录</p></blockquote></li><li><p>administrator</p><blockquote><p>为0，表示不是管理员，反之</p></blockquote></li></ul></blockquote><h3 id="插槽-1" tabindex="-1"><a class="header-anchor" href="#插槽-1" aria-hidden="true">#</a> 插槽</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomTop<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomBottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="registeruser" tabindex="-1"><a class="header-anchor" href="#registeruser" aria-hidden="true">#</a> RegisterUser</h2><p>该组件也是一个全局组件，插件提供的默认注册组件，未提供任何钩子等</p>',6),z=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211108203909235",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211108203909235.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),_=(0,t._)("h2",{id:"样式",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#样式","aria-hidden":"true"},"#"),(0,t.Uk)(" 样式")],-1),f=(0,t.Uk)("样式设置"),y=(0,t._)("h2",{id:"cozephoto",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#cozephoto","aria-hidden":"true"},"#"),(0,t.Uk)(" CozePhoto")],-1),x=(0,t._)("p",null,"该组件是展示相册的一个全局组件，该组件的展示效果如下图",-1),C=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211111000148676",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211111000148676.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),j=(0,t._)("p",null,"该组件会展示所有用户发布在说说上，并且设置为显示的图片",-1),L=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"TIP"),(0,t._)("p",null,"后续会加上，不是管理员只显示当前用户对应的图片，管理员显示所有")],-1),U=(0,t._)("blockquote",null,[(0,t._)("p",null,"该组件没有提供任何的插槽等")],-1),S=(0,t._)("h2",{id:"样式配置",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#样式配置","aria-hidden":"true"},"#"),(0,t.Uk)(" 样式配置")],-1),P=(0,t.Uk)("样式配置"),w={},M=(0,a(3744).Z)(w,[["render",function(n,s){const a=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,o,e,c,l,u,i,r,k,g,m,d,b,h,q,v,z,_,(0,t._)("p",null,[(0,t.Wm)(a,{to:"/plugin/coze/style.html"},{default:(0,t.w5)((()=>[f])),_:1})]),y,x,C,j,L,U,S,(0,t._)("p",null,[(0,t.Wm)(a,{to:"/plugin/coze/style.html"},{default:(0,t.w5)((()=>[P])),_:1})])],64)}]])}}]);