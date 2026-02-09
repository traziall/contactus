const { defineStore } = Pinia;

export const storeComponents = defineStore('components', {
    state: () => ({
        components: [],
    }),
    actions: {
        add(item) {
            const newItem = {
                ...item,
                id: item.id || Date.now()
            };
            this.components.push(newItem);
        },

        update(id, updatedItem) {
            const index = this.components.findIndex(item => item.id === id);
            if (index !== -1) {
                this.components[index] = { ...this.components[index], ...updatedItem };
            }
        },

        remove(id) {
            this.components = this.components.filter(item => item.id !== id);
        },

        removeMany(ids) {
            if (!Array.isArray(ids)) return;
            const setOfIdsToDelete = new Set(ids);
            this.components = this.components.filter(item => !setOfIdsToDelete.has(item.id));
        },

        clear() {
            this.components = [];
        }
    }
});