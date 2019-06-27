document.onkeydown = function() {
  if (event.keyCode === 9) {
    const firstTab = document.getElementById('firstTab');
    const secondTab = document.getElementById('secondTab');
    const thirdTab = document.getElementById('thirdTab');

    const firstFeatureTab = document.getElementById('firstFeatureTab');
    const secondFeatureTab = document.getElementById('secondFeatureTab');
    const thirdFeatureTab = document.getElementById('thirdFeatureTab');

    if (firstTab.className === 'features-tab-orange') {
      firstTab.className = 'features-tab';
      firstFeatureTab.className = 'feature-unactive-container';
      secondTab.className = 'features-tab-orange';
      secondFeatureTab.className = 'feature-active-container';
    } else if (secondTab.className === 'features-tab-orange') {
      secondTab.className = 'features-tab';
      secondFeatureTab.className = 'feature-unactive-container';
      thirdTab.className = 'features-tab-orange';
      thirdFeatureTab.className = 'feature-active-container';
    } else {
      thirdTab.className = 'features-tab';
      thirdFeatureTab.className = 'feature-unactive-container';
      firstTab.className = 'features-tab-orange';
      firstFeatureTab.className = 'feature-active-container';
    }
  }
};
