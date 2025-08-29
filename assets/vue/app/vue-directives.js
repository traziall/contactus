export const mIcon = {
    mounted(el, binding) {
        el.classList.add('mir', `mi-${binding.value}`);
    }
};