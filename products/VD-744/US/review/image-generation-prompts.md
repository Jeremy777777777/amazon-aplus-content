# VD-744 · 图片生成提示词记录

工具：内置 imagegen；日期：2026-10-16。每次调用生成一张，未使用 CLI/API fallback。以准确原图和原始 Dell Logo 为参考，结果仍为 AI 生成图片，需要最终保真检查。

参照文件：shared/source/dell-qcm1250-angle.png、dell-qcm1250-front.png、dell-qcm1250-rear.png、dell-logo.png。除连接图使用 front/rear/logo 外，其余均使用 angle/logo。

## hero

以下为 2026-10-16 的初始生成记录；当前交付图已按下面的修改记录移除底部 MegaPC 文字。

```text
Create ONE finished premium Amazon A+ product banner, wide 3:1 landscape, ideally 1800x600 or 1536x512, no collage. Reference image 1 is the exact Dell Pro Micro QCM1250 black micro desktop; preserve its exact silhouette, proportions, front power button, headset jack, one USB-A above one USB-C, lower vertical grille, authentic Dell mark, side fasteners. Use its photographed angle without inventing another view. Reference image 2 is an authorized original Dell blue circle logo, place it small in upper-left white space with original shape. Product on right 45% of banner, large but fully contained, soft realistic contact shadow on cool white surface. Left 48% spacious clean editorial typography. Polished restrained business technology art direction: white, deep navy #10243A, blue #246DDB, subtle pale-blue architectural sweep, no noisy patterns. Exact text only, clear sans-serif: top small 'DELL PRO MICRO QCM1250'; main heading split across two lines 'Make Room for' / 'What Matters.'; supporting line 'Compact design. Focused workspace.'; bottom small 'Customized by MegaPC'. Do NOT print additional text on the computer. Do not add any numeric specifications, monitor, keyboard, mouse, cables, accessories, people, warranty, Windows or Intel logo. This is a real business micro desktop, not a gaming tower. Professional conversion-oriented hero, exquisite crisp finish and balanced whitespace.
```

### hero · 2026-10-27 局部修改记录

工具：内置 imagegen，单图编辑；输入为现有 `shared/assets/01-hero-v1.png`。保持原交付路径，旧图可从 Git 历史恢复。

```text
Use case: precise-object-edit. Edit target: the supplied finished 2172 x 724 wide Dell Pro Micro QCM1250 hero banner. Make exactly one small edit: remove the entire lower-left footer text 'Customized by MegaPC' and restore the clean white / very pale blue background underneath it seamlessly. Leave that lower-left footer area blank. Preserve the original canvas dimensions and 3:1 composition. Keep all remaining elements unchanged: the upper-left Dell blue circle logo, 'DELL PRO MICRO QCM1250', the two-line heading 'Make Room for' / 'What Matters.', 'Compact design. Focused workspace.', the exact computer appearance, ports, grille, logos, position and scale, lighting, shadows, blue background sweep, colors, spacing and typography. Do not replace the removed phrase with any text. Do not redesign, reframe, crop, move or add anything. Only remove the specified footer phrase.
```

## features

```text
Create ONE finished Amazon A+ banner, very wide 3:1 landscape, preferably 2172x724, same white/navy/blue premium business design as a Dell micro desktop campaign. Use reference 1 as exact physical QCM1250 black computer, do not change its front ports, grille, mark or proportions; reference2 is exact Dell logo. Clean white header with small original Dell logo upper right and large navy headline exactly 'The Essentials for Your Workday.' Under header, three spacious equal editorial feature zones, refined blue icon accents and pale-blue backgrounds. FIRST zone: accurate photographed micro desktop silhouette and exact text 'Intel Core Ultra 7 265T' then 'Everyday office applications'. SECOND zone: restrained simple desk-footprint line icon, text 'Micro Desktop Design' then 'A compact fit for your workspace'. THIRD zone: simple four-pane neutral blue operating-system icon (not a drawn retail package), text 'Windows 11 Pro' then 'Seller-delivered operating system'. Make all text large legible and exact, no invented numeric claims, no RAM or SSD capacity, no benchmarks, no Intel logo recreation, no warranty or accessories. Polished restrained information design, generous whitespace, aligned baselines, navy #10243A and blue #246DDB, no noisy collage.
```

## business

```text
Create ONE photorealistic Amazon A+ commercial banner, wide 3:1 landscape, ideally 2172x724. Reference1 is exact Dell Pro Micro QCM1250 black micro computer, photographed angle: preserve its silhouette, correct power button/headset/USB-A/USB-C geometry, vents, Dell factory mark and side details. Reference2 is original Dell blue logo; small clean accurate logo upper left. Put the exact computer standing naturally on a refined pale wood desk in the right half, realistic micro desktop scale, complete product visible. Background: modern quiet corporate office architecture, soft daylight, glass partitions and distant blurred furniture, cool white/navy accents. Absolutely NO monitors, keyboard, mouse, cables, headphones, lamps, accessories or people anywhere. Left 40 percent is clean light negative space containing only exact navy large heading 'Business Workspace' and smaller line 'A compact desktop for everyday office work.' Professional product advertising photography, restrained premium technology aesthetic, no neon gaming lights, no numeric specifications, no extra text on device, no watermark. Keep typography readable and computer the clear sole product focal point.
```

## home

```text
Create ONE finished photorealistic Amazon A+ product banner, wide 3:1, ideally 2172x724. Exact product is reference1: Dell Pro Micro QCM1250 black micro desktop, retain photographed view, original front port arrangement, authentic lower Dell grille mark, realistic small micro form factor and all body proportions. Original Dell circle logo reference2 placed small upper-left. Product on right side standing on light oak desk. Environment: sophisticated home-office furniture, warm daylight, pale wall, very subtle distant bookshelves or chair blurred in background, navy textile accents. NO monitors, keyboards, mice, lamps, cables, headphones, other devices, people or included accessories. Left 40% clean bright airy space. Exact large navy heading 'Home Office'; exact smaller line 'A restrained fit for your working day.' Use crisp large readable sans-serif typography, elegant editorial business tech style aligned to white/navy #10243A/blue #246DDB. One product, no montage, no extra specifications or product text or performance promises.
```

## config

```text
Create ONE finished premium Amazon A+ product-selection banner, wide 3:1 landscape ideally 2172x724. Reference1 is exact Dell Pro Micro QCM1250 computer: keep original realistic black chassis and front ports and Dell mark; reference2 original Dell blue logo, place small upper-right. White/navy/blue coherent restrained business design, pale blue section backgrounds, ample whitespace. Left 32% shows accurate photographed computer, not internal exploded structure. Right 60% structured clean two-topic design. Exact headline 'Choose Your Configuration with Confidence.' Under it two elegant side-by-side simple symbolic cards: first title 'RAM Options', short line 'For your everyday applications'; second title 'SSD Options', short line 'For your files and storage needs'. Symbols may be generic memory/storage outline icons, not photographs of purported installed components. Bottom exact line 'Confirm your selected configuration before ordering.' Keep all text large and readable, no specific RAM/SSD capacities, no prices, no unsupported upgrade matrix, no accessories, no warranty, no new logos, no marketing writing printed on device. Hierarchy clear, precise aligned typesetting, polished and inviting.
```

## connections

```text
Create ONE finished Amazon A+ hardware-connections banner, wide 3:1 ideally 2172x724. Reference1 exact Dell QCM1250 FRONT view, reference2 exact REAR view, reference3 original Dell blue logo. Use the ORIGINAL photographed front and rear product views faithfully as reference without redesigning ANY port, vent, screw or hole. Clean white/navy/pale blue business layout. Large navy headline 'Connections You Can See.' Small original Dell blue logo upper right. Front view on left third, rear view in center third, consistent equal physical scale, complete chassis fits without crop. Labels below product pictures 'Front' and 'Rear'. Right third contains clean large exact text organized in five rows: 'USB-A + USB-C' / 'HDMI + DisplayPort' / 'Ethernet' / 'Wi-Fi + Bluetooth' / 'Everyday desk workflows'. NO leader lines from text to ports, NO quantities, no speeds, no wireless versions, no promises of multiple displays. The rear MUST retain original four USB-A ports, ONE Ethernet RJ45 top right, HDMI lower right, DisplayPort immediately below HDMI, DC power near bottom right, upper optional blank panel CLOSED with no invented connector. Front must retain one USB-A and one USB-C. Do not add accessories, cables, spec text on chassis, software badges or other logos. Keep photographic geometry and clear generous text spacing; calm pale-blue panel behind text. This is truthful visual overview, not an engineering schematic.
```

