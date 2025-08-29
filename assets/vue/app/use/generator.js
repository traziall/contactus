export const generator = {
    monthsName: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],

    dateForSelects(setOptions = {}) {
        const defaultOptions = {
            yearMax: new Date().getFullYear(),
            yearMin: 0,
            monthDays: new Date(),
            monthsName: this.monthsName,
        };

        const options = { ...defaultOptions, ...setOptions };

        const date = (typeof options.monthDays === 'string') ? new Date(options.monthDays) : options.monthDays;

        const currentYear = date.getFullYear();
        const days = [];
        const years = [];

        const yearStart = options.yearMin ? options.yearMin : currentYear;
        const yearEnd = options.yearMax;

        for (let y = yearStart; y <= yearEnd; y++) {
            years.push(y);
        }

        const month = date.getMonth() + 1;
        const daysInMonth = new Date(currentYear, month, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }

        return {
            days,
            years,
            months: options.monthsName,
        };
    },
};
