import LazyImage from "./LazyImage.vue";
const props = defineProps();
const __VLS_emit = defineEmits();
function formatTime(iso) {
    const d = new Date(iso);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (mins < 1)
        return "刚刚";
    if (mins < 60)
        return `${mins} 分钟前`;
    if (hours < 24)
        return `${hours} 小时前`;
    if (days < 7)
        return `${days} 天前`;
    return d.toLocaleDateString();
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
    ...{ class: "work-card" },
});
/** @type {__VLS_StyleScopedClasses['work-card']} */ ;
const __VLS_0 = LazyImage;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    src: (__VLS_ctx.work.images[0]),
    alt: (__VLS_ctx.work.title),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    src: (__VLS_ctx.work.images[0]),
    alt: (__VLS_ctx.work.title),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    ...{ click: {} },
    onClick: (...[$event]) => {
        __VLS_ctx.$emit('select', __VLS_ctx.work);
        // @ts-ignore
        [work, work, work, $emit,];
    },
};
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
(__VLS_ctx.work.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.work.description);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "meta" },
});
/** @type {__VLS_StyleScopedClasses['meta']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.work.difficulty);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.work.durationHours);
if (__VLS_ctx.viewedAt) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "viewed-at" },
    });
    /** @type {__VLS_StyleScopedClasses['viewed-at']} */ ;
    (__VLS_ctx.formatTime(__VLS_ctx.viewedAt));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "actions" },
});
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('like', __VLS_ctx.work.id);
            // @ts-ignore
            [work, work, work, work, work, $emit, viewedAt, viewedAt, formatTime,];
        } },
});
(__VLS_ctx.work.likes);
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('collect', __VLS_ctx.work.id);
            // @ts-ignore
            [work, work, $emit,];
        } },
});
(__VLS_ctx.work.collected ? "已收藏" : "收藏");
// @ts-ignore
[work,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
//# sourceMappingURL=WorkCard.vue.js.map