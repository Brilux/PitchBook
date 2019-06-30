const firstTab = document.getElementById('firstTab');
const secondTab = document.getElementById('secondTab');
const thirdTab = document.getElementById('thirdTab');

const firstFeatureTab = document.getElementById('firstFeatureTab');
const secondFeatureTab = document.getElementById('secondFeatureTab');
const thirdFeatureTab = document.getElementById('thirdFeatureTab');

let resetFirstTab = () => {
  firstTab.className = 'features-tab';
  firstFeatureTab.className = 'feature-unactive-container';
};

let resetSecondTab = () => {
  secondTab.className = 'features-tab';
  secondFeatureTab.className = 'feature-unactive-container';
};

let resetThirdTab = () => {
  thirdTab.className = 'features-tab';
  thirdFeatureTab.className = 'feature-unactive-container';
};

let switchFirstTab = () => {
  resetSecondTab();
  resetThirdTab();
  firstTab.className = 'features-tab-orange';
  firstFeatureTab.className = 'feature-active-container';
};

let switchSecondTab = ()  => {
  resetFirstTab();
  resetThirdTab();
  secondTab.className = 'features-tab-orange';
  secondFeatureTab.className = 'feature-active-container';
};

let switchThirdTab = () => {
  resetFirstTab();
  resetSecondTab();
  thirdTab.className = 'features-tab-orange';
  thirdFeatureTab.className = 'feature-active-container';
};
