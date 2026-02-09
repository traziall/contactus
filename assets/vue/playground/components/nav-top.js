import { DropdownHelper } from '../scripts.js';
import { manuControl } from './menu-control.js';
import { notificationList } from './notification-list.js';

export const navTop = {
    template: /* html */`
    <div class="navegation-top">
        <section class="navegation-content">
            <ul class="navegation-btns">
                <li>
                    <img src="assets/img/logoipsum-311.svg" height="20" alt="" class="m-r1">
                </li>
                <li>
                    <a class="button" href="#">
                        <i class="mir mi-mark_chat_read m-r1"></i>
                        <span class="fw-bold">user@mail.com</span>
                    </a>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="dropdown-toggle button fw-border" data-toggle="dropdown">
                            <i class="mir mi-arrow_outward"></i>
                            <span class="m-x1">loremFlow</span>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <div class="dropdown-menu dropdown-left">
                            <manu-control :menu="menuWorkspace"></manu-control>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="breadcrumb-project">
                <ul>
                    <li>My Projects</li>
                    <li>
                        <div class="dropdown">
                            <button class="dropdown-toggle" data-toggle="dropdown">
                                <span class="fw-bold">Blog writer</span>
                                <i class="mir mi-keyboard_arrow_down m-x1"></i>
                                <span class="badge-message success">Saved</span>
                            </button>
                            <div class="dropdown-menu dropdown-left">
                                <manu-control :menu="menuProject"></manu-control>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <nav class="navegation-links">
                <ul>
                    <li>
                        <div class="dropdown">
                            <button class="dropdown-toggle block-link" data-toggle="dropdown">
                                <i class="mir mi-notifications m-r1"></i>
                                <span class="fw-bold">Notifications</span>
                            </button>
                            <div class="dropdown-menu dropdown-right">
                                <notification-list></notification-list>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <i class="mir mi-menu_book m-r1"></i>
                            <span class="fw-bold">Docs</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="mir mi-settings m-r1"></i>
                            <span class="fw-bold">Setting</span>
                        </a>
                    </li>
                    <li>
                        <div id="myDropdown4" class="dropdown">
                            <button class="dropdown-toggle button-profile" data-toggle="dropdown">
                                <img src="assets/img/avatar-defecto-f.png" alt="">
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <div class="dropdown-menu dropdown-right">
                                <menu class="menu-user">
                                    <div class="menu-header">
                                        <div class="menu-header-body">
                                            <h3 class="user-title">Malejandra Zanauria</h3>
                                            <p class="user-text">Lorem, ipsum, dolor.</p>
                                        </div>
                                        <div class="menu-header-action">
                                            <div class="menu-actions-group">
                                                <button type="button">
                                                    <i class="mir mi-bedtime"></i>
                                                </button>
                                                <button type="button" class="active">
                                                    <i class="mir mi-light_mode"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu-body">
                                        <h6 class="menu-body-title">Version 1.1.0</h6>
                                        <ul>
                                            <li><a href="#">Account Setting</a></li>
                                            <li><a href="#">Feedback</a></li>
                                        </ul>
                                        <hr>
                                        <ul>
                                            <li><a href="#">Logout</a></li>
                                        </ul>
                                    </div>
                                </menu>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </section>
    </div>
    `,
    components: {
        "manu-control": manuControl,
        "notification-list": notificationList
    },
    data: () => ({
        menuWorkspace: [
            {
                id: 1,
                ico: 'mi-workspaces',
                label: 'Workspace Settings'
            },
            {
                id: 2,
                ico: 'mi-how_to_reg',
                label: 'Invite Members'
            },
            {
                id: 3,
                ico: 'mi-analytics',
                label: 'Usage Analytics'
            },
            {
                id: 4,
                ico: 'mi-add_card',
                label: 'content empty'
            }
        ],
        menuProject: [
            {
                id: 1,
                ico: 'mi-insert_drive_file',
                label: 'Analystic 2026'
            },
            {
                id: 2,
                ico: 'mi-insert_drive_file',
                label: 'Blog write'
            },
            {
                id: 3,
                ico: 'mi-insert_drive_file',
                label: 'Workspace main'
            },
        ]
    }),
    mounted() {
        this.dropdowns();
    },
    methods: {
        dropdowns() {
            new DropdownHelper('.dropdown', {
                toggleClass: 'dropdown-open',
                onFocus: false
            });
        }
    }
}