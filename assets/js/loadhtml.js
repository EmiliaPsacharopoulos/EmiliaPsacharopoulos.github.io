function loadHTML(id, url) {
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.text();
    })
    .then(html => {
      const el = document.getElementById(id);
      if (!el) return;

      el.innerHTML = html;

      // Re-execute <script> tags
      el.querySelectorAll("script").forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
        oldScript.remove();
      });
    })
    .catch(err => console.error("loadHTML error:", url, err));
}

// Initialize main.js functionality after DOM elements are loaded
function initializeMainJS() {
  if (typeof jQuery !== 'undefined' && typeof breakpoints !== 'undefined') {
    // Re-run the main.js initialization
    (function($) {
      var	$window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $banner = $('#banner');

      // Breakpoints.
      breakpoints({
        wide:      [ '1281px',  '1680px' ],
        normal:    [ '981px',   '1280px' ],
        narrow:    [ '841px',   '980px'  ],
        narrower:  [ '737px',   '840px'  ],
        mobile:    [ null,      '736px'  ]
      });

      // Play initial animations on page load.
      $window.on('load', function() {
        window.setTimeout(function() {
          $body.removeClass('is-preload');
        }, 100);
      });

      // Scrolly.
      $('.scrolly').scrolly({
        speed: 1000,
        offset: function() { return $header.height() + 10; }
      });

      // Dropdowns.
      $('#nav > ul').dropotron({
        mode: 'fade',
        noOpenerFade: true,
        expandMode: (browser.mobile ? 'click' : 'hover')
      });

      // Nav Panel.
      // Button.
      $(
        '<div id="navButton">' +
          '<a href="#navPanel" class="toggle"></a>' +
        '</div>'
      )
        .appendTo($body);

      // Panel.
      $(
        '<div id="navPanel">' +
          '<nav>' +
            $('#nav').navList() +
          '</nav>' +
        '</div>'
      )
        .appendTo($body)
        .panel({
          delay: 500,
          hideOnClick: true,
          hideOnSwipe: true,
          resetScroll: true,
          resetForms: true,
          side: 'left',
          target: $body,
          visibleClass: 'navPanel-visible'
        });

      // Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
      if (browser.os == 'wp' && browser.osVersion < 10)
        $('#navButton, #navPanel, #page-wrapper')
          .css('transition', 'none');

      // Header.
      if (!browser.mobile
      &&	$header.hasClass('alt')
      &&	$banner.length > 0) {

        $window.on('load', function() {

          $banner.scrollex({
            bottom:		$header.outerHeight(),
            terminate:	function() { $header.removeClass('alt'); },
            enter:		function() { $header.addClass('alt reveal'); },
            leave:		function() { $header.removeClass('alt'); }
          });

        });

      }

    })(jQuery);
    
    console.log("✅ Main.js functionality re-initialized");
  } else {
    // Retry after a short delay if dependencies aren't ready
    setTimeout(initializeMainJS, 100);
  }
}

console.log("loadhtml.js loaded");