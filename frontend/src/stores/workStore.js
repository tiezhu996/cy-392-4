import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { mockWorks } from "../mock/works";
import { readWorks, writeWorks, readViewHistory, writeViewHistory } from "../storage/indexedDb";
import { filterWorks } from "../utils/filter";
export const useWorkStore = defineStore("works", () => {
    const works = ref([]);
    const viewHistory = ref([]);
    const filter = ref({ keyword: "", type: "all", difficulty: "all", sort: "latest", onlyCollected: false, onlyViewed: false });
    const selected = ref(null);
    const displayed = computed(() => filterWorks(works.value, filter.value, viewHistory.value));
    async function hydrate() {
        const saved = await readWorks();
        works.value = saved.length ? saved : mockWorks;
        if (!saved.length)
            await writeWorks(works.value);
        const savedHistory = await readViewHistory();
        viewHistory.value = savedHistory;
    }
    function persist() { writeWorks(works.value); }
    function persistViewHistory() { writeViewHistory(viewHistory.value); }
    function like(id) { const item = works.value.find((w) => w.id === id); if (item)
        item.likes += 1; persist(); }
    function collect(id) { const item = works.value.find((w) => w.id === id); if (item)
        item.collected = !item.collected; persist(); }
    function follow(authorId) { works.value.forEach((w) => { if (w.author.id === authorId)
        w.author.followed = !w.author.followed; }); persist(); }
    function addWork(work) { works.value.unshift(work); persist(); }
    function recordView(id) {
        const existing = viewHistory.value.findIndex((h) => h.id === id);
        if (existing !== -1)
            viewHistory.value.splice(existing, 1);
        viewHistory.value.unshift({ id, viewedAt: new Date().toISOString() });
        if (viewHistory.value.length > 100)
            viewHistory.value = viewHistory.value.slice(0, 100);
        persistViewHistory();
    }
    watch(selected, (work) => { if (work)
        recordView(work.id); });
    return { works, viewHistory, filter, selected, displayed, hydrate, like, collect, follow, addWork, recordView };
});
//# sourceMappingURL=workStore.js.map