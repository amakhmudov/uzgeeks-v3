import fs from 'fs';

const data = JSON.parse(fs.readFileSync('figma-design.json', 'utf-8'));

const colors = new Set();
const fonts = new Map();
const components = [];

function extractInfo(node, depth = 0) {
  if (!node) return;

  // Extract colors from fills
  if (node.fills && Array.isArray(node.fills)) {
    node.fills.forEach(fill => {
      if (fill.type === 'SOLID' && fill.color) {
        const { r, g, b } = fill.color;
        const hex = `#${Math.round(r * 255).toString(16).padStart(2, '0')}${Math.round(g * 255).toString(16).padStart(2, '0')}${Math.round(b * 255).toString(16).padStart(2, '0')}`;
        colors.add(hex);
      }
    });
  }

  // Extract colors from strokes
  if (node.strokes && Array.isArray(node.strokes)) {
    node.strokes.forEach(stroke => {
      if (stroke.type === 'SOLID' && stroke.color) {
        const { r, g, b } = stroke.color;
        const hex = `#${Math.round(r * 255).toString(16).padStart(2, '0')}${Math.round(g * 255).toString(16).padStart(2, '0')}${Math.round(b * 255).toString(16).padStart(2, '0')}`;
        colors.add(hex);
      }
    });
  }

  // Extract font info
  if (node.style && node.style.fontFamily) {
    const key = `${node.style.fontFamily}-${node.style.fontWeight}`;
    if (!fonts.has(key)) {
      fonts.set(key, {
        family: node.style.fontFamily,
        weight: node.style.fontWeight,
        sizes: new Set()
      });
    }
    if (node.style.fontSize) {
      fonts.get(key).sizes.add(node.style.fontSize);
    }
  }

  // Track component structure
  if (node.name && node.type) {
    components.push({
      name: node.name,
      type: node.type,
      depth,
      text: node.characters || null,
      bounds: node.absoluteBoundingBox || null
    });
  }

  // Recurse into children
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach(child => extractInfo(child, depth + 1));
  }
}

extractInfo(data.document);

console.log('=== COLORS ===');
Array.from(colors).sort().forEach(c => console.log(c));

console.log('\n=== FONTS ===');
fonts.forEach((info, key) => {
  console.log(`${info.family} - Weight: ${info.weight}`);
  console.log(`  Sizes: ${Array.from(info.sizes).sort((a, b) => a - b).join(', ')}px`);
});

console.log('\n=== COMPONENT STRUCTURE (First 50) ===');
components.slice(0, 50).forEach(c => {
  const indent = '  '.repeat(c.depth);
  const text = c.text ? ` - "${c.text.substring(0, 40)}${c.text.length > 40 ? '...' : ''}"` : '';
  console.log(`${indent}${c.type}: ${c.name}${text}`);
});
