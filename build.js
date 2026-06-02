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

const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8');
const html = render(template, content);
fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf-8');

console.log('✓ index.html generated');
