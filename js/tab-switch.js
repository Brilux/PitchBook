(function ($) {
  $(function () {
    $('ul.tabs-container').on('click', 'li:not(.features-tab.orange)', function () {
      $(this)
          .addClass('orange')
          .siblings()
          .removeClass('orange')
          .closest('div.features-content-container')
          .find('div.feature-container')
          .removeClass('active')
          .eq($(this).index())
          .addClass('active');
    });
  });
})(jQuery);
