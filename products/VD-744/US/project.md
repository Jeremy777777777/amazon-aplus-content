# VD-744 · 美国站 A+ / Premium A+ / 视频脚本项目

资料核对日期：2026-10-15；内容产出日期：2026-10-16。当前状态：**CONTENT_V1_REVIEW_READY / BACKEND_ADAPTATION_PENDING**。已生成六张 A+ 图片母版、两套英文文案／模块顺序，以及完整通用视频 AI 脚本、旁白文字和字幕。图片仍需终审与后台规格适配；没有视频成片，没有发布到 Amazon。

当前交付见 [delivery/README.md](delivery/README.md)，素材及 SHA-256 见 [delivery/manifest.json](delivery/manifest.json)。

## 当前设计决定（覆盖下方早期初稿中的待定设计项）

- 用户确认沿用 Listing 图片和准确产品原图。
- 使用制造商 Dell Logo 与现有 Listing 视觉；正文准确保留 MegaPC 定制销售身份。
- 受众为企业／居家／business；判断为商务 Micro 主机，以空间、日常工作与连接价值作为购买主线。
- 先完成设计方案，再适配后台。无需现在确认 Premium 权限。
- 已读取 PCOnline `B0GZZDDLMT` 与 IST Computers `B0FQBKV3D5` 的同机型 A+；只借鉴内容逻辑，不迁移其 Ultra 5 配置或性能宣称。
- 正式方案见 [design-plan.md](design-plan.md)，参考证据见 [reference-analysis.md](reference-analysis.md)。下方 Basic/Premium/视频内容保留为早期初稿，以正式方案为当前设计版本。

## 身份与归档

- ERP Virtual ID：**VD-744**（已直接读取用户提供的 ERP 页面确认）。
- ERP 产品记录：20744。
- ERP 来源：https://erp-git-feat-part-serial-numbers-overhaul-jtechdigital.vercel.app/products/20744
- 用户指定 Listing：https://www.amazon.com/dp/B0HMY74CHD
- ASIN：B0HMY74CHD。
- ERP 型号：Dell Pro Micro QCM1250。
- Listing 品牌：MegaPC；基础机器 OEM 品牌：Dell。品牌身份必须分别表达，不能暗示 MegaPC 为 Dell 官方品牌。
- 默认：美国站、英文买家文案、中文制作说明、约 30 秒视频、工具无关提示词。
- 目录：`products/VD-744/US/`，全部本产品交付归入此目录。
- ASIN 与 Virtual ID 的项目关联依据：用户连续提供的 Listing / ERP 输入，加上型号、CPU、形态与无线功能一致。当前 ERP 页面尚未显示该新 ASIN 的直接关系行，不能称为后台关联已核实。

## 来源与事实

| 项目 | 读取结果 | 来源 | 使用方式 |
|---|---|---|---|
| Virtual ID | VD-744 | ERP 页面标题与产品标识 | 正式文件夹名称 |
| 型号 | Dell Pro Micro QCM1250 | ERP / Listing | 可用于产品身份 |
| 形态与颜色 | Micro / Black | ERP / Listing | 桌面办公、紧凑机身视觉 |
| CPU | Intel Core Ultra 7 265T | ERP / Listing | 可写准确型号 |
| 显卡 | Intel Integrated Graphic Card | ERP；Listing 为 integrated Intel Graphics | 不写独显或游戏性能 |
| Wi-Fi / Bluetooth | Yes / Yes | ERP / Listing | 不写未核实的代际或版本 |
| 内存与存储 | 标题列出多档选项；正文基础配置 16GB DDR5 / 256GB SSD | Listing | 共用 A+ 暂不锁定具体容量 |
| 操作系统 | Windows 11 Pro | Listing | 写成卖家交付系统，不推断所有 ERP 子型号相同 |
| 接口 | HDMI、DisplayPort、USB-A、USB-C、Ethernet | Listing；ERP 备注提及 HDMI、DP、Type-C | 可写已列类型；接口数量、速率与可选后置模块另核对 |
| CPU 核心 / 最高频率 | Listing 写 20 cores / up to 5.3 GHz | Listing | 需要时补 OEM 资料核对；初稿先用型号 |
| 包装 | Listing 的 What's in the box 为 AC Adapter | Listing | 键盘、鼠标和显示器不当作已确认随附配件 |
| 保修 | ERP：Warranty 6 Months / Warranty Extension 12 Months；Listing：升级 RAM / SSD 一年有限保修及基础部件 Dell 保修声明 | 存在来源差异 | 暂不放入 A+ / 视频，待卖家确认适用承诺 |
| 尺寸、重量 | ERP 当前页面未填写 | ERP | 不写精确尺寸或重量；旧资料中的 OEM 平台值不直接等同于售出配置 |

不保存 ERP 客户、订单、成本、库存或序列号数据。只摘录此项目需要的产品信息。

## 本次内容范围

采用配置中性的共用内容，突出机型、办公场景和已确认功能，避免 16GB/256GB 图文误用于其他可定制配置。具体容量表、组合矩阵和适用 ASIN 清单在最终应用前核实；不从标题推断全部 RAM × SSD 组合均可购买。

主线初稿：**A compact desktop for a focused workspace.**

中文解释：先让买家认识黑色 Micro 主机和办公定位，再说明处理器、连接和配置选择。暂不使用“最快”“无延迟”“支持若干屏幕”“静音”“AI 性能”或未实测的性能保证。

## 主要参考

- PCOnline：https://www.amazon.com/stores/PCOnline/page/A207A48D-D145-4C5A-97EC-3316A9BA796B
- IST Computers：https://www.amazon.com/stores/ISTComputers/page/C7DDE592-B3BF-4748-883A-1988837CDED0
- 店铺身份已由用户确认，同类商品和 A+ 内容逻辑已完成读取分析，见 `reference-analysis.md`；竞品视频镜头节奏未完整播放分析，不据此声称已验证。
- 已有 Listing 设计资料可作为用户品牌历史参考，但不能替代本次竞品分析或产品图片核对。

## Basic A+ 初稿

以下是内容主题，实际后台模块名、尺寸、数量与可用字段在制作时核实。

| 顺序 | 英文标题 | 英文正文初稿 | 视觉需求 |
|---|---|---|---|
| 1 | A Compact Desktop for a Focused Workspace | Meet the MegaPC custom micro desktop, created using Dell Pro Micro QCM1250. Its black micro form factor fits into everyday office and home-office setups. | 主机三分之四视角；干净办公背景；主机为焦点 |
| 2 | Intel Core Ultra 7 Processing | Built around the Intel Core Ultra 7 265T processor for everyday office applications and multitasking. | 主机特写配准确 CPU 型号；不画虚构内部结构 |
| 3 | Connections for Your Desk | HDMI, DisplayPort, USB-A, USB-C and Ethernet connections support a range of everyday peripherals. Wi-Fi and Bluetooth are also available. | 真实接口图配文字；未核实的后置选配接口不突出 |
| 4 | Choose the Configuration That Fits | Select from the RAM and SSD options available on this listing. Check your selected configuration before ordering. | 配置选择概念图；不虚构容量组合，不把最高容量当标配 |
| 5 | Windows 11 Pro for Daily Work | The seller-delivered operating system is Windows 11 Pro, ready for your everyday work environment. | 办公场景与后期文字；显示器、键鼠作为场景道具时明确不暗示随附 |

替代文本按最终图片实际内容撰写，不把关键词堆砌为图片描述。图中文字后期排版，保证参数与拼写正确。

## Premium A+ 初稿

| 内容主题 | 英文标题 / 内容 | 候选形式与素材 |
|---|---|---|
| 产品识别 | A Compact Desktop for a Focused Workspace | 大幅主视觉或本产品视频；真实产品外观保持一致 |
| 处理器与机身 | Intel Core Ultra 7. Micro Desktop Design. | 细节大图；真实产品像素优先 |
| 工作空间场景 | Your Desk. Your Workflow. | 办公与居家办公场景轮播；不展示游戏性能或多屏数量保证 |
| 日常连接 | Connect Your Everyday Essentials | 热点候选：只标真实可见且已确认的端口；具体模块待核实 |
| 选购疑虑 | Know Your Configuration | Q&A 候选；以下问答按可用字段适配 |

Q: Can I choose the RAM and SSD configuration?

A: This listing offers RAM and SSD customization options. Review the configuration selected at checkout.

Q: What processor does this desktop use?

A: It uses the Intel Core Ultra 7 265T processor.

Q: Does it support Wi-Fi and Bluetooth?

A: Wi-Fi and Bluetooth support are listed for this product. Wireless versions are not specified in this content.

Q: Which operating system is supplied?

A: Windows 11 Pro is the seller-delivered operating system.

本版本不强行填满模块；若后台不支持某个候选模块，改用适用图文形式。价格、限时优惠、买家评价和未确认保修均不写入初稿。

## 30 秒视频初稿

当前交付文字脚本思路，非成片。正式逐镜头提示词依据 `templates/video-ai-script.md`，在真实参考图与风格确认后补全。

| 时间 | 镜头 | 英文画面字幕 | 可选英文旁白 | 素材限制 |
|---|---|---|---|---|
| 00–04s | 黑色主机主视觉，轻微推近 | Compact Design. Focused Workspace. | Meet a compact desktop for your daily work. | 真实参考图；不添加配件 |
| 04–09s | 主机稳定特写，CPU 型号后期出现 | Intel Core Ultra 7 265T | Built around Intel Core Ultra 7 processing. | 不生成芯片内部画面或跑分 |
| 09–14s | 已确认接口细节，轻微平移 | Connect Your Everyday Essentials | Connect your everyday peripherals. | 接口必须与实物或准确参考一致 |
| 14–20s | 主机融入有留白的办公桌 | Designed for Office and Home Office | Make room for a focused office or home-office setup. | 显示器、键鼠为场景道具，不代表随附 |
| 20–26s | 产品定格，配置与系统文字后期叠加 | RAM & SSD Options / Windows 11 Pro | Choose the available RAM and SSD options for your needs. | 不展示未确认组合或最大值标配 |
| 26–30s | 产品与 MegaPC 品牌收尾 | MegaPC / Dell Pro Micro QCM1250 | MegaPC. Built around Dell Pro Micro QCM1250. | Logo 与文字后期添加 |

上述旁白为初稿，实际配音后检查各镜头时长；字幕即使关闭声音也应能讲清产品。

## 文件归档与下一阶段

```text
products/VD-744/US/
  project.md
  source/       # 产品事实、Listing 快照与真实参考图
  shared/       # 品牌素材、共用视觉规范
  basic/        # 普通 A+ 文案、模块映射及图片
  premium/      # Premium A+ 文案、模块映射及图片
  video/        # 完整脚本、分镜、逐镜头提示词、旁白、字幕
  delivery/     # 最终交付素材及上传映射
  review/       # 预览与验收记录
```

当前仅 `project.md` 及已经保存的来源记录为真实文件，其余目录按素材实际产出创建，不把规划标记为交付完成。

当前已完成：两家同机型 A+ 参考分析、既有产品图与风格查阅、六张创意图片、两套 A+ 文案与完整视频 AI 脚本包。2026-10-16 用户要求开始生成内容，本轮已执行。后续阶段：用户内容审核、最终硬件与品牌细节终审、后台模块与尺寸／移动端适配、外部视频生成与成片验收。当前后台访问曾返回 Access Required，不能将适配或上传标为完成。
