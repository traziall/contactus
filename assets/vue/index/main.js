import { tzHeader } from './components/tz-header.js';
import { tzFrontanimate } from './components/tz-fronanimate.js';
import { tzAnswerUs } from './components/answer-us.js';
import { tzAnswerDevapp } from './components/answer-devapp.js';
const { createApp } = Vue;
import { clientEvent } from './helpers.js';
import { answerSkills } from './components/answer-skills.js';
import { answerSchedule } from './components/answer-schedule.js';
import { answerIndustries } from './components/answer-industries.js';
import { tzPhone } from './components/tz-phone.js';
import { tzFooter } from './components/tz-footer.js';
import { tzDemoapps } from './components/tz-demoapps.js';
import { tzContact } from './components/tz-contact.js';
import { tzGallery } from './components/tz-galelly.js';

createApp({
    components: {
        "tz-footer": tzFooter,
        "tz-header": tzHeader,
        "tz-frontanimate": tzFrontanimate,
        "answer-us": tzAnswerUs,
        "answer-devapp": tzAnswerDevapp,
        "answer-skills": answerSkills,
        "answer-schedule": answerSchedule,
        "answer-industries": answerIndustries,
        "tz-phone": tzPhone,
        "tz-demoapps": tzDemoapps,
        "tz-contact": tzContact,
        "tz-gallery": tzGallery,
    },
    mounted() {
        this.recorrerBotones("nav.btns", {
            childSelector: "button",
            targetSelector: "i",
            cssActive: "!text-red-500"
        });
    },
    data() {
        return {
            preguntas: [
                { id: 'us', label: '¿Quiénes somos?', seleccionado: false },
                { id: 'devapp', label: '¿Qué tipo de aplicaciones desarrollan?', seleccionado: false },
                { id: 'skills', label: '¿Qué tecnologías dominan?', seleccionado: false },
                { id: 'schedule', label: '¿Cómo se organizan en un proyecto?', seleccionado: false },
                { id: 'industries', label: '¿En qué sectores tienen experiencia?', seleccionado: false }
            ],
            componentes: {
                us: 'answer-us',
                devapp: 'answer-devapp',
                skills: 'answer-skills',
                schedule: 'answer-schedule',
                industries: 'answer-industries'
            },
            respuestas: [],
            btnIndex: 0,
        };
    },
    methods: {
        responder(id) {
            if (id === null) {
                this.respuestas.push(...this.preguntas.map(q => q.id));
                this.preguntas = [];
            } else {
                const idx = this.preguntas.findIndex(q => q.id === id);
                if (idx !== -1) {
                    this.respuestas.push(id);
                    this.preguntas.splice(idx, 1);
                }
            }
            setTimeout(() => {
                clientEvent.goToId(id, 100);
            }, 500);
        },
        recorrerBotones(elementPadre, setOptions = {}) {
            const {
                replay = 4000,              // tiempo entre pasos
                durationActive = 1000,      // duración del estado activo
                cssActive = "active",       // clase que se agrega
                childSelector = "li",   // hijos a recorrer
                targetSelector = null       // opcional: elemento interno donde aplicar la clase
            } = setOptions;

            const parent = document.querySelector(elementPadre);
            if (!parent) return;

            // Selecciona todos los hijos excepto el último
            const items = parent.querySelectorAll(`${childSelector}:not(:last-child)`);
            if (items.length === 0) return;

            let index = 0;
            let ciclo;

            function activar() {
                // Quitar clase a todos los targets
                items.forEach(el => {
                    const target = targetSelector ? el.querySelector(targetSelector) : el;
                    if (target) target.classList.remove(cssActive);
                });

                // Agregar clase al actual
                const current = items[index];
                const target = targetSelector ? current.querySelector(targetSelector) : current;

                if (target) {
                    target.classList.add(cssActive);

                    // Quitar después de durationActive
                    setTimeout(() => {
                        target.classList.remove(cssActive);
                    }, durationActive);
                }

                index++;

                // Reiniciar ciclo al llegar al último
                if (index >= items.length) {
                    index = 0;
                    clearInterval(ciclo);
                    setTimeout(() => {
                        ciclo = setInterval(activar, replay);
                    }, replay);
                }
            }

            // Iniciar
            ciclo = setInterval(activar, replay);
            activar(); // primera ejecución inmediata
        }
    }
}).mount('#app');