(function() {
  $(function() {
    $('.site-header .content, .post-header .content').addClass('animated fadeInDown');
    $(window).scroll(function() {
      if ($(this).scrollTop() > 400) {
        return $('.top').fadeIn(200);
      } else {
        return $('.top').fadeOut(200);
      }
    });
    return $(document).on('click', '.smooth-scroll', function(e) {
      var $target, target;
      e.preventDefault();
      target = this.hash;
      $target = $(target);
      if (target === '') {
        target = '';
        $target = $('body');
      }
      return $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function() {
        return window.location.hash = target;
      });
    });
  });

}).call(this);
