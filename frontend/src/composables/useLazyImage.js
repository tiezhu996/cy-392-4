import { onBeforeUnmount, onMounted, ref } from "vue";
export function useLazyImage(src) {
    const el = ref();
    const visibleSrc = ref("");
    let observer;
    onMounted(() => {
        observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                visibleSrc.value = src;
                observer?.disconnect();
            }
        });
        if (el.value)
            observer.observe(el.value);
    });
    onBeforeUnmount(() => observer?.disconnect());
    return { el, visibleSrc };
}
//# sourceMappingURL=useLazyImage.js.map