import { CRAFT_TYPES, DIFFICULTIES } from "../constants/craft";
import { useWorkStore } from "../stores/workStore";
const store = useWorkStore();
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "filters" },
});
/** @type {__VLS_StyleScopedClasses['filters']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    placeholder: "搜索作品名称或描述",
});
(__VLS_ctx.store.filter.keyword);
__VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    value: (__VLS_ctx.store.filter.type),
});
for (const [item] of __VLS_vFor((__VLS_ctx.CRAFT_TYPES))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
        key: (item.value),
        value: (item.value),
    });
    (item.label);
    // @ts-ignore
    [store, store, CRAFT_TYPES,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    value: (__VLS_ctx.store.filter.difficulty),
});
for (const [item] of __VLS_vFor((__VLS_ctx.DIFFICULTIES))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
        key: (item.value),
        value: (item.value),
    });
    (item.label);
    // @ts-ignore
    [store, DIFFICULTIES,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    value: (__VLS_ctx.store.filter.sort),
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "latest",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "hot",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "viewed",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "checkbox",
});
(__VLS_ctx.store.filter.onlyCollected);
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "checkbox",
});
(__VLS_ctx.store.filter.onlyViewed);
// @ts-ignore
[store, store, store,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=FilterBar.vue.js.map