import { ref } from "vue";
import { useWorkStore } from "../stores/workStore";
const store = useWorkStore();
const title = ref("我的新作品");
const material = ref("棉线,木片");
function add() {
    const work = { id: crypto.randomUUID(), title: title.value, type: "other", difficulty: "beginner", materials: material.value.split(",").map((i) => i.trim()), durationHours: 3, images: [`https://picsum.photos/seed/${Date.now()}/520/760`], description: "通过上传面板添加的手工作品示例。", steps: ["整理材料", "制作主体", "完成装饰"], author: { id: "me", name: "我的工作台", bio: "记录自己的手作过程。", followed: false }, likes: 0, collected: false, createdAt: new Date().toISOString() };
    store.addWork(work);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "upload" },
});
/** @type {__VLS_StyleScopedClasses['upload']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({});
(__VLS_ctx.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({});
(__VLS_ctx.material);
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.add) },
});
// @ts-ignore
[title, material, add,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=UploadPanel.vue.js.map