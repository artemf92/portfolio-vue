export default {
    inserted: el => {
        function loadAnimation(el) {
            if (!el.dataset.a) return;
            el.style.animationDelay = el.dataset.delay ? `${el.dataset.delay / 10}s` : 0
            el.style.animationDuration = el.dataset.duration ? `${el.dataset.duration}s` : 0
            el.classList.add('_active')
        }

        function handleIntersect(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    loadAnimation(el);
                    observer.unobserve(el);
                }
            });
        }

        function createObserver() {
            const options = {
                root: null,
                threshold: 0
            };

            const observer = new IntersectionObserver(handleIntersect, options);

            observer.observe(el);
        }

        if (!window["IntersectionObserver"]) {
            loadAnimation();
        } else {
            createObserver();
        }
    }
};
