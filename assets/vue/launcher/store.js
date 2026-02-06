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
            this.pjs = [{ id: 1, data: null }, { id: 2, data: null }, { id: 3, data: null }, { id: 4, data: null }]
        },
        complete() {
            return this.pjs.every(x => x.data)
        }
    }
})
export const deseosStore = defineStore('deseo', {
    state: () => ({
        counter: 5,
        acquired: []
    }),
    actions: {
        update(add) {
            this.counter = add;
        },
        clear() {
            this.counter = 0
        },
        addAcquired(item) {
            this.acquired.push(item);
        },
        clarAcquired(item) {
            this.acquired = [];
        }
    }
})