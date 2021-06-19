export default {
    inserted: el => {
        const nav = document.getElementById('nav');
        function sectionScroll(el) {
            switch(el.dataset.currentSection) {
              case false: break;
              case '1': {
                nav.classList.contains('_active') ? nav.classList.remove('_active') : "";
                 nav.classList.contains('_blackNav') ? nav.classList.remove('_blackNav') : "";
                break;
              }
              case '2': {
                // nav.classList.add('_active');
                // nav.classList.contains('_blackNav') ? nav.classList.remove('_blackNav') : "";
                break;
              }
              case '3': {
                nav.classList.add('_blackNav');
                nav.classList.add('_active');
                break;
              }
            }
        }
        function handleIntersect(entries, observer) {
            entries.forEach(entry => {
              if (!entry.isIntersecting) {
                return;
              } else {
                sectionScroll(el);
                // observer.unobserve(el);
              }
            });
          }
        function createObserver() {
            const options = {
                root: null,
                threshold: 0.1
            };
            const observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(el);
        }
        if(!window['IntersectionObserver']) {
            nav.classList.add('absolute');
        } else {
            createObserver()
        }
    }
}