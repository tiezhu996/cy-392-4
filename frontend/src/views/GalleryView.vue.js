import { onMounted, watch } from "vue";
import FilterBar from "../components/FilterBar.vue";
import MasonryGrid from "../components/MasonryGrid.vue";
import UploadPanel from "../components/UploadPanel.vue";
import WorkDetail from "../components/WorkDetail.vue";
import { useWorkStore } from "../stores/workStore";
const store = useWorkStore();
onMounted(store.hydrate);
watch(() => store.filter.onlyViewed, (val) => {
    if (val)
        store.filter.sort = "viewed";
});
function toggleTheme() {
    document.documentElement.classList.toggle("dark");
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: "page" },
});
/** @type {__VLS_StyleScopedClasses['page']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: "hero" },
});
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.toggleTheme) },
});
const __VLS_0 = UploadPanel;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_5 = FilterBar;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const __VLS_10 = MasonryGrid;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    ...{ 'onSelect': {} },
    ...{ 'onLike': {} },
    ...{ 'onCollect': {} },
    works: (__VLS_ctx.store.displayed),
    viewHistory: (__VLS_ctx.store.filter.onlyViewed ? __VLS_ctx.store.viewHistory : undefined),
}));
const __VLS_12 = __VLS_11({
    ...{ 'onSelect': {} },
    ...{ 'onLike': {} },
    ...{ 'onCollect': {} },
    works: (__VLS_ctx.store.displayed),
    viewHistory: (__VLS_ctx.store.filter.onlyViewed ? __VLS_ctx.store.viewHistory : undefined),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
let __VLS_15;
const __VLS_16 = {
    ...{ select: {} },
    onSelect: (...[$event]) => {
        __VLS_ctx.store.selected = $event;
        // @ts-ignore
        [toggleTheme, store, store, store, store,];
    },
    ...{ like: {} },
    onLike: (__VLS_ctx.store.like),
    ...{ collect: {} },
    onCollect: (__VLS_ctx.store.collect),
};
var __VLS_13;
var __VLS_14;
const __VLS_17 = WorkDetail;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    ...{ 'onClose': {} },
    ...{ 'onFollow': {} },
    work: (__VLS_ctx.store.selected),
}));
const __VLS_19 = __VLS_18({
    ...{ 'onClose': {} },
    ...{ 'onFollow': {} },
    work: (__VLS_ctx.store.selected),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
let __VLS_22;
const __VLS_23 = {
    ...{ close: {} },
    onClose: (...[$event]) => {
        __VLS_ctx.store.selected = null;
        // @ts-ignore
        [store, store, store, store,];
    },
    ...{ follow: {} },
    onFollow: (__VLS_ctx.store.follow),
};
var __VLS_20;
var __VLS_21;
// @ts-ignore
[store,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=GalleryView.vue.js.map