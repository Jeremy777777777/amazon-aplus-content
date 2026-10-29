# A+ 手机图片导出

输出渠道已于2026-10-29切换为 [Drive产品存储与工作流版本备份](google-drive-delivery.md)。下文产品路径用于临时恢复/制作；当前产品文件到Drive，不继续更新历史GitHub产品副本。

当前独立手机设计与再次生成从 [MOBILE.md](../MOBILE.md) 进入，详见 [手机设计系统](mobile-aplus-design-system.md)。本页保留字段尺寸与导出适用边界；新版还要求360/390/400px检查、内部42px字号底线、Alt与AI披露。

2026-10-29 用户决定：沿用当前设计、内容和已批准产品画面，另做可上传手机图片，并更新 GitHub。桌面母版独立保留。示例见 [VD-744 手机交付](../products/VD-744/US/delivery/mobile.md)。

## 已观察的字段与规格

用户提供的 Seller Central 截图显示同一模块分别有必填字段 `Add desktop image [1464px x 600px min]` 和 `Add mobile image [600px x 450px min]`。截图未显示模块名，不能从这一截图证明全部模块、所有站点、所有权限或账号上传成功。手机入口应选手机文件。

官方 [Premium 模块定义](https://developer-docs.amazon/sp-api/docs/a-plus-premium-modules) 为 Full Background Image / Full Background Text 明确列出桌面最低 1464×600、手机最低 600×450；其他模块逐项核实，不把 600×450 当作所有 A+ 图片的统一尺寸。官方 [A+ guide](https://sellercentral.amazon.com/help/hub/reference/external/GLG4RQK2Y2RJADU4?locale=en-En) 列出 RGB、单张小于 2 MB、最低 72 dpi、静态 JPG/PNG/BMP。官方 [设计建议](https://sell.amazon.com/blog/a-plus-content-design-guide) 提醒减少嵌入图片的小字。资料核查日期 2026-10-29；实际字段提示有差异时以对应模块实测为准。

## 复用与制作

1. 读取当前远端版本、产品 project、交付 manifest、批准记录。文件名中的历史主题不代替当前图片内容。
2. 延续该产品当前标题、型号、事实、限定、色板、产品和摄影；4:3 通过重排适配，不拉伸产品，不将宽图硬裁掉一半，也不把整张宽图缩成一条后填大块空白。
3. 以原始硬件、原标识及已批准场景像素为最终冻结图层，文字确定性排版。图像模型可以探索布局，但不能把重画硬件、品牌字形或缺漏文字的候选直接当最终输出。
4. 默认在支持上述手机字段的模块导出 1200×900 sRGB、不透明 PNG，72 dpi、每张小于 2,000,000 bytes。1200×900 是本项目的制作选择，600×450 是已观察的最低值；二者不要混写成官方统一强制尺寸。
5. 逐张查看最终文件、约 400px 宽与 200px 缩略图；检查完整文案、选项/上限口径、脚注、裁切和产品比例。200px 检查只关注识别和主信息，不宣称脚注在极小缩略图仍全部可读。
6. 输出桌面/手机对应清单、实际宽高/字节/哈希、源哈希、可复现配方和视觉记录。手机成品放 `premium/assets/mobile/`，不覆盖 `shared/assets/`。生成候选与最终固定图层区分，不把候选另堆为正式图库。
7. 新印尺寸使用英寸；原始 mm 数据保留在证据中。已知源图拼写缺陷在手机派生稿中按原意修正并记录，不倒改历史批准证据。
8. GitHub 交付、用户风格判断、后台图片接收、整页手机预览和 Amazon 发布分别记录；九张素材不代表九个后台模块。图像上传成功也不等于 A+ 审核通过。

## 本例重建

`products/VD-744/US/review/build-mobile.cjs` 只依赖仓库内的产品/场景/品牌源图、Node.js、`sharp`、`@napi-rs/canvas` 和本机合法可用 Arial 字体。设置 `APLUS_FONT_DIR` 可指定字体目录；脚本找不到字体则失败，不偷偷替换字体。先在独立 checkout 重建，第二个参数指定短期 QA 目录，核对输出后再提交。

无文字母版/可编辑源不存在时如实记录，不能声称有原先未生成的分层文件。该案例的最终分层由配方、原始输入和文字几何重建，不声称恢复历史生成图的原始图层。
