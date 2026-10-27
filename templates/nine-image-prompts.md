# 九图 A+ 可复用英文提示词

这些是 **2026-10-27 新编的通用模板**，不是历史实际调用原文。使用前完成 [九图简报](nine-image-brief.md)，读取 [详细版式规范](../references/nine-image-business-pc.md)。每次组合“全局块＋该图专用块＋已核实的精确文案”，生成一张；不要一次要求拼成九宫格。

## 变量与参考输入

- `{{MODEL}}`、`{{OEM}}`、`{{CPU}}` 等来自本产品已核实事实，不能从 VD-744 默认复制。
- `{{EXACT_...}}` 表示已逐字定稿的英文，不让模型再自由改写；未知值删除整项并调整版式，不能印占位符。
- `{{PORTS_AND_PHYSICAL_DETAILS}}` 是准确原图的外观描述；USB 数量、顺序、旋转方向按该机型填写。
- `{{RAM_LABELS}}`／`{{SSD_LABELS}}` 是卖家确认的实际档位，不是硬件最大值；类别名称如 DDR5 也需证据。
- `{{DIMENSION_TEXT}}` 为核实尺寸及换算后的显示文字；没有证据不印数字。
- 输入按实际工具支持组织，明确每张参考的角色：原图管外观，获批图管风格，用户例图仅管摆位，选项截图仅管已确认档位；截图价格／界面不进入成品。不要把数字输入序号写死而给错图。

## 每张都加的全局块

```text
Create ONE independent finished A+ creative master banner for {{MODEL}}, wide approximately 3:1 landscape, target 2172 x 724 pixels. This is a creative master, not a promise of Amazon backend compliance. Use the exact identified product photographs as physical authority and the approved campaign reference as style authority only. Preserve {{PORTS_AND_PHYSICAL_DETAILS}}, the complete silhouette, proportions, real material and authentic OEM marks. Do not invent another model, unseen rear hardware, internal components or accessories.

Art direction: restrained professional business-PC photography and clear editorial information design. White background, deep navy #10243A, blue #246DDB emphasis, very pale blue supporting shapes, natural black product, soft coherent daylight and realistic contact shadows. Follow the current product's approved brand palette if different. Use a readable Arial/Helvetica-like sans serif, a strong short heading, generous whitespace and consistent alignment. Keep essential text and product away from edges, approximately 64 px horizontal and 32 px vertical safe margins at the target size. Use the supplied authorized OEM logo with correct proportions; do not fabricate badges or official endorsements. Do not automatically add a seller-customization footer.

Print only the approved exact copy specified for this image. No invented specs, prices, surcharges, reviews, warranty, performance percentages, FPS, software subscriptions, unsupported wireless versions, fake screen data or stock availability guarantees. Do not alter physical product markings into marketing text. No gaming RGB, neon fog, portals or busy collage. Prioritize physical accuracy, readable copy and this image's single buyer question. The output remains subject to visual and factual inspection.
```

## 01 · 产品主视觉

```text
Buyer question: what is this product and why consider it? Left approximately 48%: small authorized OEM logo, exact model line '{{MODEL}}', a concise two-line positioning headline '{{EXACT_HERO_HEADLINE}}', and one short supporting sentence '{{EXACT_HERO_SUPPORT}}'. Right approximately 45%: the exact complete product at its sourced three-quarter angle, dominant but inside the canvas, grounded on a clean pale surface. White and subtle pale-blue curved geometry create quiet depth without distracting from the product. Do not add monitors, keyboards, people, a complete spec table or extra footer copy. Do not add Customized by MegaPC unless specifically selected for this product.
```

## 02 · 前置接口实用操作

```text
Buyer question: is everyday access convenient? Left approximately 40%: exact heading '{{EXACT_ACCESS_HEADLINE}}', support '{{EXACT_ACCESS_SUPPORT}}', and no more than three confirmed short connector labels '{{EXACT_FRONT_LABELS}}'. Right approximately 55-60%: a natural close-up office photograph of the exact product on a light oak desk. An ordinary adult hand holds an unbranded compatible device near the correct visible front connector, aligned plausibly, without intersecting the chassis or hiding its layout. Show an approach, not an invented test or impossible insertion. Match the hand, connector and micro-PC scale. Natural daylight, real desk contact and one coherent perspective. Footer: '{{EXACT_PROP_EXCLUSION}}'. Do not repeat processor, OS or RAM/SSD overview cards. Do not claim speed, charging or included accessories.
```

## 03 · 处理器深入说明

```text
Buyer question: what specifically distinguishes the processor? Left approximately 58%: exact heading '{{EXACT_CPU_HEADLINE}}', exact processor '{{CPU}}', and up to three spacious fact blocks '{{EXACT_CPU_FACT_BLOCKS}}'. Use large blue values with dark labels, aligned cleanly with subtle separators. Print support '{{EXACT_CPU_USE_SUPPORT}}' and qualifier '{{EXACT_CPU_QUALIFIER}}'. Right approximately 35-38%: complete accurate product on a pale surface, natural source angle and shadow. An optional faint abstract grid can suggest organized tasks, never a physical installed chip. Every number must already be supported by this exact CPU's official documentation. Do not invent P/E cores for another architecture, imply all-core maximum Turbo, benchmarks or guaranteed workload performance. No repeated capacity cards or office room scene.
```

## 04 · 整机规格速览

```text
Buyer question: can I understand the whole specification quickly? Exact heading '{{EXACT_OVERVIEW_HEADLINE}}' in the upper header, with a small accurate product thumbnail, '{{MODEL}}' and authorized OEM logo. Below, a balanced two-row tile grid. First row: '{{EXACT_CPU_TILE}}', '{{EXACT_CONNECTION_TILE}}', and '{{EXACT_OS_TILE}}'; the OS is one tile rather than a dedicated full banner. Second row: '{{EXACT_RAM_OPTIONS_TILE}}', '{{EXACT_SSD_OPTIONS_TILE}}', '{{EXACT_WIFI_TILE}}', '{{EXACT_BLUETOOTH_TILE}}'. Include only verified applicable fields; if a field is unsupported, omit it and rebalance the grid instead of inventing a replacement fact. Pale-blue cards, simple consistent icons and concise bold labels. Capacity maximums explicitly say OPTIONS and refer only to seller-confirmed offered choices. Footer: '{{EXACT_CONFIGURATION_QUALIFIER}}'. Use a neutral system motif or authorized asset rather than copying third-party wallpaper. Do not copy the sample's CPU, port quantities or wireless generations.
```

## 05 · 真实连接证据

```text
Buyer question: what connections are available? Left approximately 48%: exact front and exact confirmed rear photographs, matched upright height and perspective, clearly labelled 'Front' and 'Rear'. Right approximately 47%: exact heading '{{EXACT_CONNECTIONS_HEADLINE}}' and concise verified list '{{EXACT_CONNECTION_LIST}}'. Real physical ports must match the source for this product; optional unverified rear modules remain closed or omitted. Use fine callouts only if their endpoints are unambiguous. Wireless support may appear as text but never as an invented physical socket. No guessed port quantities, throughput, monitor counts or power-delivery claims. Keep this an inventory/evidence image, distinct from image02's interaction scene.
```

## 06 · 实际配置选项表

```text
Buyer question: which RAM and SSD choices can I order? Left approximately 18-20%: complete exact product, grounded and secondary to the information. Right approximately 75%: model line, exact heading '{{EXACT_OPTIONS_HEADLINE}}', support '{{EXACT_OPTIONS_SUPPORT}}', then TWO independent horizontal option rows. Row one label '{{EXACT_RAM_CATEGORY}}', with equal prominent cells containing exactly '{{RAM_LABELS}}'. Row two label '{{EXACT_SSD_CATEGORY}}', with equal prominent cells containing exactly '{{SSD_LABELS}}'. Adapt cell count to actual confirmed options; do not invent four tiers. Use blue category emphasis for RAM and paler blue for storage, large dark capacity figures and light dividers. Rows are independent choice lists, not vertically paired preset bundles. Preserve exact supplied labels and units: do not silently turn 0.5TB into 512GB or add an option from an outdated title. Footer '{{EXACT_OPTIONS_QUALIFIER}}'. These are seller options, not all installed at once, a factory maximum, a single-drive-layout claim or guaranteed stock for every combination. No prices, surcharges, screenshot UI, buttons, reviews or invented module photographs.
```

## 07 · 普通办公设备大小参照

```text
Buyer question: how much room does this take on a normal desk? Left approximately 35-38%: exact heading '{{EXACT_SIZE_HEADLINE}}' and clearly grouped verified size text '{{DIMENSION_TEXT}}'. Right approximately 60%: ONE coherent natural office desk scene. Place the exact small desktop upright on the LEFT side of a normal office monitor, slightly forward enough to reveal its complete silhouette. Place an ordinary full-size keyboard centered in front of the monitor and a mouse on the right. All objects share one desk plane, natural daylight, realistic contact shadows and consistent perspective. Use normal office-device proportions; do not shrink the keyboard or inflate the monitor to fake compactness. Screen uses a neutral abstract background, not a paid-app promise. Same-brand representative office props where appropriate; their model, connection and pack-out are not asserted. Footer exactly '{{EXACT_SIZE_PROP_EXCLUSION}}', normally 'Monitor, keyboard and mouse shown for scale. Not included.' Use 'scale', never 'sale'. No cans, drinks, rulers, clutter, impossible floating placement, percentage-smaller claim or calibrated actual-unit photograph claim.
```

## 08 · 近距离紧凑形态

```text
Buyer question: what is the compact form like up close? Use this pose only for a product whose real size and form make it plausible. Left approximately 38-40%: exact heading '{{EXACT_FORM_HEADLINE}}' and short support '{{EXACT_FORM_SUPPORT}}', model line and small OEM logo. Right approximately 58-60%: one natural adult hand supports the exact micro desktop horizontally against a pale neutral-blue studio background. The product is rotated as a complete real object, not mirrored or redesigned. Preserve the exact front order, enclosure thickness, feet, grille and original markings; visible micro lettering must match sources rather than become pseudo-text. Keep fingers, support contact, skin, product scale and shadows believable. Do not repeat image07's desk-space slogan, add weight numbers, call it featherweight, or imply a strength, durability or carrying test. No accessories, faces or jewelry. For a larger chassis, replace the hand pose with a verified close-up detail and explicitly rewrite this image's buyer question; do not fake a miniature tower.
```

## 09 · 日常办公任务

```text
Buyer question: what everyday tasks is it for? Left approximately 36-38%: exact heading '{{EXACT_TASK_HEADLINE}}' and up to three concise verified task labels '{{EXACT_TASK_LABELS}}'. Right approximately 60%: a coherent daylight office scene with the exact complete product naturally beside a normal monitor, keyboard in front and mouse to the right. Show only natural working hands or forearms typing and using the mouse, without blocking the product. Screen shows generic illustrative documents, spreadsheet cells and browser shapes, no readable personal data, paid software logo or performance dashboard. Maintain normal device scale, coherent focus, light and desk contact. Footer '{{EXACT_WORKSPACE_EXCLUSION}}'. This is an active task scene, not image07's static dimension layout. No software-license promise, bundled Microsoft Office implication, speed guarantee or repeated dimension labels.
```

## 逐张修订块

```text
Edit only the supplied target image. Requested change: {{EXACT_CHANGE}}. Preserve {{PRESERVE_LIST}}, the approved product identity, canvas, composition and all unrelated copy. Use the exact original product reference where physical details need correction. Do not redesign or add facts. Return one revised candidate. The revised output must be inspected and approved as needed before replacing the stable delivery path.
```

记录实际调用全文、实际参考文件／角色、输出尺寸与 SHA-256。模板已填写不等于图像已正确；尤其要看 Logo、机身微字、手指、接口对位、0.5TB 和脚注。提示词历史缺失要标缺失，不能用这份新模板回填为旧原文。
