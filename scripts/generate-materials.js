const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// 确保目录存在
const outputDir = path.join(__dirname, '../public/materials');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 生成金属材质
const metalCanvas = createCanvas(48, 48);
const metalCtx = metalCanvas.getContext('2d');
const metalGradient = metalCtx.createLinearGradient(0, 0, 48, 48);
metalGradient.addColorStop(0, '#e0e0e0');
metalGradient.addColorStop(1, '#a0a0a0');
metalCtx.fillStyle = metalGradient;
metalCtx.fillRect(0, 0, 48, 48);
metalCtx.strokeStyle = '#808080';
metalCtx.strokeRect(0, 0, 48, 48);
fs.writeFileSync(path.join(outputDir, 'metal.png'), metalCanvas.toBuffer('image/png'));

// 生成塑料材质
const plasticCanvas = createCanvas(48, 48);
const plasticCtx = plasticCanvas.getContext('2d');
plasticCtx.fillStyle = '#f0f0f0';
plasticCtx.fillRect(0, 0, 48, 48);
plasticCtx.strokeStyle = '#d0d0d0';
plasticCtx.strokeRect(0, 0, 48, 48);
fs.writeFileSync(path.join(outputDir, 'plastic.png'), plasticCanvas.toBuffer('image/png'));

// 生成玻璃材质
const glassCanvas = createCanvas(48, 48);
const glassCtx = glassCanvas.getContext('2d');
glassCtx.fillStyle = 'rgba(200, 200, 255, 0.5)';
glassCtx.fillRect(0, 0, 48, 48);
glassCtx.strokeStyle = 'rgba(150, 150, 200, 0.8)';
glassCtx.strokeRect(0, 0, 48, 48);
fs.writeFileSync(path.join(outputDir, 'glass.png'), glassCanvas.toBuffer('image/png'));

// 生成木材材质
const woodCanvas = createCanvas(48, 48);
const woodCtx = woodCanvas.getContext('2d');
woodCtx.fillStyle = '#8B4513';
woodCtx.fillRect(0, 0, 48, 48);
for(let i = 0; i < 48; i += 4) {
  woodCtx.strokeStyle = '#A0522D';
  woodCtx.beginPath();
  woodCtx.moveTo(0, i);
  woodCtx.lineTo(48, i);
  woodCtx.stroke();
}
fs.writeFileSync(path.join(outputDir, 'wood.png'), woodCanvas.toBuffer('image/png'));

// 生成皮革材质
const leatherCanvas = createCanvas(48, 48);
const leatherCtx = leatherCanvas.getContext('2d');
leatherCtx.fillStyle = '#8B4513';
leatherCtx.fillRect(0, 0, 48, 48);
for(let i = 0; i < 48; i += 6) {
  leatherCtx.strokeStyle = '#A0522D';
  leatherCtx.beginPath();
  leatherCtx.moveTo(0, i);
  leatherCtx.lineTo(48, i);
  leatherCtx.stroke();
}
fs.writeFileSync(path.join(outputDir, 'leather.png'), leatherCanvas.toBuffer('image/png'));

// 生成布料材质
const fabricCanvas = createCanvas(48, 48);
const fabricCtx = fabricCanvas.getContext('2d');
fabricCtx.fillStyle = '#f0f0f0';
fabricCtx.fillRect(0, 0, 48, 48);
for(let i = 0; i < 48; i += 4) {
  fabricCtx.strokeStyle = '#e0e0e0';
  fabricCtx.beginPath();
  fabricCtx.moveTo(0, i);
  fabricCtx.lineTo(48, i);
  fabricCtx.stroke();
}
fs.writeFileSync(path.join(outputDir, 'fabric.png'), fabricCanvas.toBuffer('image/png'));

console.log('材质图片已生成完成！'); 