/**
 * 画像最適化スクリプト
 * 実行: node scripts/optimize-images.mjs
 *
 * public/images/ の画像を WebP 変換・リサイズして同じディレクトリに保存します。
 * 元のJPEG/PNGは残すので、<picture> タグで WebP 優先表示が可能です。
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = join(__dirname, '../public/images');

const CONFIGS = {
  // Hero背景: 大きめに保持（高解像度ディスプレイ対応）
  'main001': { width: 1920, quality: 82 },
  // コレクション・ストーリー画像
  'tougei001': { width: 1200, quality: 85 },
  'tougei002': { width: 1200, quality: 85 },
  '0001':      { width: 1400, quality: 83 },
  '0002':      { width: 1400, quality: 80 }, // 2.4MB → 目標200KB以下
  '0003':      { width: 1200, quality: 85 },
  '0004':      { width: 1200, quality: 85 },
};

const DEFAULT = { width: 1200, quality: 82 };

async function optimizeImages() {
  const files = await readdir(INPUT_DIR);
  const images = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`\n🖼  Optimizing ${images.length} images...\n`);

  const results = await Promise.all(images.map(async (file) => {
    const name = basename(file, extname(file));
    const input = join(INPUT_DIR, file);
    const output = join(INPUT_DIR, `${name}.webp`);
    const config = CONFIGS[name] ?? DEFAULT;

    const before = (await stat(input)).size;

    await sharp(input)
      .resize({ width: config.width, withoutEnlargement: true })
      .webp({ quality: config.quality, effort: 6 })
      .toFile(output);

    const after = (await stat(output)).size;
    const saving = (((before - after) / before) * 100).toFixed(1);

    console.log(`  ✓ ${file} → ${name}.webp  (${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB, -${saving}%)`);
    return { file, before, after };
  }));

  const totalBefore = results.reduce((s, r) => s + r.before, 0);
  const totalAfter  = results.reduce((s, r) => s + r.after, 0);
  const totalSaving = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);

  console.log(`\n✅ Done! Total: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB (-${totalSaving}%)\n`);
}

optimizeImages().catch(console.error);
