# A+ workflow changes

## 2026-10-29 · Drive output cutover

All product outputs now use the exact product's existing Google Drive role folders with APLUS/marketplace children. This includes desktop/mobile images, copy, product Markdown, recipes, source layers, prompts, QA and receipts. Reuse current IDs and preserve prior coherent versions. Existing GitHub product files remain historical and are no longer updated.

Reusable workflow source remains in GitHub. Every Markdown and every workflow version, including executable/template/asset dependencies, receives an expanded immutable Drive backup with a stable CURRENT pointer. Raw download SHA256 and actual parent-chain verification are required before reporting delivery or clearing temporary caches. Drive-restored inputs can be used to reproduce the mobile files.

## 2026-10-29 · Independent Mobile A+ design

Introduced MOBILE_APLUS_WHITE_BLUE_V1, 1200×900 mobile composition,42px internal minimum embedded font, native Body/Alt, applicable AI-person metadata, original reusable brand masters and a portable renderer. Product facts, styles and publication states remain separately scoped.

## 2026-10-30
Hard integer-multiple image policy, default 2× observed minimum: desktop 2928×1200 and mobile 1200×900. Enforced in mobile generation/validation and Drive planning/readback; other modules require their own observed minima. Existing product outputs stay Drive-only.
