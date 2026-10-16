# VD-744 · 通用视频 AI 制作包 v1

交付类型：脚本、分镜、可复制提示词、旁白文字、字幕与剪辑说明；不是视频或音频成品。时长目标 30 秒，16:9，英文买家文案，中文制作说明。工具未选定，不虚构 seed、首尾帧或负面提示词 API 参数。

## 全局制作方式

1. 每段镜头单独生成，按下方时间轴裁切拼接；工具生成时长不足时拆镜，不要求一次生成完整片。
2. 优先上传 `../shared/source/dell-qcm1250-angle.png` 等真实原图作为产品参考。A+ 场景图只参考灯光与背景，不把已经含文字的 banner 动画化为视频。
3. 只生成无字幕底片。Dell Logo、CPU 型号、字幕与数值在剪辑时添加；原始 Logo 为 `../shared/source/dell-logo.png`。
4. 不添加键盘、显示器、鼠标、线缆、挂架或未确认配件。家具背景可以出现；机身比例与接口必须保持真实。
5. 每段只做一个克制运镜。原图未显示的角度不做旋转展示；后背镜头使用准确背面图。
6. 外部生成之后逐镜检查外观与连续性；有端口、Logo、比例或结构变化就重试或改用真实照片剪辑，不视为可上传成片。

## 时间轴与字幕

| ID | 时间 | 画面与镜头 | 字幕 | 旁白 |
|---|---|---|---|---|
| S01 | 00–04s | 准确主机三分之四视角，白蓝背景，轻微推近 | Make Room for What Matters. | A compact desktop for your working day. |
| S02 | 04–09s | 同角度稳定特写，CPU 字幕后期淡入 | Intel Core Ultra 7 265T | Built around Intel Core Ultra 7 processing. |
| S03 | 09–14s | 主机在现代企业办公桌上，缓慢侧移 | Business Workspace | Designed for everyday office applications. |
| S04 | 14–19s | 同一产品在居家办公家具环境，轻微推近 | Home Office | A restrained fit for your home workspace. |
| S05 | 19–25s | 标准前后视图简单切换，无产品旋转变形 | Everyday Connections / RAM & SSD Options | Choose the available configuration for your needs. |
| S06 | 25–30s | 主机静态收尾，Dell Logo 与销售身份后期添加 | Dell Pro Micro QCM1250 / Customized by MegaPC | Dell Pro Micro QCM1250, customized by MegaPC. |

## 单镜头提示词（复制英文框到视频 AI）

### S01 · 4 秒产品开场

参考图：`dell-qcm1250-angle.png`。留白在左，产品在右。品牌与文字全部后期添加。

```text
Create a four-second photorealistic commercial shot of the exact black Dell Pro Micro QCM1250 shown in the supplied product photograph. Preserve its photographed three-quarter view, silhouette, proportions, front power button, headset jack, USB-A above USB-C, vertical grille and existing factory mark. The computer is the only product on a cool white surface with subtle pale-blue architectural light. Keep the full computer visible on the right and clean negative space on the left. Use one very slow push-in with no object rotation. Keep the side panel free from marketing print. No generated text, added logos, specification numbers, cables, peripherals or people. Output clean 16:9 footage. Never invent unseen hardware.
```

### S02 · 5 秒处理器主题

参考图：同一准确角度图。型号字幕来自事实表，不让模型生成芯片或 Logo。

```text
Create a five-second photorealistic close product shot using the supplied exact Dell Pro Micro QCM1250 photograph. Maintain the same black chassis, photographed angle, visible connectors, grille, finish and physical proportions. Use a stable camera and a restrained soft-light change across the exterior; do not open the case or reveal internal components. Use a clean white and deep-navy business setting with space on the left for a CPU title added later. No generated lettering, badges, benchmark charts, component diagrams, accessories or performance claims. Preserve the real factory mark; add no new mark. Output clean 16:9 footage without changing the product geometry.
```

### S03 · 5 秒企业场景

参考图：准确产品原图；可补 `03-business-v1.png` 作为场景风格参考。

```text
Create a five-second premium business-office product shot. Place the exact black Dell Pro Micro QCM1250 from the supplied product photograph on a pale wood desk in a softly lit modern office with distant glass partitions and blurred furniture. Preserve the exact product identity, scale, ports, grille, side details and existing factory mark. The micro computer must remain the only device in the scene. Use one minimal lateral camera movement, maintaining the source angle and keeping the complete computer visible. Leave quiet negative space on the left. No monitors, keyboards, mice, cables, lamps, people or generated text. Use cool daylight and restrained white, navy and blue accents. Output 16:9 footage with stable product geometry.
```

### S04 · 5 秒居家办公

参考图：准确产品原图；可补 `04-home-office-v1.png` 作为灯光和家具参考。

```text
Create a five-second photorealistic home-office product shot of the exact black Dell Pro Micro QCM1250 supplied in the reference photograph. Keep its chassis proportions, photographed angle, connector layout, vertical grille, material and existing factory mark unchanged. Place it naturally on a light oak desk, with soft warm daylight, a pale wall, distant blurred shelving and subtle navy upholstery. Only the computer is a product; do not add external electronic devices or accessories. Use one slow restrained push-in, leaving the left area clear for a caption in editing. No generated text, new logos, cables, keyboard, mouse, monitor or people. Output clean 16:9 footage and do not rotate to an unseen product angle.
```

### S05 · 6 秒连接与选购

参考图：`dell-qcm1250-front.png`、`dell-qcm1250-rear.png`。建议前后图各 3 秒剪辑；这是一段双镜剪辑，不要求工具自动 morph。

```text
Create a three-second photorealistic locked-off product-detail shot from the supplied exact front OR rear reference photograph of Dell Pro Micro QCM1250. Use only the angle supplied for this shot. Preserve every visible port, vent, screw, closed optional-panel area and physical proportion exactly. Place the complete unit against a clean cool-white background with a very subtle camera push-in and no rotation. No connector insertion, no moving components, no generated labels, arrows, text, logos, cables, peripheral devices or invented internal views. Output clean 16:9 footage with room beside the product for later captions. Render the front and rear as separate shots; never morph one into the other.
```

执行两次，分别指定 front 和 rear 原图，选各 3 秒。接口类型与 RAM/SSD 选择文字均后期添加，具体参数不固定容量。

### S06 · 5 秒品牌与身份收尾

参考图：准确产品角度图；原始 Dell Logo 仅用于后期。

```text
Create a five-second clean product end frame using the exact black Dell Pro Micro QCM1250 from the supplied photograph. Preserve the original photographed angle, front ports, vertical grille, existing factory mark, side details and realistic micro-desktop proportions. Place the full computer on the right against an elegant white-to-pale-blue studio background, with ample blank space on the left for the original brand asset and a sales-identity line to be added in editing. Keep the camera stable with a subtle settling light transition. No generated text, additional logos, physical marketing print, peripherals, accessories, prices or performance graphics. Output clean 16:9 footage. Do not imply that Dell produced or endorsed this seller video.
```

## 剪辑、声音与导出

- 旁白稿在 `voiceover.txt`；字幕在 `subtitles.srt`。二者是文字文件，不含配音音频。
- 自然专业的英文旁白；音乐使用有权使用的轻量商务背景音乐，旁白清晰优先。静音观看时仍应看懂字幕。
- 直接剪切或轻微淡入淡出；不要用机身 morph 转场或让商品旋转到不存在的角度。
- 正式配音后按实际朗读速度微调字幕时间和镜头，不为塞入文字而加速至难以理解。
- 16:9 为制作目标，最终编码、分辨率、时长、文件大小和适用视频位置按后台要求核实。当前没有导出成片或提交 Amazon。

## 外部生成验收

逐镜确认：外形、端口、品牌字形、接触阴影和比例稳定；无新增设备、产品变形、假性能数字或乱码字幕；旁白和字幕对应事实；总时长约 30 秒。失败时优先降低运镜、换精确参考，仍失败则使用真实照片进行剪辑。
