# Amazon A+ Content

**当前交付渠道（2026-10-29）：**所有产品输出存入 [Drive产品区](https://drive.google.com/drive/folders/1z14YEhGsDHXq1YbkuO5iG3t6uIuut4Lf) 的准确产品目录。所有可复用Markdown、脚本、模板和每次版本更新另在 [A+工作流备份](https://drive.google.com/drive/folders/12ADXVFhIIXgtM89osg_r-GPIJT_WcU0b) 保留展开快照。GitHub产品目录是历史基线，不能作为下次任务的最新输入；详见 [Drive交付规则](references/google-drive-delivery.md)。

从已有 Listing 信息或 ERP 产品链接出发，为同一产品制作 Basic A+（普通 A+）和 Premium A+（A++）两套内容。

## 工作流与模板入口

- [完整制作工作流](WORKFLOW.md)：Listing / ERP → 事实核对 → 参考分析 → 两套 A+ 图文 → 视频 AI 脚本 → 验收与交付。
- **[独立 Mobile A+ 制作入口](MOBILE.md)** · [VD-744 当前九张手机成品](products/VD-744/US/delivery/mobile.md)：专用手机排版、1200×900、大字与原生文字、可运行配方和检查；桌面母版另行保留。
- [复用 VD-744 九图内容与视觉规范](references/nine-image-business-pc.md)：九图分工、配色、字号、图文占比、规格网格、配置表、自然办公摆位和逐图检查。
- [九图项目简报](templates/nine-image-brief.md) · [九张英文提示词模板](templates/nine-image-prompts.md) · [设计参数 JSON](assets/nine-image-business-pc-style.json)。
- [产品项目模板](templates/product-project.md)。
- [视频 AI 脚本模板](templates/video-ai-script.md)：时间轴、逐镜头提示词、产品外观约束、字幕、旁白稿与剪辑说明。
- [PCOnline 与 IST Computers 参考店铺](references/sellers.md)。

已确认默认设置：美国站、英文买家文案、中文制作说明、约 30 秒视频；视频 AI 未选定，先使用通用格式。

## 项目定位

Listing 仓库管理标题、五点描述、产品参数与 Listing 图片；本仓库管理 A+ 的内容规划、文案、视觉设计与最终上传素材。产品事实以已确认的 Listing 和原始规格为依据，每个项目记录来源链接与版本。

## 开始一个产品项目

手机图片下次可直接说：**“按仓库的 Mobile A+ 设计，为 `<产品ID>` 生成手机图片。”** 从 [MOBILE.md](MOBILE.md) 读取规范、模板和当前产品资料；同一产品可按已保存配方再次生成，其他产品重新匹配事实和素材。

下次可直接说：**“为 `<产品ID／Listing链接>` 按 VD-744 的九图商务风格制作 A+，先核实当前产品和实际销售档位，展示风格预览，再按确认结果完成九图。”** AI 按本仓库 workflow 读取规范并填项目简报；无需重述每张图的布局。品牌、硬件数值和档位重新核实，新产品风格仍由你判断。

1. 提供 Listing 信息、Listing 链接 / ASIN 或 ERP 产品链接；从已有资料提取 SKU、站点、规格与图片。
2. 收集确认过的规格、产品原图、品牌标识、卖点及已有 Listing 文案。
3. 复制 `templates/product-project.md` 为 `products/<Virtual-ID>/<marketplace>/project.md`。
4. 先确认共享的卖点和视觉方向，再分别制作 Basic 与 Premium 版本。
5. 检查事实、文案、图片和移动端阅读效果，整理交付包。
6. 记录实际选择的版本、应用 ASIN、提交日期及审核结果。

## 产品目录约定

```text
products/<Virtual-ID>/<marketplace>/
  project.md             # 产品资料、来源、状态和两套内容规划
  source/                # Listing 快照、规格、授权产品图片
  shared/                # 共用品牌素材和已确认的卖点
    assets/              # 共用九图母版；版本专用导出另按需要保存
    source/              # 实际使用的精确产品原图和品牌来源
  basic/
    copy.md              # 普通 A+ 模块与文案
    assets/              # 普通 A+ 图片
  premium/
    copy.md              # Premium A+ 模块与文案
    assets/              # 大图、轮播、热点素材
  video/                 # 通用视频 AI 脚本、分镜、提示词、旁白与字幕
  delivery/              # 最终上传素材和模块映射清单
  review/                # 预览、修改记录与审核结果
```

以上为新产品的目录约定；在确认第一个产品后按需创建实际文件。

## 两套版本的制作原则

- Basic：使用后台提供的标准图文和对比模块，清楚说明核心卖点、细节及使用场景。
- Premium：共用已确认的产品事实和品牌风格，按后台实际权限扩展大图、轮播、热点、视频和 Q&A。
- 图片尺寸、模块数量、字段限制和可用模块，在制作时按目标站点的 A+ Content Manager 核实，并记录核实日期。
- 不编造规格、认证、性能、兼容性或买家评价；缺少依据的内容标记待确认。
- 项目工作说明可用中文；面向买家的文案按目标站点语言输出。
- 大型视频、可编辑设计源文件可用受控存储链接记录，避免把大型二进制文件反复提交到 Git。

## 当前状态

已完成 VD-744 的资料核对、竞品分析与设计方案，并于 2026-10-16 产出六张图片母版、普通 A+ 与 Premium A+ 英文内容、通用视频 AI 脚本／旁白文字／字幕。查看 [VD-744 内容交付](products/VD-744/US/delivery/README.md)。当前为创意审核版；后台模块、像素尺寸与移动端适配待完成，没有视频成片或自动发布到 Amazon 的程序。



2026-10-27：VD-744 已扩展为九张，并按用户批准替换 02／03／04／06／08，列出实际 RAM／SSD 销售档位；最新图文与证据见上述交付页。后台适配仍待完成。

2026-10-29：VD-744 九张手机派生图已导出并检查，尺寸 1200×900、每张小于 2 MB，见手机交付页。原始产品/标识和批准场景作为固定图层，保留原有文案；桌面母版未改。仅确认图片文件规格，实际后台上传、整页手机预览及 Amazon 发布未执行。

2026-10-29 后续完善：九张手机图已换为独立大字排版，最小图中文字42px；修复08乱码、补三张AI手部场景元数据、统一九条Alt≤100字符。当前规则、原始标识库、参数、提示词和可运行配方已保存；最新状态见 [手机交付](products/VD-744/US/delivery/mobile.md)。
