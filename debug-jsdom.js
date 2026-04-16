const { JSDOM } = require('jsdom');
const fs = require('fs');
const html = fs.readFileSync('romantic-surprise.html', 'utf-8');
const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
const window = dom.window;
const document = window.document;
window.addEventListener('load', () => {
  const button = document.querySelector('[data-next="1"]');
  console.log('button', !!button);
  if (!button) return;
  button.click();
  const active = document.querySelector('.screen.active');
  console.log('active after click', active ? active.id : 'none');
  const screen2 = document.getElementById('screen-2');
  if (screen2) {
    const style = window.getComputedStyle(screen2);
    console.log('screen2 display', style.display);
    console.log('screen2 opacity', style.opacity);
  }
  const steps = document.querySelectorAll('.video-step');
  const frames = document.querySelectorAll('.video-frame');
  console.log('videoSteps', steps.length);
  console.log('videoFrames', frames.length);
});
