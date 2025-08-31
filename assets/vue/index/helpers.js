export const clientEvent = {
    goToId(id, distance = 0) {
        const el = document.getElementById(id);
        if (el) {
            var position = el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: position - distance, behavior: 'smooth' });
        }
    }
}

export const socials = [
    {
        target: true,
        path: 'https://www.youtube.com/@traziall',
        label: 'Youtube',
        icon: 'icofont-youtube',
        color: '#ef4444'
    },
    {
        target: true,
        path: 'https://www.facebook.com/traziall',
        label: 'Facebook',
        icon: 'icofont-facebook',
        color: '#3b82f6'
    },
    {
        target: true,
        path: 'https://x.com/traziall',
        label: 'X',
        icon: 'icofont-x',
        color: ''
    },
    {
        target: true,
        path: 'https://www.instagram.com/trazi.all',
        label: 'instagram',
        icon: 'icofont-instagram',
        color: '#d946ef'
    },
];