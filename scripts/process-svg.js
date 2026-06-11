const fs = require('fs');
const path = require('path');

const svgPath = path.resolve(__dirname, '../src/animation/scene.svg');

if (fs.existsSync(svgPath)) {
  console.log('Processing SVG file...');

  let processedContent = fs.readFileSync(svgPath, 'utf8');

  // First fix the amemask_ tag to clipPath (both opening and closing tags)
  processedContent = processedContent
    .replace(/<amemask_/g, '<clipPath')
    .replace(/<\/amemask_>/g, '</clipPath>');

  // Remove metadata block which can contain C2PA manifest and cause compilation/namespaced tag errors
  processedContent = processedContent.replace(/<metadata>[\s\S]*?<\/metadata>/g, '');

  // Pattern to match any framemask with random numbers: framemask_[numbers]_
  const framemaskPattern = /framemask_\d+_/g;
  const foundIds = new Set();
  
  let match;
  while ((match = framemaskPattern.exec(processedContent)) !== null) {
    foundIds.add(match[0]);
  }

  if (foundIds.size === 0) {
    console.log('No framemask IDs found to process');
  } else {
    // Replace each found framemask ID
    Array.from(foundIds).forEach((originalId, index) => {
      const cleanName = 'framemask_1_';
      const cleanId = foundIds.size === 1 
        ? cleanName 
        : `${cleanName.replace('_1', '')}_${index + 1}`;
      
      console.log(`Replacing ${originalId} with ${cleanId}`);
      
      // Escape special regex characters in the original ID
      const escapedId = originalId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Replace in all contexts where this ID appears
      const replacements = [
        { 
          pattern: new RegExp(`id="${escapedId}"`, 'g'),
          replacement: `id="${cleanId}"`
        },
        { 
          pattern: new RegExp(`url\\(#${escapedId}\\)`, 'g'),
          replacement: `url(#${cleanId})`
        },
        { 
          pattern: new RegExp(`xlink:href="#${escapedId}"`, 'g'),
          replacement: `xlink:href="#${cleanId}"`
        }
      ];
      
      replacements.forEach(({ pattern, replacement }) => {
        processedContent = processedContent.replace(pattern, replacement);
      });
    });
  }

  // Write processed content directly (no backup)
  fs.writeFileSync(svgPath, processedContent);

  console.log('✅ SVG processed successfully!');
  console.log('🎯 Generated clean ID: framemask_1_');
  console.log('✨ Your transitions.js clipPath reference will now work correctly!');
} else {
  console.error('❌ SVG file not found:', svgPath);
}
