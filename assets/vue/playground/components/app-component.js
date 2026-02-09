import { dragHelper } from "../../launcher/dragHelper.js";
import { interactHelper } from "../../launcher/interactHelper.js";
import { ToggleHelper } from "../scripts.js";

export const appComponent = {
    template: /* html */`
    <div class="card-form" :style="{
        left: data.position.x + 'px',
        top: data.position.y + 'px'
      }">
        <ul class="card-controls">
            <li>
                <button type="button" class="button">
                    <i class="mir mi-code"></i>
                    <span>code</span>
                </button>
            </li>
            <li>
                <button type="button" class="button">
                    <i class="mir mi-tune"></i>
                    <span>Controls</span>
                </button>
            </li>
            <li>
                <button type="button" class="button">
                    <i class="mir mi-block"></i>
                    <span>Frezze Path</span>
                </button>
            </li>
            <li>
                <button type="button" class="button">
                    <i class="mir mi-delete"></i>
                </button>
            </li>
        </ul>
        <div class="card-form-header">
            <div class="header">
                <img src="assets/img/avatar-defecto-f.png" class="card-img-avatar" alt="">
                <p>Lorem, ipsum.</p>
                <button type="button" class="btn-collapse">
                    <i class="bi bi-play-fill m-r1"></i>
                </button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quibusdam?</p>
        </div>
        <ul class="card-form-body item">
            <li class="drag"></li>
            <li>
                <div class="card-fieldset">
                    <label for="">lorem <i class="bi bi-info-circle"></i></label>
                    <div class="input">
                        <input type="text">
                        <i class="bi bi-arrow-repeat"></i>
                    </div>
                </div>
                <span class="badge badge-danger position-left"></span>
            </li>
            <li>
                <div class="card-fieldset">
                    <label for="">lorem <i class="bi bi-info-circle"></i></label>
                    <div class="input">
                        <input type="text">
                        <i class="bi bi-arrow-repeat"></i>
                    </div>
                </div>
                <span class="badge badge-success position-right"></span>
            </li>
            <li>
                <div class="card-fieldset">
                    <label for="">lorem <i class="bi bi-info-circle"></i></label>
                </div>
                <span class="badge badge-info position-left"></span>
            </li>
            <li>
                <div class="card-fieldset">
                    <label for="">lorem <i class="bi bi-info-circle"></i></label>
                </div>
                <span class="badge badge-info position-left"></span>
            </li>
            <li>
                <div class="card-item">
                    <i class="bi bi-eye"></i>
                    <p>Lorem, ipsum.</p>
                </div>
            </li>
            <li>
                <div class="card-item">
                    <i class="bi bi-eye"></i>
                    <p>Lorem, ipsum.</p>
                </div>
                <span class="badge badge-info position-left"></span>
            </li>
        </ul>
    </div>`,
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    mounted() {
        this.toggle()
    },
    methods: {
        toggle() {
            const elements = this.$el;
            const control = elements.querySelector('.card-controls');
            new ToggleHelper(elements, {
                target: control,
                focusMode: 'lock'
            })
            interactHelper.move(elements, {
                handles: elements.querySelector('.drag'),
                onStart: () => {
                    elements.classList.add('user-none');
                },
                onEnd: () => {
                    elements.classList.remove('user-none');
                }
            });
        }
    }
}