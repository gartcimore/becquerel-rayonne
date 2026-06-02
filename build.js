#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const content = JSON.parse(fs.readFileSync(path.join(__dirname, 'content.json'), 'utf-8'));

function render(template, data) {
  return template.replace(/\{\{(\w+\.\w+)\}\}/g, (match, key) => {
    const [section, field] = key.split('.');
    return data[section]?.[field] ?? match;
  });
}

const themes = ['modern', 'minimal'];

for (const theme of themes) {
  const templatePath = path.join(__dirname, theme, 'template.html');
  const outputPath = path.join(__dirname, theme, 'index.html');

  const template = fs.readFileSync(templatePath, 'utf-8');
  const html = render(template, content);
  fs.writeFileSync(outputPath, html, 'utf-8');

  console.log(`✓ ${theme}/index.html generated`);
}
