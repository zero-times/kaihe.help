# [V0] 开盒应对网站 — 项目状态与下一步 Checklist

> 基于 2026-03-19 项目代码实际状态整理。已完成项打 `[x]`，未完成项打 `[ ]`。

---

## 一、基础工程 ✅ 大部分已完成

### 域名与托管
- [x] 购买主域名 `kaihe.help`
- [x] 将域名绑定到 GitHub Pages（`public/CNAME` 已配置）
- [x] 开启 HTTPS（GitHub Pages 自动处理）
- [x] 配置自定义 404 页面（`src/pages/404.astro`）
- [ ] 确认首页在手机端可正常访问（需真机测试）
- [ ] 确认国内网络环境下可基本打开（GitHub Pages 在部分地区较慢，需实测）

### 仓库与站点基础
- [x] 创建 GitHub 仓库
- [x] 初始化 Astro 项目（TypeScript + `@astrojs/sitemap`）
- [x] 配置基础目录结构
- [x] 配置 GitHub Actions 自动部署（`.github/workflows/deploy.yml`）
- [x] 配置 BaseLayout + ArticleLayout
- [x] 配置统一 Header / Footer 组件
- [x] 配置移动端响应式样式
- [x] 配置 `@astrojs/sitemap` 自动生成 sitemap
- [x] 配置 `robots.txt`
- [x] 配置 meta title / description（通过 frontmatter 驱动）
- [x] 配置 Open Graph 信息（og:title / og:description / og:image / twitter:card）
- [x] 配置 Markdown frontmatter 规范（title / description / pubDate / relatedPages / faq）
- [x] 配置暗色模式（`prefers-color-scheme: dark`）
- [x] 配置 `public/CNAME`
- [ ] **添加 `.gitignore` 文件**（当前缺失，`node_modules`、`dist`、`.astro`、`.DS_Store` 应被忽略）
- [ ] **接入站点统计工具**（Google Analytics 或 Plausible，当前未接入）

---

## 二、信息架构 ✅ 已完成

### 站点主结构（9 页全部上线）
- [x] 首页
- [x] 被开盒了怎么办
- [x] 手机号被公开了怎么办
- [x] 家人信息被挂出来怎么办
- [x] 被网暴/开盒后先报警还是先举报
- [x] 12377 怎么举报
- [x] 开盒后的 30 分钟处理清单
- [x] 证据怎么留才不容易漏
- [x] 给家人/朋友的提醒模板

### 页面导航与互链
- [x] 首页能跳转到所有核心页面
- [x] 每篇文章底部挂 2-3 个相关推荐（RelatedPages 组件 + frontmatter）
- [x] 所有页面都能回到首页（Header 导航 + brand 链接）
- [x] 页面 URL 保持简洁统一（英文小写 + 短横线）
- [x] **核心页面正文中补充互链**（已在关键正文段落补充站内超链接）

---

## 三、内容产出 ✅ 已完成

### 首页
- [x] 主标题：`被开盒了怎么办｜第一小时处理指南`
- [x] 站点一句话介绍
- [x] "先做这 4 步"（StepList 组件）
- [x] 3 个场景入口（已开盒 / 怀疑被开盒 / 帮家人处理）
- [x] 核心页面入口（8 个页面卡片）
- [x] 高风险提醒 alert

### 所有内容页
- [x] 每页有标题、一句话结论、分步骤展开
- [x] 每页有"哪些先别做/常见误区"
- [x] 每页有相关推荐
- [x] 每页有 FAQ（部分页面 2-3 个，家人模板页 2 个）
- [x] 每页标注更新时间
- [x] 内容遵循短句、可执行、不煽情的文风

---

## 四、SEO / GEO ✅ 基础已完成

### 页面基础优化
- [x] 每页独立 `<title>` 和 `<meta description>`
- [x] 每页唯一 H1
- [x] URL slug 统一规范
- [x] canonical URL 配置
- [x] Open Graph + Twitter Card 配置

### 结构化数据
- [x] WebSite schema
- [x] Organization schema
- [x] Article schema（每个内容页）
- [x] BreadcrumbList schema（每个内容页）
- [x] FAQPage schema（有 FAQ 的页面自动生成）

### 可抓取性
- [x] 页面为纯静态 HTML（Astro 零 JS 输出）
- [x] 核心内容不在图片里
- [x] 无登录墙
- [x] robots.txt 配置正确
- [x] sitemap.xml 自动生成
- [ ] **向 Google Search Console 提交 sitemap**
- [ ] **向百度搜索资源平台提交站点**（如需覆盖百度搜索用户）

---

## 五、待修复问题

### P0 — 上线前应修复

- [ ] **添加 `.gitignore`**
  - 当前缺失，`node_modules/`、`dist/`、`.astro/`、`.DS_Store` 等不应被版本控制。

- [ ] **接入统计工具**
  - 没有统计 = 无法验证核心假设（是否有自然搜索进入、哪些页面最受关注）。
  - 推荐 Google Analytics 4 或 Plausible（轻量、隐私友好、GDPR 无忧）。
  - Plausible 可作为 `<script>` 标签加到 BaseLayout 的 `<head>` 中。

- [ ] **OG 图片格式问题**
  - 当前 `og-cover.svg` 是 SVG 格式，大多数社交平台（微信、微博、Twitter/X、Telegram）不支持 SVG 作为 OG 图片。
  - 需要导出为 PNG 或 JPG（推荐 1200×630 PNG），替换 `public/og-cover.svg` 为 `public/og-cover.png`，并更新 BaseLayout 中的默认 image 路径。

### P1 — 尽快补充

- [x] **正文内互链**
  - 已将关键正文里的相关页面引用改为真实站内链接。
  - 已覆盖 `what-to-do-after-doxxing.md`、`phone-number-exposed.md`、`family-info-exposed.md`、`how-to-report-12377.md` 等页面。

- [ ] **Google Search Console 提交**
  - 站点依赖自然搜索验证需求，必须尽快提交 sitemap。
  - 同时可提交网址检查、覆盖率报告，加速收录。

- [x] **添加 `<meta name="theme-color">`**
  - 已在 `BaseLayout.astro` 中为 light / dark 模式分别补充 theme-color。

- [x] **favicon 补充 ICO 格式**
  - 已补充 `public/favicon.ico` 作为 fallback，并在 `<head>` 中添加引用。

### P2 — 后续优化

- [ ] **字体回退测试**
  - `--font-heading` 使用 `Songti SC / STSong / Source Han Serif SC` 宋体系列，在 Android 和 Windows（无苹果字体）上会 fallback 到 serif。
  - 建议在 Android 真机和 Windows 浏览器上确认标题显示效果是否可接受。

- [ ] **正文 copy 按钮**
  - `family-message-template.md` 的模板内容放在 `code` 块中，但没有一键复制按钮。
  - 作为"给家人发的提醒模板"页面，复制体验直接影响实用价值。

- [ ] **Header 移动端溢出**
  - Header nav 在小屏上设为 `overflow-x: auto`，但没有滚动指示器。
  - 用户可能不知道可以左右滑动看到更多导航项。
  - 可考虑：汉堡菜单、收起部分链接、或添加滚动渐变提示。

- [ ] **`body::before` 网格纹理层**
  - 当前 `body::before` 使用 `position: fixed` 铺了一层半透明网格纹理。
  - 在低端手机上 `mix-blend-mode: multiply` + `position: fixed` 会触发独立合成层，可能影响滚动性能。
  - 如果验证阶段不需要此装饰，可考虑移除。

- [ ] **`color-mix()` 兼容性**
  - CSS 中多处使用 `color-mix(in srgb, ...)`，该函数在 Chrome 111+ / Safari 16.4+ / Firefox 113+ 支持。
  - 如果有用户使用较旧浏览器（特别是旧版微信内置浏览器），背景可能显示异常。
  - 可考虑为关键位置添加 fallback 值。

---

## 六、上线后验证

### 数据观察（需统计工具接入后）
- [ ] 记录首页访问量
- [ ] 记录各页面访问量
- [ ] 记录搜索进入的页面和关键词
- [ ] 记录停留时间和滚动深度
- [ ] 记录页面跳出率
- [ ] 记录哪些页面被转发更多（referrer 分析）

### 核心验证问题
- [ ] 是否有人通过自然搜索进入
- [ ] 用户更常进入首页还是具体问题页
- [ ] 哪个标题/关键词最能带来点击
- [ ] "30 分钟处理清单"是否最受欢迎
- [ ] "家人信息"相关页面是否有明显需求
- [ ] 用户更关心举报、留证还是家人提醒
- [ ] 暗色模式用户占比（判断是否值得继续打磨暗色体验）

### 搜索表现
- [ ] Google Search Console 收录数量和速度
- [ ] 核心页面是否出现在搜索结果中
- [ ] 搜索展示量 vs 点击量（CTR）
- [ ] 是否被 AI 搜索（Perplexity / ChatGPT / Google AI Overview）引用

---

## 七、第一阶段完成标准

- [x] 域名已绑定并可访问
- [x] HTTPS 已开启
- [x] 首页已上线
- [x] 6 个核心页面已上线
- [x] 2 个辅助页面已上线
- [x] GitHub Actions 自动部署已配置
- [x] 基础 SEO 配置完成（title / description / sitemap / schema）
- [ ] **统计工具已接入** ← 阻塞验证
- [ ] **Google Search Console 已提交** ← 阻塞验证
- [ ] **OG 图片已替换为 PNG** ← 影响社交分享效果
- [ ] 可以开始收集第一轮真实访问与搜索表现

---

## 八、V1 方向建议（验证数据到位后再决定）

以下不属于当前阶段必做项，留作数据验证后的决策参考：

### 如果搜索流量初步验证成立
- [ ] 根据最受欢迎页面扩写更细分的子场景页
- [ ] 补充平台举报入口导航页（微博、抖音、小红书、B 站等主流平台的举报流程）
- [ ] 考虑添加简体/繁体切换或港澳台地区相关法规指引
- [ ] 为"30 分钟清单"做更强的交互化 checklist（本地 localStorage 记录进度）

### 如果转发分享是主要传播路径
- [ ] 优化 OG 卡片设计（为每个核心页面生成独立 OG 图）
- [ ] 考虑生成可分享的长图版清单
- [ ] 添加微信/微博分享按钮

### 如果用户反馈需要更多模板和工具
- [ ] 模板下载页（PDF 版留证清单、家人提醒模板）
- [ ] 简易证据整理工具（纯前端，不上传数据）

### 工程方向
- [ ] 添加 Lighthouse CI 到 GitHub Actions（持续监控性能分数）
- [ ] 考虑 CDN 加速（Cloudflare 免费方案，改善国内访问速度）
- [ ] 国际化支持（如果验证发现海外中文用户需求）

---

## 九、暂不做

- [x] 不做复杂交互工具
- [x] 不做 OCR / 自动识别
- [x] 不做账号系统
- [x] 不做云端证据托管
- [x] 不做完整平台数据库
- [x] 不做商业化页面
- [x] 不做 App / 小程序版本
