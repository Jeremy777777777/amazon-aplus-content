# Mobile A+ 场景/修整提示词

当前包可从已有原图/批准场景和配方直接重建，不需要每次重新调用图像模型。只有新场景/实际缺陷需要模型时使用以下结构；最终文字和原始品牌标识在模型之后固定合成。读取适用的 imagegen 技能。

## 新手机场景

Use case: photorealistic-natural / compositing.
Asset type: mobile Amazon A+ artwork layer, 4:3 composition.
Input roles: exact product original = hardware identity; approved design = palette/scene/lighting reference; additional layout example = arrangement only, never a source of product facts.
Primary request: create the identified product scene for [ONE VERIFIED BUYER QUESTION], retaining [APPROVED SCENE, ANGLE, OBJECT SCALE AND VISUAL DENSITY]. Reserve [MEASURED TEXT AREA] for later exact typography.
Constraints: preserve native chassis/ports/controls/vent order/proportions; show only evidenced angles; no new software entitlement, accessories, benchmark, port count or model claims. Do not draw text, logos, product legends or fabricated badges. Keep naturally grounded objects, perspective and contact shadows. Use no real private information in screens.
Output: actual artwork layer only. Inspect it; freeze correct native product/mark layers afterward and record all source/output hashes. If fidelity fails, reuse the exact original/approved pixels instead of accepting an approximate product.

## 极小缺陷修整

Use case: precise-object-edit.
Edit target: [EXACT CURRENT APPROVED FILE].
Change only: [BOUNDED DEFECT REGION AND SPECIFIC CORRECTION].
Keep unchanged: current product geometry, ports, pose, hand/fingers if present, shadow, entire scene, crop and approved text/design. No new words or claims.
Final assembly: if the tool changes unrelated pixels, take only the inspected bounded repair patch and compose it over the frozen approved scene; document native coordinates, feathering if any and hashes. Do not claim the full regenerated candidate is identical outside the edit.

## 完成后

适用手部/人物场景记录AI来源并嵌入所需标签；真实人物仅被AI编辑与全AI人物区分。最终不让模型重画Dell/Windows/Intel等熟悉标识，不沿用错误微小硬件字样。保存真实调用提示词，不把本模板冒充某次历史调用原文。
