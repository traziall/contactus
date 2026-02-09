const { defineStore } = Pinia;

export const storeComponents = defineStore('components', {
    state: () => ({
        components: [],
        itemsComponents: {
            inputs: [
                {
                    group: 'inputs',
                    id: 1,
                    type: 'text',
                    icon: 'mi-text_fields',
                    label: 'Text Input'
                },
                {
                    group: 'inputs',
                    id: 2,
                    type: 'number',
                    icon: 'mi-filter_1',
                    label: 'Number Input'
                },
            ],
            output: [
                {
                    group: 'output',
                    id: 1,
                    type: 'text-out',
                    icon: 'mi-read_more',
                    label: 'Text Output'
                },
            ],
            props: [
                {
                    group: 'props',
                    id: 1,
                    type: 'label',
                    icon: 'mi-label',
                    label: 'Label'
                },
            ]
        },
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

        item(id) {
            console.log(id);
            const item = this.components.find(item => item.id === id);
            return item;
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