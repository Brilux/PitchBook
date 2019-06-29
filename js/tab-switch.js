const firstTab = document.getElementById('firstTab');
const secondTab = document.getElementById('secondTab');
const thirdTab = document.getElementById('thirdTab');

const firstFeatureTab = document.getElementById('firstFeatureTab');
const secondFeatureTab = document.getElementById('secondFeatureTab');
const thirdFeatureTab = document.getElementById('thirdFeatureTab');

function resetFirstTab() {
  firstTab.className = 'features-tab';
  firstFeatureTab.className = 'feature-unactive-container';
}

function resetSecondTab() {
  secondTab.className = 'features-tab';
  secondFeatureTab.className = 'feature-unactive-container';
}

function resetThirdTab() {
  thirdTab.className = 'features-tab';
  thirdFeatureTab.className = 'feature-unactive-container';
}

function switchFirstTab() {
  resetSecondTab();
  resetThirdTab();
  firstTab.className = 'features-tab-orange';
  firstFeatureTab.className = 'feature-active-container';
}

function switchSecondTab() {
  resetFirstTab();
  resetThirdTab();
  secondTab.className = 'features-tab-orange';
  secondFeatureTab.className = 'feature-active-container';
}

function switchThirdTab() {
  resetFirstTab();
  resetSecondTab();
  thirdTab.className = 'features-tab-orange';
  thirdFeatureTab.className = 'feature-active-container';
}
