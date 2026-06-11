export function filterWorks(works, filter, viewHistory = []) {
    const viewedIds = new Set(viewHistory.map((h) => h.id));
    return works.filter((work) => {
        const textMatch = `${work.title} ${work.description}`.toLowerCase().includes(filter.keyword.toLowerCase());
        const typeMatch = filter.type === "all" || work.type === filter.type;
        const diffMatch = filter.difficulty === "all" || work.difficulty === filter.difficulty;
        const collectMatch = !filter.onlyCollected || work.collected;
        const viewedMatch = !filter.onlyViewed || viewedIds.has(work.id);
        return textMatch && typeMatch && diffMatch && collectMatch && viewedMatch;
    }).sort((a, b) => {
        if (filter.sort === "viewed") {
            const aTime = viewHistory.find((h) => h.id === a.id)?.viewedAt || "";
            const bTime = viewHistory.find((h) => h.id === b.id)?.viewedAt || "";
            return bTime.localeCompare(aTime);
        }
        return filter.sort === "hot" ? b.likes - a.likes : b.createdAt.localeCompare(a.createdAt);
    });
}
//# sourceMappingURL=filter.js.map