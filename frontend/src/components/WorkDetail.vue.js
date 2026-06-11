const __VLS_props = defineProps();
const __VLS_emit = defineEmits();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.work) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.work))
                    return;
                __VLS_ctx.$emit('close');
                // @ts-ignore
                [work, $emit,];
            } },
        ...{ class: "detail-mask" },
    });
    /** @type {__VLS_StyleScopedClasses['detail-mask']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
        ...{ class: "detail" },
    });
    /** @type {__VLS_StyleScopedClasses['detail']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.work))
                    return;
                __VLS_ctx.$emit('close');
                // @ts-ignore
                [$emit,];
            } },
        ...{ class: "close" },
    });
    /** @type {__VLS_StyleScopedClasses['close']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "carousel" },
    });
    /** @type {__VLS_StyleScopedClasses['carousel']} */ ;
    for (const [img] of __VLS_vFor((__VLS_ctx.work.images))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            key: (img),
            src: (img),
            alt: (__VLS_ctx.work.title),
        });
        // @ts-ignore
        [work, work,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
    (__VLS_ctx.work.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (__VLS_ctx.work.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
    for (const [m] of __VLS_vFor((__VLS_ctx.work.materials))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (m),
        });
        (m);
        // @ts-ignore
        [work, work, work,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.ol, __VLS_intrinsics.ol)({});
    for (const [step] of __VLS_vFor((__VLS_ctx.work.steps))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (step),
        });
        (step);
        // @ts-ignore
        [work,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.footer, __VLS_intrinsics.footer)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (__VLS_ctx.work.author.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.work.author.bio);
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.work))
                    return;
                __VLS_ctx.$emit('follow', __VLS_ctx.work.author.id);
                // @ts-ignore
                [work, work, work, $emit,];
            } },
    });
    (__VLS_ctx.work.author.followed ? "已关注" : "关注作者");
}
// @ts-ignore
[work,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
//# sourceMappingURL=WorkDetail.vue.js.map