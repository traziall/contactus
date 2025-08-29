export const clientEvent = {
    goToId(id, distance = 0) {
        const el = document.getElementById(id);
        if (el) {
            var position = el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: position - distance, behavior: 'smooth' });
        }
    }
}
