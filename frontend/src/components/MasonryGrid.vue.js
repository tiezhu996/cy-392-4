import WorkCard from "./WorkCard.vue";
const props = defineProps();
const __VLS_emit = defineEmits();
function getViewedAt(workId) {
    return props.viewHistory?.find((h) => h.id === workId)?.viewedAt;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "masonry" },
});
/** @type {__VLS_StyleScopedClasses['masonry']} */ ;
for (const [work] of __VLS_vFor((__VLS_ctx.works))) {
    const __VLS_0 = WorkCard;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        ...{ 'onSelect': {} },
        ...{ 'onLike': {} },
        ...{ 'onCollect': {} },
        key: (work.id),
        work: (work),
        viewedAt: (__VLS_ctx.getViewedAt(work.id)),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onSelect': {} },
        ...{ 'onLike': {} },
        ...{ 'onCollect': {} },
        key: (work.id),
        work: (work),
        viewedAt: (__VLS_ctx.getViewedAt(work.id)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_5;
    const __VLS_6 = {
        ...{ select: {} },
        onSelect: (...[$event]) => {
            __VLS_ctx.$emit('select', $event);
            // @ts-ignore
            [works, getViewedAt, $emit,];
        },
        ...{ like: {} },
        onLike: (...[$event]) => {
            __VLS_ctx.$emit('like', $event);
            // @ts-ignore
            [$emit,];
        },
        ...{ collect: {} },
        onCollect: (...[$event]) => {
            __VLS_ctx.$emit('collect', $event);
            // @ts-ignore
            [$emit,];
        },
    };
    var __VLS_3;
    var __VLS_4;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
//# sourceMappingURL=MasonryGrid.vue.js.map