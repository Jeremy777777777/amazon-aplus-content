# Mobile A+ 图片制作入口

2026-10-30 硬性生产规则：先读 [图片像素规则](references/image-dimensions.md)。网页/手机均为各自 minimum 宽高的同一个正整数倍，默认2倍；当前字段网页2928×1200、手机1200×900。生成、交付及远端回读必须验证实际像素；其他模块先核实minimum。此规则优先于历史任意创意母版尺寸。

当前输出以 [Drive交付规则](references/google-drive-delivery.md) 为准：手机成品进产品02_IMAGES/APLUS/站点/MOBILE，文案进01_LISTING、配方/原图进90_SOURCE、QA/清单进04_QA；全部产品Markdown同样存Drive。下列GitHub产品示例为2026-10-29历史基线，再次制作先从Drive当前账本恢复相同相对路径，不能覆盖历史GitHub产品副本。可复用规则/模板和每次版本在Drive备份。

以后用户说“生成 Mobile 图片”“做手机 A+”或“沿用这套 Mobile 设计”，先走本入口。

这是独立的手机信息排版路线：**1200×900 / 4:3、现有产品风格、原始硬件/原标识、手机大字、可读限定说明、独立手机清单**。600×450 是已观察到的对应上传框最低值；42px 是本设计在 1200px 画布上的内部字号底线，不是宣称 Amazon 规定所有图片统一最小字号。

- [完整手机设计规范](references/mobile-aplus-design-system.md)
- [可复用设计参数](assets/mobile-aplus-design-system.json)
- [新产品手机制作简报](templates/mobile-aplus-brief.md)
- [新画面/局部修整提示词](templates/mobile-aplus-prompts.md)
- [空白任务结构](templates/mobile-aplus-job.json)
- [VD-744 当前九张手机成品](products/VD-744/US/delivery/mobile.md)
- [VD-744 完整可运行配方](products/VD-744/US/mobile/design.json)

## 再次生成 VD-744

使用Node22或更新版本，先按仓库 `package.json` 安装锁定版本的两项依赖（`npm install`），提供合法可用 Arial regular/bold 字体，运行：

```text
node scripts/render-mobile-aplus.cjs products/VD-744/US/mobile/design.json <临时检查目录>
node scripts/validate-mobile-aplus.cjs products/VD-744/US/mobile/design.json
```

依赖版本与字体设置见 [运行记录](products/VD-744/US/review/mobile-export-runtime.json)。可用 `APLUS_FONT_DIR` 指定包含 `arial.ttf`、`arialbd.ttf` 的目录；不分发字体文件或环境二进制。渲染器不会在缺字/溢出时自动缩小字体。

## 换一个产品

先核实该产品事实、品牌、卖家选项、原始产品图与用户风格方向；填写手机简报和任务结构，按当前素材实际测量裁切/摆位，使用同一设计参数与渲染器。可复用排版方法和字号检查，不能复制 Dell、265T、64GB、4TB、Windows Pro 或本例图片到别的产品。新产品/重大风格变化仍由用户判断实际预览。

运行并不等于 Amazon 审核通过。最终仍要逐张看原尺寸及 360/390/400px 手机宽度，填写对应模块的原生文字、Alt text 与 AI 披露，并在后台检查手机预览。九张是素材数，不承诺九个模块。只有明确授权才进行 Seller Central 保存、应用或发布。
