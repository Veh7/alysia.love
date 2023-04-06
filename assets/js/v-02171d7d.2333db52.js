"use strict";(self.webpackChunkmyBlog_aurora=self.webpackChunkmyBlog_aurora||[]).push([[5208],{402:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-02171d7d",path:"/home/directory-structure.html",title:"主题目录结构",lang:"zh-CN",frontmatter:{tag:["目录结构","主题结构"]},excerpt:"",headers:[{level:2,title:"结构",slug:"结构",children:[]},{level:2,title:"路由",slug:"路由",children:[]}],git:{updatedTime:1660451769e3,contributors:[{name:"‘Veh7’",email:"‘925779572@qq.com’",commits:1}]}}},9921:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});const e=(0,a(6252).uE)('<h1 id="主题目录结构" tabindex="-1"><a class="header-anchor" href="#主题目录结构" aria-hidden="true">#</a> 主题目录结构</h1><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>├─CHANGELOG.md #更新日志\n├─deploy-dist.sh\n├─deploy.sh\n├─package-lock.json\n├─package.json\n├─postcss.config.js\n├─README.md\n├─docs\n|  |- #Markdown文件\n|  ├─.vuepress\n|  |     ├─config.js\n|  |     ├─themeConfig.js #主题配置\n|  |     ├─theme\n|  |     |   ├─package.json\n|  |     |   ├─lib\n|  |     |   |  ├─shared\n|  |     |   |  ├─node\n|  |     |   |  |  ├─auroraTheme.js #主题入口文件\n|  |     |   |  |  ├─auroraTheme.ts\n|  |     |   |  |  ├─utils\n|  |     |   |  ├─client client配置\n|  |     |   |  |   ├─clientAppEnhance.d.ts\n|  |     |   |  |   ├─clientAppEnhance.js\n|  |     |   |  |   ├─utils\n|  |     |   |  |   ├─styles\n|  |     |   |  |   |   ├─theme.style.css #主题默认样式配置\n|  |     |   |  |   ├─public\n|  |     |   |  |   |   ├─js\n|  |     |   |  |   |   | ├─network.js #axios封装\n|  |     |   |  |   |   | ├─tag.js #获取文章所有tag标签工具\n|  |     |   |  |   |   | ├─store #vuex\n|  |     |   |  |   |   ├─fonts #主题默认使用的字体\n|  |     |   |  |   ├─layouts\n|  |     |   |  |   |    ├─404.vue\n|  |     |   |  |   |    └Layout.vue\n|  |     |   |  |   ├─composables\n|  |     |   |  |   ├─components #主题组件\n|  |     |   |  |   |     ├─global #被注册为全局的组件\n|  |     |   |  |   |     ├─child #子组件\n|  |     ├─styles #覆盖主题默认样式文件 \n|  |     |   ├─palette.css #定义Css变量\n|  |     |   ├─index.css #样式文件用于覆盖默认样式或添加额外样式，因此它一般会在你主题样式的末尾引入\n|  |     ├─public #静态文件\n|  |     |   ├─avatar.png\n|  |     |   ├─navbar.js\n|  |     |   └themeConfig.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><p>主题除了vuepress提供的路由之外，还加入了<code>/tag,/about,/link,/mood</code>四个路由</p><table><thead><tr><th>路由</th><th style="text-align:center;"></th></tr></thead><tbody><tr><td>/tag</td><td style="text-align:center;">分类和标签页面</td></tr><tr><td>/link</td><td style="text-align:center;">友情链接页面</td></tr><tr><td>/about</td><td style="text-align:center;">关于页面</td></tr><tr><td>/mood</td><td style="text-align:center;">心情页面</td></tr></tbody></table>',6),r={},l=(0,a(3744).Z)(r,[["render",function(n,s){return e}]])}}]);