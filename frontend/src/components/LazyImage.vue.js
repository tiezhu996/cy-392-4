import { useLazyImage } from "../composables/useLazyImage";
const props = defineProps();
const { el, visibleSrc } = useLazyImage(props.src);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ref: "el",
    ...{ class: "lazy-image" },
    src: (__VLS_ctx.visibleSrc || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E'),
    alt: (__VLS_ctx.alt),
});
/** @type {__VLS_StyleScopedClasses['lazy-image']} */ ;
// @ts-ignore
[visibleSrc, alt,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
//# sourceMappingURL=LazyImage.vue.js.map