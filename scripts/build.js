const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const isDev = process.argv.includes('--dev');

// Helper to run command with stdout/stderr piped
function runCmd(command, cwd = process.cwd()) {
  console.log(`Running: ${command} in ${cwd}`);
  try {
    execSync(command, { stdio: 'inherit', cwd });
  } catch (error) {
    console.error(`Command failed: ${command}`);
    process.exit(1);
  }
}

// Recursive directory copy helper
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Step 1: Process SVGs
console.log('--- Step 1: Processing SVG IDs ---');
runCmd('node scripts/process-svg.js');

// Step 2: Build Sub-project (Vite app)
console.log('\n--- Step 2: Building developer-playbook-ai-era ---');
const subProjectDir = path.resolve(__dirname, '../developer-playbook-ai-era');
runCmd('npm install --legacy-peer-deps', subProjectDir);
runCmd('npm run build', subProjectDir);

// Step 3: Copy build output to public/developer-playbook-ai-era
console.log('\n--- Step 3: Copying sub-project assets to public/developer-playbook-ai-era ---');
const srcDist = path.join(subProjectDir, 'dist');
const destPublic = path.resolve(__dirname, '../public/developer-playbook-ai-era');

if (fs.existsSync(destPublic)) {
  fs.rmSync(destPublic, { recursive: true, force: true });
}
copyDir(srcDist, destPublic);
console.log('✅ Sub-project build output successfully copied to public!');

// Step 4: Run Next.js (build or dev)
console.log('\n--- Step 4: Running Next.js ---');
if (isDev) {
  runCmd('next dev');
} else {
  runCmd('next build');
}
