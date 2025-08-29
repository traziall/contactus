import { tzHeader } from './components/tz-header.js';
import { tzFrontanimate } from './components/tz-fronanimate.js';
import { tzAnswerUs } from './components/answer-us.js';
import { tzAnswerDevapp } from './components/answer-devapp.js';
const { createApp } = Vue;
import { clientEvent } from './helpers.js';
import { answerSkills } from './components/answer-skills.js';
import { answerSchedule } from './components/answer-schedule.js';

createApp({
    components: {
        "tz-header": tzHeader,
        "tz-frontanimate": tzFrontanimate,
        "answer-us": tzAnswerUs,
        "answer-devapp": tzAnswerDevapp,
        "answer-skills": answerSkills,
        "answer-schedule": answerSchedule
    },
    data() {
        return {
            preguntas: [
                { id: 'us', label: '¿Quienes son?', seleccionado: false },
                { id: 'devapp', label: '¿Que tipo de aplicaciones desarrollan?', seleccionado: false },
                { id: 'skills', label: '¿Qué tecnologías dominan?', seleccionado: false },
                { id: 'schedule', label: '¿Como nos organiamos en el proyecto?', seleccionado: false },
            ],
            componentes: {
                us: 'answer-us',
                devapp: 'answer-devapp',
                skills: 'answer-skills',
                schedule: 'answer-schedule'
            },
            respuestas: []
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
        }
    }
}).mount('#app')