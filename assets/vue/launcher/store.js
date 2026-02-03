const { defineStore } = Pinia;

// STORE GLOBAL (PINIA)
export const pjsStore = defineStore('pjs', {
    state: () => ({
        pjs: [{ id: 1, data: null }, { id: 2, data: null }, { id: 3, data: null }, { id: 4, data: null }],
    }),
    actions: {
        update(items) {
            this.pjs = items;
        },
        clear() {
            this.pjs = []
        }
    }
})
export const deseosStore = defineStore('deseo', {
    state: () => ({
        counter: 5,
    }),
    actions: {
        update(add) {
            this.counter = add;
        },
        clear() {
            this.pjs = 0
        }
    }
})