# A+ output and version storage

2026-10-30 硬性生产规则：先读 [图片像素规则](image-dimensions.md)。网页/手机均为各自 minimum 宽高的同一个正整数倍，默认2倍；当前字段网页2928×1200、手机1200×900。生成、交付及远端回读必须验证实际像素；其他模块先核实minimum。此规则优先于历史任意创意母版尺寸。

Effective2026-10-29, the user changed all A+ outputs to the same Drive project used by create-custom-pc-listing. This supersedes GitHub product-output delivery directions in older documents, historical product copies and prompts.

## Current storage

- Exact product: verified `20_PRODUCTS/<internal-id>`; reuse existing product IDs and the five existing role folders.
- Copy, Basic/Premium/Mobile upload fields, planning and video scripts: `01_LISTING/APLUS/<marketplace>`.
- Individual desktop and mobile PNGs: `02_IMAGES/APLUS/<marketplace>/DESKTOP` and `MOBILE`. Keep actual review/format limitations; migration does not resize or newly approve images.
- Research and prior fact/evidence snapshots: `03_RESEARCH/FINAL/APLUS/<marketplace>`.
- Manifests, prompts, review records, delivery ledger and receipts: `04_QA/APLUS/<marketplace>`.
- Original hardware, patches and portable product recipes: `90_SOURCE/APLUS/<marketplace>`.

Pinned IDs and policy: [delivery-storage.json](../assets/delivery-storage.json). Verify actual parent chains using connected Drive tools, exhaust paginated searches, reuse exact current IDs and preserve prior coherent bytes before replacement. Only create a missing exact child after verified absence. Do not mix A+ copies with current Listing Draft workbooks.

## GitHub and all Markdown backups

GitHub maintains reusable rules, scripts, templates, design profiles and original reusable brand masters. Do not add new or modified product output files, product-specific recipes, raw evidence or delivery receipts to GitHub. Existing tracked product files remain an unchanged historical baseline; this migration does not delete or rewrite history. Ignore rules alone do not protect already tracked files: stage explicit workflow paths and inspect staged changes.

Back up **every reusable Markdown and every version change**, plus scripts/templates/profiles/brand dependencies, as individual expanded files under `10_WORKFLOWS/amazon-aplus-content/versions/<commit>/`. Include a source-path/hash inventory and a verified receipt. Keep a stable `CURRENT.json` that points to the latest verified immutable snapshot; retain older snapshots. No ZIP-only archive, environment binaries, fonts, credentials or signed download URLs. Product-specific Markdown belongs in that exact product's role folders and is included in its version/archive inventory.

## Run and delivery

Each request has one task ID and each attempt a unique run ID. Store the brief, inventory, receipts and readable English summary under existing `30_RUNS/YYYY/MM/<run-id>`; preserve replaced product versions under `90_ARCHIVE/APLUS/<internal-id>/<run-id>`. A+ connector work uses its own explicit inventory/readback contract; do not invent a Listing browser handoff or run unrelated Listing workbook generation just to archive A+ assets.

1. Read current Drive product ledger and source workflow revision; resolve/reuse all current file IDs. Unknown write outcome requires readback before retry.
2. Reconstruct original relative product paths in one temporary checkout from the Drive ledger. Do not use a stale GitHub product baseline as current input. Preserve relative original/mask/patch dependencies; no flattened, unrecoverable source bundle.
3. Produce and review only authorized scope. `node scripts/drive-delivery.cjs plan <product-root> <product-id> <marketplace> <run-id> <plan.json>` creates the complete explicit size/SHA256/MD5 and role/path inventory. A known-serial list may be supplied as the final argument when serials were used; it remains transient and is never included in the plan.
4. Preserve observed current bytes and coherent old manifest before replacement. Upload individual files with connected Drive tools, keeping original formats and current IDs. Product ledger maps original paths to actual IDs/parents and permits deterministic restoration.
5. Read metadata and raw original bytes back for every file. Compare name, MIME, parent, size and SHA256. If connector metadata omits checksums, fetch authenticated raw bytes without inline base64 and hash them. Do not call name/size-only checks byte verification. Save sanitized records only.
6. `node scripts/drive-delivery.cjs verify <plan.json> <readbacks.json> <folder-map.json> <receipt.json>` validates supplied byte/parent-chain records; it makes no remote calls and cannot authenticate fabricated inputs. Upload receipt and an English current index with observed Drive URLs, then separately verify their upload.
7. Push reusable workflow updates and verify the expanded matching Drive snapshot. Product delivery and workflow backup have independent completion statuses; do not report both done when only one succeeds.
8. Remove task-owned caches/readbacks after verified delivery. If any upload fails, retain the only undelivered bytes and report the cache and exact gap. Do not delete original user inputs or another task's files.

The ledger preserves prior file IDs and hashes across runs. Archive before overwriting. Metadata readback or a passed file check never substitutes for factual research, USER style judgment, final visual QA, module applicability or Amazon publication. No Seller Central save/apply/publish authorization is added.
