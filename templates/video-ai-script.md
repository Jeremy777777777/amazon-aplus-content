# 产品视频 AI 脚本模板

这是可交给其他视频 AI 的制作输入，不是已生成的视频。所有 `{字段}` 必须在交付前替换或明确标记缺失；未知事实不能编造。

## 制作简报

- SKU / ASIN / 适用变体：
- Listing / ERP 产品事实文件：
- 目标受众与一个主要传播目的：
- 主要卖点与事实引用（最多三个）：
- 站点 / 旁白语言 / 字幕语言：
- 时长 / 画幅 / 导出要求：
- 视频 AI 与已核实能力 / 核实日期：
- 旁白：有 / 无；当前交付文字稿，不含配音音频。
- 风格来源：已确认 PCOnline / IST 链接及采用原则；未确认则注明。
- 画面风格：品牌色、场景、背景、光线、构图、节奏。

## 产品外观锁定表

| 必须保持 | 已确认外观或参数 | 对应真实参考图 | 不能展示或改变 |
|---|---|---|---|
| 外壳与轮廓 | 待填写 | 待填写 | 不换机型、不改变比例 |
| 颜色、材质、Logo | 待填写 | 待填写 | 不增加其他品牌 |
| 接口、风扇、内部件 | 仅展示已确认内容 | 待填写 | 不凭空补齐不可见结构 |
| 配件与显示屏 | 明确包含与否 | 待填写 | 不暗示未包含配件属于套装 |

## 逐镜头时间轴

| ID | 入点–出点 / 秒数 | 目的与事实依据 | 画面和主体动作 | 运镜 / 构图 | 字幕 | 旁白 | 声音 / 转场 | 参考图 |
|---|---|---|---|---|---|---|---|---|
| S01 | 00:00–00:04 / 4s | 产品识别 | 待填写 | 缓慢推近或静态 | 待填写 | 待填写或无 | 待填写 | 待填写 |
| S02 | 00:04–00:09 / 5s | 卖点一 | 待填写 | 待填写 | 待填写 | 待填写或无 | 待填写 | 待填写 |
| S03 | 00:09–00:14 / 5s | 卖点二 | 待填写 | 待填写 | 待填写 | 待填写或无 | 待填写 | 待填写 |
| S04 | 00:14–00:20 / 6s | 使用场景 | 待填写 | 待填写 | 待填写 | 待填写或无 | 待填写 | 待填写 |
| S05 | 00:20–00:26 / 6s | 解答疑虑 | 待填写 | 待填写 | 待填写 | 待填写或无 | 待填写 | 待填写 |
| S06 | 00:26–00:30 / 4s | 品牌收尾 | 稳定产品画面 | 留后期文字区域 | 待填写 | 待填写或无 | 待填写 | 待填写 |

这是 30 秒占位骨架，按实际时长与工具能力改写；每段生成时长、裁切后时长与总时长都需记录。

## 全局提示词（英文，占位字段替换后使用）

```text
Create a photorealistic product-commercial shot of {exact product}, using the supplied authorized product images as the visual source of truth.
Preserve the exact visible silhouette, proportions, color, materials, port layout, fan arrangement and product details shown in {reference image IDs}. Do not infer hidden surfaces or internal components.
Visual direction: {brand palette}, {lighting}, {background}, {composition}, {mood}.
Maintain the same product identity and visual treatment across all shots.
Generate clean footage without generated text, specification numbers, logos, watermarks or captions. Required brand assets and text will be added in editing.
Do not show accessories that are not included, unless the approved scene clearly treats them as separate illustrative props.
```

## 每个镜头独立可复制的提示词

每段交付提示词需包含产品锁定条件与必要全局风格，不能只写“同上”。不支持负面提示词的工具将禁止项写进主体提示词。

### S01（为 S02–S06 复制并按镜头改写）

- 对应事实与用途：{事实表行 / 传播目的}
- 参考输入：{真实产品参考图路径、需上传顺序、可选首帧 / 尾帧}
- 关键帧：{已有文件 / 待生成；构图与产品外观要求}
- 目标画幅 / 生成时长 / 最终截取区间：{待填写}
- 可用的工具设置：{仅写已核实支持的设置；其余为制作目标}

```text
PRODUCT REFERENCE: {exact identity and visible details; image IDs}
SHOT PURPOSE: {one verified benefit, conveyed visually without invented claims}
SCENE: {setting, props and product position}
ACTION: {one simple product or environmental action}
CAMERA: {one restrained movement; start composition to end composition}
LIGHTING AND STYLE: {specific shared visual direction}
CONTINUITY: {product appearance and details that must remain identical}
TEXT-SAFE SPACE: {area reserved for later captions}
DURATION AND FRAMING TARGET: {seconds and aspect ratio}
CONSTRAINTS: no product morphing, no invented ports or components, no extra accessories presented as included, no generated text or performance numbers, no competitor branding.
```

- 禁止项：外观变形、结构闪烁、零件增减、错误接口、虚构性能、竞品标识、乱码字幕。
- 镜头失败时的修改方案：{缩小运镜 / 换参考 / 改真实静态产品图剪辑}
- 交付前确认：占位字段已替换；提示词不包含 ERP 凭据、敏感内部字段或未证实卖点。

## 旁白与字幕

- 旁白稿单独保存 `voiceover.txt`，逐镜头检查实际朗读时长；超时先精简文案。
- 字幕保存 `subtitles.srt`；格式示例 `00:00:00,000 --> 00:00:04,000`。正式文件只放实际字幕，不保留示例或占位文字。
- 字幕围绕一个卖点写短句，以静音观看也能理解为目标。
- 字幕、参数、Logo 在后期添加；重要信息按最终画幅预览检查安全区域。

## 剪辑与外部生成交接

1. 将指定真实参考图与单镜头提示词交给视频 AI，分镜头生成。
2. 按工具实际时长能力生成、裁切，保留每段生成文件与最终选用版本。
3. 先核对外观、细节与运动连续性，再按时间轴拼接。
4. 添加核对过的字幕、品牌资产、配音（如有）和有使用权限的音乐。
5. 按最终用途的当前要求导出，检查画幅、分辨率、格式、时长、声音与文件大小。
6. 视频 AI 成片可返回本项目进行验收；不自动视为可上传版本。

## 验收记录

| 镜头 / 文件版本 | 外观正确 | 事实正确 | 动作连续 | 字幕与旁白匹配 | 结论 / 重试指令 |
|---|---|---|---|---|---|
| 待填写 | 待检查 | 待检查 | 待检查 | 待检查 | 未生成 |

最终状态：脚本初稿 / 可交给外部工具 / 已生成待剪辑 / 成片待验收 / 已验收。
