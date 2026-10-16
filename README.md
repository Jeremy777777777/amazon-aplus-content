# Amazon A+ Content

从已有 Listing 信息或 ERP 产品链接出发，为同一产品制作 Basic A+（普通 A+）和 Premium A+（A++）两套内容。

## 工作流与模板入口

- [完整制作工作流](WORKFLOW.md)：Listing / ERP → 事实核对 → 参考分析 → 两套 A+ 图文 → 视频 AI 脚本 → 验收与交付。
- [产品项目模板](templates/product-project.md)。
- [视频 AI 脚本模板](templates/video-ai-script.md)：时间轴、逐镜头提示词、产品外观约束、字幕、旁白稿与剪辑说明。
- [PCOnline 与 IST Computers 参考店铺](references/sellers.md)。

已确认默认设置：美国站、英文买家文案、中文制作说明、约 30 秒视频；视频 AI 未选定，先使用通用格式。

## 项目定位

Listing 仓库管理标题、五点描述、产品参数与 Listing 图片；本仓库管理 A+ 的内容规划、文案、视觉设计与最终上传素材。产品事实以已确认的 Listing 和原始规格为依据，每个项目记录来源链接与版本。

## 开始一个产品项目

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

