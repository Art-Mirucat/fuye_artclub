
// 公告数据配置
const ANNOUNCEMENTS_DATA = [
    {
        id: 1,
        date: "2026-03-15",
        content: "覆野画社专属网站正式上线！"
    }
];

const state = {
    announcements: [],
    currentPage: 1,
    itemsPerPage: 5,
    sortDesc: true // true = 最近优先（倒序）
};

document.addEventListener("DOMContentLoaded", () => {
    state.announcements = [...ANNOUNCEMENTS_DATA];
    renderLatest();
    sortAndRender();
    refreshSortLabel();
    
    document.getElementById("sortBtn").addEventListener("click", toggleSort);
    
    // 分页点击事件
    document.getElementById("prevPage").addEventListener("click", () => changePage(state.currentPage - 1));
    document.getElementById("nextPage").addEventListener("click", () => changePage(state.currentPage + 1));
    document.getElementById("pageSelect").addEventListener("change", (e) => changePage(parseInt(e.target.value)));
});

/**
 * 渲染最新的单条公告（显示在顶部突出位置）
 */
function renderLatest() {
    const latestContainer = document.getElementById("latestAnnouncement");
    if (state.announcements.length === 0) {
        latestContainer.innerHTML = `<p style="text-align: center; color: var(--text-light);">暂无公告</p>`;
        return;
    }

    // 无论当前排序如何，始终按日期寻找绝对最新的一条
    const latest = [...state.announcements].sort((a, b) => new Date(b.date) - new Date(a.date))[0];

    latestContainer.innerHTML = `
        <span class="announcement-date">${latest.date}</span>
        <div class="announcement-content">${latest.content}</div>
    `;
}

/**
 * 切换正序/倒序
 */
function toggleSort() {
    state.sortDesc = !state.sortDesc;
    state.currentPage = 1;
    sortAndRender();
    refreshSortLabel();
}

/**
 * 执行排序并渲染列表和分页
 */
function sortAndRender() {
    state.announcements.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return state.sortDesc ? dateB - dateA : dateA - dateB;
    });
    
    renderList();
    renderPagination();
}

/**
 * 更新排序按钮的文字状态
 */
function refreshSortLabel() {
    const btn = document.getElementById("sortBtn");
    if (!btn) return;
    btn.textContent = state.sortDesc ? "倒序显示" : "顺序显示";
}

/**
 * 渲染公告列表
 */
function renderList() {
    const container = document.getElementById("announcementList");
    container.innerHTML = "";

    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = Math.min(startIndex + state.itemsPerPage, state.announcements.length);
    const pageItems = state.announcements.slice(startIndex, endIndex);

    if (pageItems.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #999;">暂无更多公告</p>`;
        return;
    }

    pageItems.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "announcement-card";
        card.innerHTML = `
            <span class="announcement-date">${item.date}</span>
            <div class="announcement-content">${item.content}</div>
        `;
        container.appendChild(card);

        // 如果不是最后一项，则添加分割线
        if (index < pageItems.length - 1) {
            const divider = document.createElement("div");
            divider.className = "divider";
            container.appendChild(divider);
        }
    });
}

/**
 * 分页逻辑
 */
function renderPagination() {
    const totalPages = Math.ceil(state.announcements.length / state.itemsPerPage);
    const container = document.getElementById("pagination");
    const select = document.getElementById("pageSelect");
    const prev = document.getElementById("prevPage");
    const next = document.getElementById("nextPage");
    const info = document.getElementById("pageInfo");

    if (totalPages <= 1) {
        container.style.display = "none";
        return;
    }
    container.style.display = "flex";

    select.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = `第 ${i} 页`;
        if (i === state.currentPage) opt.selected = true;
        select.appendChild(opt);
    }

    prev.disabled = state.currentPage === 1;
    next.disabled = state.currentPage === totalPages;
    info.textContent = `${state.currentPage} / ${totalPages}`;
}

function changePage(page) {
    const totalPages = Math.ceil(state.announcements.length / state.itemsPerPage);
    if (page < 1 || page > totalPages) return;
    state.currentPage = page;
    renderList();
    renderPagination();
}
