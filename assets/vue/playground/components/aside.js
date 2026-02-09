import { CollapseHelper, ElementClassToggle } from "../scripts.js";
import { dragItems } from "./drag-items.js";

export const appAside = {
    template: /* html */`
    <aside class="aside-collapse" id="aside-nav">
        <div class="collapse-header">
            <div class="titles">
                <p>
                    <i class="mir mi-arrow_back"></i>
                    <span class="m-x1 fw-bold">Components</span>
                </p>
                <button type="button" class="control" data-action="toggle">
                    <i class="mir mi-tune"></i>
                </button>
            </div>
            <div class="search">
                <div class="fieldset">
                    <i class="mir mi-search"></i>
                    <input type="search" placeholder="Search" id="">
                </div>
            </div>
        </div>
        <div class="collapse-body">
            <div id="accordion" class="accordion">
                <div class="collapse-item">
                    <button class="collapse-toggle btn-collapse">
                        <i class="mir mi-file_download m-r2"></i>
                        <span>Inputs</span>
                    </button>
                    <div class="collapse-content">
                        <drag-items></drag-items>
                    </div>
                </div>
                <div class="collapse-item">
                    <button class="collapse-toggle btn-collapse">
                        <i class="mir mi-file_upload m-r2"></i>
                        <span>OutPuts</span>
                    </button>
                    <div class="collapse-content">
                        <drag-items></drag-items>
                    </div>
                </div>
                <div class="collapse-item">
                    <button class="collapse-toggle btn-collapse">
                        <i class="mir mi-text_snippet"></i>
                        <span>Propst</span>
                    </button>
                    <div class="collapse-content">
                        <drag-items></drag-items>
                    </div>
                </div>
            </div>
        </div>
        <div class="collapse-footer">
            <button type="button" class="buttom-add">
                <i class="bi bi-plus"></i>
                <span>New Custom Component</span>
            </button>
        </div>
    </aside>`,
    components: {
        "drag-items": dragItems
    },
    mounted() {
        this.collapse();
        this.toggle();
    },
    methods: {
        collapse() {
            new CollapseHelper('aside-nav', {
                itemSelector: '.collapse-item',
                toggleClass: 'collapse-open',
                activeButtonClass: 'collapse-active',
                triggerSelector: '.btn-collapse',
                contentSelector: '.collapse-content'
            });
        },
        toggle() {
            new ElementClassToggle('aside-nav', {
                btns: '.control',
                classToggle: 'aside-hide'
            });
        }
    }
}