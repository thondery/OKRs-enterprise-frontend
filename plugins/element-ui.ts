import Vue from 'vue';
import { Loading, MessageBox, Message, Notification } from 'element-ui';
import vietnameseLang from 'element-ui/lib/locale/lang/vi';
import locale from 'element-ui/lib/locale';
import { elComponent } from '@/constants/app.enum';

// configure language
locale.use(vietnameseLang);

// import dynamic components
Vue.component(elComponent.ElRow, () => import(/* webpackChunkName: 'element-ui-form-row' */ 'element-ui/lib/row'));
Vue.component(elComponent.ElCol, () => import(/* webpackChunkName: 'element-ui-form-col' */ 'element-ui/lib/col'));
Vue.component(elComponent.ElContainer, () => import(/* webpackChunkName: 'element-ui-form-col' */ 'element-ui/lib/container'));
Vue.component(elComponent.ElButton, () => import(/* webpackChunkName: 'element-ui-button' */ 'element-ui/lib/button'));
Vue.component(elComponent.ElInput, () => import(/* webpackChunkName: 'element-ui-input' */ 'element-ui/lib/input'));
Vue.component(elComponent.ElForm, () => import(/* webpackChunkName: 'element-ui-form' */ 'element-ui/lib/form'));
Vue.component(elComponent.ElFormItem, () => import(/* webpackChunkName: 'element-ui-form-item' */ 'element-ui/lib/form-item'));
Vue.component(elComponent.ElStep, () => import(/* webpackChunkName: 'element-ui-form-step' */ 'element-ui/lib/step'));
Vue.component(elComponent.ElSteps, () => import(/* webpackChunkName: 'element-ui-form-steps' */ 'element-ui/lib/steps'));
Vue.component(elComponent.ElPagination, () => import(/* webpackChunkName: 'element-ui-form-pagination' */ 'element-ui/lib/pagination'));
Vue.component(elComponent.ElDatePicker, () => import(/* webpackChunkName: 'element-ui-form-date-picker' */ 'element-ui/lib/date-picker'));
Vue.component(elComponent.ElDropdown, () => import(/* webpackChunkName: 'element-ui-form-dropdown' */ 'element-ui/lib/dropdown'));
Vue.component(elComponent.ElDropdownItem, () => import(/* webpackChunkName: 'element-ui-form-dropdown-item' */ 'element-ui/lib/dropdown-item'));
Vue.component(elComponent.ElDropdownMenu, () => import(/* webpackChunkName: 'element-ui-form-dropdown-menu' */ 'element-ui/lib/dropdown-menu'));
Vue.component(elComponent.ElTree, () => import(/* webpackChunkName: 'element-ui-form-tree' */ 'element-ui/lib/tree'));
Vue.component(elComponent.ElTable, () => import(/* webpackChunkName: 'element-ui-form-table' */ 'element-ui/lib/table'));
Vue.component(elComponent.ElTableColumn, () => import(/* webpackChunkName: 'element-ui-form-table-column' */ 'element-ui/lib/table-column'));
Vue.component(elComponent.ElTabPane, () => import(/* webpackChunkName: 'element-ui-form-tab-pane' */ 'element-ui/lib/tab-pane'));
Vue.component(elComponent.ElTabs, () => import(/* webpackChunkName: 'element-ui-form-tabs' */ 'element-ui/lib/tabs'));
Vue.component(elComponent.ElCheckbox, () => import(/* webpackChunkName: 'element-ui-checkbox' */ 'element-ui/lib/checkbox'));
Vue.component(elComponent.ElIcon, () => import(/* webpackChunkName: 'element-ui-icon' */ 'element-ui/lib/icon'));
Vue.component(elComponent.ElRadio, () => import(/* webpackChunkName: 'element-ui-icon' */ 'element-ui/lib/radio'));
Vue.component(elComponent.ElDialog, () => import(/* webpackChunkName: 'element-ui-dialog' */ 'element-ui/lib/dialog'));
Vue.component(elComponent.ElAutocomplete, () => import(/* webpackChunkName: 'element-ui-dialog' */ 'element-ui/lib/autocomplete'));
Vue.component(elComponent.ElTooltip, () => import(/* webpackChunkName: 'element-ui-dialog' */ 'element-ui/lib/tooltip'));
Vue.component(elComponent.ElSelect, () => import(/* webpackChunkName: 'element-ui-dialog' */ 'element-ui/lib/select'));
Vue.component(elComponent.ElOption, () => import(/* webpackChunkName: 'element-ui-dialog' */ 'element-ui/lib/option'));
Vue.component(elComponent.ElRadioGroup, () => import(/* webpackChunkName: 'element-ui-dialog' */ 'element-ui/lib/radio-group'));
Vue.component(elComponent.ElAvatar, () => import(/* webpackChunkName: 'element-ui-dialog' */ 'element-ui/lib/avatar'));
Vue.component(elComponent.ElUpload, () => import(/* webpackChunkName: 'element-ui-dialog' */ 'element-ui/lib/upload'));
Vue.component(elComponent.ElTooltip, () => import(/* webpackChunkName: 'element-ui-tooltip' */ 'element-ui/lib/tooltip'));

// import prototype Vue
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
