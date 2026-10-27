# VD-744 · A+ / Premium A+ 设计方案 v1

**历史方案说明（2026-10-27）：**下文为原六图／五主题初稿，保留制作历史。当前九图以 [交付页](delivery/README.md) 与 [已批准修订证据](review/revision-20261027-evidence.json) 为准；复用方法见 [九图 workflow 规范](../../../references/nine-image-business-pc.md)。当前 03 为处理器、04 为整机速览、06 列实际选项，不按下文旧场景名恢复图片。

状态：**DESIGN_PLAN_COMPLETE / BACKEND_ADAPTATION_PENDING**。这是内容、布局与图片制作方案；不是已经生成的最终图片、视频或可直接上传的后台包。用户于 2026-10-15 明确先完成设计方案、后续适配。

## 已确认方向

- 复用已有 Listing 图片和准确产品原图，不重做产品身份研究或 Listing 工作簿。
- 视觉采用制造商 **Dell Logo** 与现有 Listing 商务风格。准确 Logo 直接复用原始资产，不用 AI 仿画。
- 受众：企业办公、居家办公、business。自动判断为 **商务 Micro 台式主机**：依据为 ERP 形态、准确机型、当前 Listing 用途与用户确认。
- 默认延续既有 Listing 的白／深蓝／蓝色强调和真实黑色主机，优化信息层级；不新换成电竞灯效或其他品牌风格。
- Dell 标识建立基础机器身份；正文准确描述 MegaPC 的定制销售关系，不营造 Dell 官方旗舰店、Dell 制作视频或官方背书的印象。无需把 MegaPC Logo 作为主视觉。
- RAM/SSD 共用内容不固定容量，不把最高值当标配；未确认的保修、随附键鼠、无线版本、多屏数量与性能百分比暂不展示。

## 一句话定位与内容主线

**Dell Pro Micro QCM1250 — Make Room for What Matters.**

让买家先看到紧凑商务主机与自己的工作空间的关系，再理解处理器、连接和配置选择。英文文案采用“一个理由 + 一句事实”，主图文字少、解释文字留在模块正文。

内容顺序：产品认知 → 办公价值 → 真实细节与连接 → 配置选择 → 解答购买疑虑。

参考推导见 [reference-analysis.md](reference-analysis.md)；资料复用与未来自动分类规则见 [listing-reuse-and-routing.md](../../../references/listing-reuse-and-routing.md)。

## 视觉规范

| 项目 | 设计要求 |
|---|---|
| 色彩 | 延续 B01：深蓝 `#10243A`、白 `#FFFFFF`、蓝 `#246DDB`；浅蓝灰背景用于内容分区。这是本产品既有色板，不声称是完整 Dell 官方品牌手册 |
| 产品 | 精确 QCM1250 黑色 Micro 原图；正面与三分之四视角为主，背面只展示已确认标准接口 |
| Logo | 复用 `assets/branding/dell-logo-blue-transparent.png`，保持比例；在留白区呈现，不盖住端口或新刻到机身上 |
| 字体 | 延续已有 Arial / 系统无衬线；标题短而明确，正文不过度压缩，数字与术语单独核对 |
| 构图 | 主机与文本分区；浅底与深蓝段落交替；一屏一个主要购买问题；图标仅辅助，不用大量规格卡重复堆满每屏 |
| 场景 | 企业办公家具与居家办公家具，主机为唯一商品焦点；初稿不添加未确认随附的外设或配件 |
| 参数 | 用文字标签说明真实能力；营销侧面文字不作为机身物理印刷延续到其他角度 |
| 移动端 | 重要主机、标题及卖点集中在安全区域；后续按实际模块分别重排，不把桌面整张图机械缩小 |
| 尺寸 | 本阶段使用比例与布局描述；后台模块、像素尺寸、数量和字段限制在适配阶段核实，不宣称当前方案直接可上传 |

## Basic A+：五个内容段落

这是五个设计主题，后台若需合并或拆分再适配。

### B01 · 产品主视觉

- 购买问题：这是什么产品，适合什么工作空间？
- 布局：左侧标题和短文，右侧准确主机三分之四角度；白底、少量深蓝结构，Dell Logo 放在留白区。
- Headline: **Make Room for What Matters.**
- Subheading: **Dell Pro Micro QCM1250**
- Body: **A compact desktop for office and home-office work. Created using Dell Pro Micro QCM1250 and customized by MegaPC.**
- 图片需求：干净原图，保留真实外观；不使用已有侧面大字广告图作为所有后续镜头的实物基准。

### B02 · 办公核心价值

- 购买问题：有哪些与我工作相关的选择理由？
- 布局：三个宽松图文区，分别说明 CPU、Micro 形态、系统；不把内存与 SSD 最大容量塞入速览。
- Headline: **The Essentials for Your Workday.**
- Card 1: **Intel Core Ultra 7 265T** — **Processing for everyday office applications and multitasking.**
- Card 2: **Micro Desktop Design** — **A compact form for desks and shared work areas.**
- Card 3: **Windows 11 Pro** — **The seller-delivered operating system for this configuration.**
- 图片需求：产品细节或轻量信息图；CPU 型号用文字或现有准确资产，不新生成处理器 Logo。

### B03 · 企业与居家场景

- 购买问题：它适合我的办公环境吗？
- 布局：企业办公与居家办公两幅场景；沿用真实原图合成于干净家具环境，光线自然。
- Headline: **A Place in Your Working Day.**
- Body: **From the office to your home workspace, the black micro desktop brings a restrained look to everyday work environments.**
- 标签：**Business Workspace / Home Office**。
- 不表现具体软件性能、视频会议效果、预装 Office 或未确认配件套装。

### B04 · 真实连接证据

- 购买问题：有哪些连接方式？
- 布局：正面与背面原图，加少量对应位置标签；连接类型与可见接口一一对应，选配区域留空或不突出。
- Headline: **Connections You Can See.**
- Body: **HDMI, DisplayPort, USB-A, USB-C and Ethernet connections support everyday desk workflows. Wi-Fi and Bluetooth are also listed for this product.**
- 信息所有权：这一段负责接口，不重复 CPU / RAM / SSD 全套参数。
- 不写未确认速率、端口数量、多屏数量或无线代际。

### B05 · 正确选择配置

- 购买问题：下单时应确认什么？
- 布局：主机小图 + RAM / SSD 两个选择主题 + 简短提醒，保持白底。
- Headline: **Choose Your Configuration with Confidence.**
- Body: **Review the RAM and SSD options available on this listing, then confirm your selected configuration before ordering.**
- 注释设计：不画未核实的所有组合矩阵；没有同品牌可售型号资料时，不强做产品对比表。

## Premium A+：七个内容主题

与 Basic 使用相同事实和视觉语言，扩展阅读方式；主题数量不等于后台允许模块数量。互动形式为候选，当前不依赖 Premium 权限。

| ID | 购买任务 | 内容与英文标题 | 候选布局／互动 | 图片或脚本需求 |
|---|---|---|---|---|
| P01 | 迅速识别 | **Make Room for What Matters.** | 宽幅主视觉／可选产品视频 | 大幅准确主机原图与留白标题 |
| P02 | 看懂工作价值 | **The Essentials for Your Workday.** | CPU、形态、系统三个简洁信息区域 | 复用 B02，改宽幅节奏 |
| P03 | 对号入座 | **Business Workspace. Home Office.** | 两个场景的轮播候选 | 企业／居家两个场景及短标签 |
| P04 | 消除连接疑虑 | **Explore the Connections.** | 前后接口图，热点候选 | 真实原图及经过核对的标签 |
| P05 | 理解配置 | **Your Configuration, Clearly Chosen.** | RAM、SSD 选择说明的双页候选 | 配置中性信息图，不标虚构组合 |
| P06 | 理解产品来源 | **Dell Pro Micro. Customized by MegaPC.** | 机型／OEM／销售升级角色分层 | Dell Logo 为主；文字明确销售关系 |
| P07 | 决策前确认 | **Before You Choose.** | Q&A 候选或普通图文 | 已知配置、CPU、系统和无线问题 |

P07 问答初稿：

- **What processor does this desktop use?** — **Intel Core Ultra 7 265T.**
- **Can I select the RAM and SSD?** — **Review the customization options currently available on the listing and confirm your selected configuration before ordering.**
- **What operating system is supplied?** — **Windows 11 Pro is the seller-delivered operating system.**
- **Does it support wireless connections?** — **Wi-Fi and Bluetooth are listed for this product; this content does not specify wireless versions.**

## 视频方向：约 30 秒，脚本方案

视频延续 Dell 现有 Listing 视觉，不生成成片。下表为外部 AI 的叙事顺序；每个镜头使用同一个精确产品参考体系。

| 时间 | 画面 | 英文字幕 | 可选旁白 | 生成与后期要求 |
|---|---|---|---|---|
| 00–04 | 干净主机三分之四视角，轻推近 | Make Room for What Matters. | A compact desktop for your working day. | 主机占主要面积，不改变轮廓 |
| 04–09 | 产品稳定特写，准确 CPU 型号后期淡入 | Intel Core Ultra 7 265T | Built around Intel Core Ultra 7 processing. | 无虚构芯片内部镜头或跑分 |
| 09–14 | 办公家具环境与主机，克制侧移 | Business Workspace | Designed for everyday office applications. | 不加入未确认的套装外设 |
| 14–19 | 居家办公环境，保持同一机身 | Home Office | A restrained fit for your home workspace. | 保持品牌色与产品比例 |
| 19–25 | 已核实接口特写与配置文字 | Everyday Connections / RAM & SSD Options | Explore the connections and choose the available configuration for your needs. | 如旁白超时，精简为 Choose the available configuration for your needs. |
| 25–30 | 产品定格，Dell 原始 Logo 与身份文字 | Dell Pro Micro QCM1250 / Customized by MegaPC | Dell Pro Micro QCM1250, customized by MegaPC. | Logo、字幕与数字全部后期添加 |

全局制作约束：真实 QCM1250 外观不变；无新增端口、无配件暗示、无 AI 生成文字；品牌标志使用原始资产。工具未选择，因此不预设 seed、首尾帧等工具专属能力。正式制作时按 [视频模板](../../../templates/video-ai-script.md) 生成完整逐镜头提示词与时间字幕。

## 素材复用清单

源仓库相对路径：

- 产品正面／侧面／背面／角度：`assets/production/VD-744/b01-20261013/dell-qcm1250-*.png`。
- 原始 Logo：`assets/branding/dell-logo-blue-transparent.png`。
- 已有办公背景：`assets/production/VD-744/b01-20261013/office-background.png`。
- 图文风格：`product generated photo/VD-744/style-lock.json` 与现有 PT01–PT08。
- 当前主角度广告：`product generated photo/VD-744/MAIN-ENHANCED-THREE-QUARTER-CANDIDATE.png`；保留为 Listing 风格参考，不把营销侧面叠字当作产品原貌。

后续实际制作时把选用文件复制到本项目 `source/` 或 `shared/`，记录原始路径、哈希和使用位置。本次设计方案不复制整套旧 gallery，也不将旧 QA 状态改为本次通过。

## 后续适配与验收

内容和设计方向已形成；未来只在开始制作／后台适配时确认实际模块、尺寸、字段、热点数量、视频要求及移动端版本。逐段检查是否回答了一个购买问题、产品和文字是否准确、Dell／MegaPC 身份是否清晰。最终图片、脚本包、视频成片与 Amazon 审核状态分别记录。
