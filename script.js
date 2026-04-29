// 取得 HTML 元素
const addBtn = document.getElementById('add-btn');
const todoName = document.getElementById('todo-name');
const todoDetail = document.getElementById('todo-detail');
const fileShelf = document.getElementById('file-shelf');

const reader = document.getElementById('file-reader');
const viewTitle = document.getElementById('view-title');
const viewBody = document.getElementById('view-body');
const closeBtn = document.querySelector('.close-icon');

// 點擊「建立」按鈕
addBtn.addEventListener('click', () => {
    const title = todoName.value.trim();
    const content = todoDetail.value.trim();

    if (title === "") {
        alert("請輸入代辦事項名稱！");
        return;
    }

    // 建立檔案元件
    const fileDiv = document.createElement('div');
    fileDiv.className = 'file-item';
    
    fileDiv.innerHTML = `
        <span class="file-icon">📄</span>
        <span class="file-name">${title}</span>
    `;

    // 點擊「檔案」開啟閱讀器
    fileDiv.onclick = () => {
        viewTitle.innerText = title;
        viewBody.innerText = content || "(此檔案無詳細內容描述)";
        reader.style.display = 'flex';
    };

    // 放入架上
    fileShelf.appendChild(fileDiv);

    // 清空輸入框
    todoName.value = "";
    todoDetail.value = "";
});

// 關閉閱讀器
closeBtn.onclick = () => { reader.style.display = 'none'; };

// 點擊視窗外部也可關閉
window.onclick = (e) => {
    if (e.target == reader) reader.style.display = 'none';
};