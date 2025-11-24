


/*===============================star=================================*/


document.querySelectorAll('.stars').forEach(starGroup => {
  const stars = starGroup.querySelectorAll('i');
  const ratingValue = starGroup.nextElementSibling; // ⭐ 找到緊接在後面的 <p class="rating-value">
  
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.dataset.star);
      
      // 清除這一組的 active 狀態
      stars.forEach(s => s.classList.remove('active', 'fa-solid'));
      stars.forEach(s => s.classList.add('fa-regular'));
      
      // 點亮星星
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('active', 'fa-solid');
        stars[i].classList.remove('fa-regular');
      }

      // 更新文字顯示
      ratingValue.textContent = `目前評分：${rating}`;
    });
  });
});



/*===============================btn=================================*/

function leftBtn() {
    let x = $('#product_div')
    let y = x.scrollLeft()

    if (y <= 0) {
        x.animate({
            scrollLeft: x[0].scrollWidth
        })
    } else {
        x.animate({
            scrollLeft: '-=300px'
        })
    }
}

function rightBtn() {
    let x = $('#product_div')
    let y = x.scrollLeft()
    let max = x[0].scrollWidth - x.outerWidth() - 1


    if (y >= max) {
        x.animate({
            scrollLeft: 0
        })
    } else {
        x.animate({
            scrollLeft: '+=300px'
        })
    }
}



/*===============================card=================================*/


document.querySelector('.card-1').addEventListener('mouseenter', function() {
  document.querySelector('.i-1').classList.add('active');
});

document.querySelector('.card-1').addEventListener('mouseleave', function() {
  document.querySelector('.i-1').classList.remove('active');
});



document.querySelector('.card-2').addEventListener('mouseenter', function() {
  document.querySelector('.i-2').classList.add('active');
});

document.querySelector('.card-2').addEventListener('mouseleave', function() {
  document.querySelector('.i-2').classList.remove('active');
});



document.querySelector('.card-3').addEventListener('mouseenter', function() {
  document.querySelector('.i-3').classList.add('active');
});

document.querySelector('.card-3').addEventListener('mouseleave', function() {
  document.querySelector('.i-3').classList.remove('active');
});


// 監聽 class 為 .card-4 的元素（第四張卡片）
// 當滑鼠移入時（mouseenter 事件觸發）
document.querySelector('.card-4').addEventListener('mouseenter', function() {
  
  // 找到 icon（class 為 .i-4 的元素）並加入 active 樣式
  // 加入 active 後 icon 可以變大、變色等效果（依 CSS 設定）
  document.querySelector('.i-4').classList.add('active');
});


// 同一個元素（.card-4）
// 當滑鼠移出時（mouseleave 事件觸發）
document.querySelector('.card-4').addEventListener('mouseleave', function() {
  
  // 移除 active 樣式，恢復原本 icon 的狀態
  document.querySelector('.i-4').classList.remove('active');
});





/*===============================切換中英文=================================*/




// ---- 預設載入後顯示中文 ---- //
// 當整個 HTML 文件載入完成才執行
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-zh").forEach(el => {
        el.style.display = "block"; // 顯示中文
    });
    document.querySelectorAll(".lang-en").forEach(el => {
        el.style.display = "none"; // 隱藏英文
    });
});

// 建立語言狀態變數（預設中文）
let currentLang = "zh";

// 為切換語言按鈕綁定點擊事件
document.getElementById("langBtn").addEventListener("click", () => {

    // 切換語言 zh ↔ en
    currentLang = currentLang === "zh" ? "en" : "zh";

    // 如果切到英文
    if (currentLang === "en") {
        document.querySelectorAll(".lang-zh").forEach(el => el.style.display = "none");
        document.querySelectorAll(".lang-en").forEach(el => el.style.display = "block");
        document.getElementById("langBtn").textContent = "切換成中文";
    }
    // 如果切回中文
    else {
        document.querySelectorAll(".lang-zh").forEach(el => el.style.display = "block");
        document.querySelectorAll(".lang-en").forEach(el => el.style.display = "none");
        document.getElementById("langBtn").textContent = "Switch to English";
    }
});





/*======================================modal-1===============================*/




// --- 1. 資料定義 ---

// 定義店家資料陣列
// 每個店家包含 id, 名稱, 優惠內容, 以及在地圖上的圖標位置 (使用百分比來模擬地圖座標)
const vendorData = [
    { 
        id: 1, 
        name: { zh: "大王麵羹飯", en: "大王麵羹飯" }, 
        dialogue: { zh: "系上有活動會幫忙送&送食物", en: "We offer delivery service for department events & food." },
        mapX: 20, // 20% from left
        mapY: 30,  // 30% from top
		imageSrc: "images/id1.jpg" ,// **新增圖片路徑**
		address: "106臺北市大安區建國南路一段32號", // 假設地址
        googleMapLink: "https://www.google.com/maps/place/%E5%A4%A7%E7%8E%8B%E9%BA%B5%E7%BE%B9%E9%A3%AF/@25.0441972,121.5336659,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a900139257a5:0xdd7735c95602556b!8m2!3d25.0441972!4d121.5362408!16s%2Fg%2F11w4gq4fgj?authuser=0&entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
		menuContent:""
    },
    { 
        id: 2, 
        name: { zh: "喫上飲", en: "喫上飲" }, 
        dialogue: { zh: "單點飲品折五塊 飯類+飲品折10元", en: "Get 5 NT off individual drinks, or 10 NT off when purchasing any rice dish and a drink." },
        mapX: 80, 
        mapY: 15,
		imageSrc: "images/id2.jpg",
		address: "臺北市大安區新生南路3段1號", // 假設地址
        googleMapLink: "https://www.google.com/maps/place/%E5%96%AB%E4%B8%8A%E9%A3%B2%2F%E7%82%B8%E9%9B%9E%E6%8E%92%2F%E5%89%89%E5%86%B0%2F%E9%BA%BB%E8%BE%A3%E9%B4%A8%E8%A1%80%2F%E6%89%8B%E6%90%96/@25.0441381,121.5336641,17z/data=!3m1!4b1!4m6!3m5!1s0x3442abd8333808e9:0x143a2bccc53dba7e!8m2!3d25.0441333!4d121.536239!16s%2Fg%2F11c2plxy4r?authuser=0&entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" // 替換成實際連結
    },
    { 
        id: 3, 
        name: "校園影印店", 
        dialogue: "黑白影印每張優惠一元，彩色五元。", 
        mapX: 10, 
        mapY: 85
    },
    { 
        id: 4, 
        name: "學生餐廳A棟", 
        dialogue: "套餐加送一杯飲料！", 
        mapX: 10, 
        mapY: 85
    },
    { 
        id: 5, 
        name: "體育用品社", 
        dialogue: "運動鞋、球類全面九折！", 
        mapX: 70, 
        mapY: 70
    },
    { 
        id: 6, 
        name: "資訊樓電腦維修", 
        dialogue: "電腦維修工本費八五折優惠。", 
        mapX: 40, 
        mapY: 90
    },
    { 
        id: 7, 
        name: "創意烘焙坊", 
        dialogue: "購買麵包超過100元，贈送小甜點一份。", 
        mapX: 90, 
        mapY: 45
    },
    { 
        id: 8, 
        name: "校外機車行", 
        dialogue: "機車保養工資一律八折。", 
        mapX: 35, 
        mapY: 5
    }
    // 更多店家資料...
];


// --- 2. DOM 元素選取 ---

const vendorListElement = document.getElementById('vendorList'); // 店家列表容器
const dialogueTextElement = document.getElementById('dialogueText'); // 對話框文字元素
const mapIconElement = document.getElementById('mapIcon'); // 地圖圖標元素


// --- 3. 核心功能函數 ---

/**
 * @description 根據資料渲染店家列表到 HTML 中
 */
function renderVendorList() {
    // 遍歷店家資料陣列
    vendorData.forEach(vendor => {
        // 創建店家卡片元素
        const card = document.createElement('div');
        card.classList.add('vendor-card');
        card.setAttribute('data-id', vendor.id); // 儲存店家 ID
		
		// 恢復滑鼠懸停事件 (舊功能)
		card.addEventListener('mouseenter', () => handleVendorHoverIn(vendor));
        card.addEventListener('mouseleave', handleVendorHoverOut);

        // 設定滑鼠進入和離開事件監聽
        // 滑鼠進入卡片時，呼叫 handleVendorHoverIn 處理
        card.addEventListener('click', () => openDetailModal(vendor.id));
        // 滑鼠離開卡片時，呼叫 handleVendorHoverOut 處理
 

        // 設置卡片的 HTML 內容
        card.innerHTML = `
            <div class="vendor-image">
            <img src="${vendor.imageSrc}">
           </div>
            <div class="vendor-name">
        <span class="lang-zh">${vendor.name.zh}</span> 
        <span class="lang-en">${vendor.name.en}</span>
        </div>
        `;

        // 將卡片加入到店家列表容器中
        vendorListElement.appendChild(card);
    });
}

/**
 * @description 處理滑鼠懸停在店家卡片上時的邏輯
 * @param {Object} vendor - 當前懸停的店家資料物件
 */
function handleVendorHoverIn(vendor) {
    // 1. 更新對話框文字為該店家的優惠內容
    dialogueTextElement.textContent = vendor.dialogue[currentLang];

    // 2. 顯示地圖圖標並設置其位置
    mapIconElement.style.display = 'block'; // 顯示圖標
    // 設置圖標的水平位置 (mapX 是從左邊算的百分比)
    mapIconElement.style.left = `${vendor.mapX}%`; 
    // 設置圖標的垂直位置 (mapY 是從上邊算的百分比)
    mapIconElement.style.top = `${vendor.mapY}%`;
    
    // 3. (可選) 突出顯示當前卡片
    const currentCard = document.querySelector(`.vendor-card[data-id="${vendor.id}"]`);
    if (currentCard) {
        currentCard.classList.add('highlight'); // 這裡可以添加一個 CSS 類來突出顯示
    }
}

/**
 * @description 處理滑鼠離開店家卡片時的邏輯
 */
function handleVendorHoverOut() {
    // 1. 恢復對話框的初始文字
    dialogueTextElement.textContent = "將滑鼠移到右側店家，查看優惠內容與位置。";

    // 2. 隱藏地圖圖標
    mapIconElement.style.display = 'none';

    // 3. (可選) 移除所有卡片的突出顯示
    document.querySelectorAll('.vendor-card').forEach(card => {
        card.classList.remove('highlight');
    });
}

/**
 * @description 關閉模態窗口 (綁定到關閉按鈕)
 */
function closeModal() {
    // 隱藏模態窗口
    document.getElementById('n2').style.display = 'none'; 
    // 如果需要，可以移除 body 上的 overflow: hidden 屬性，讓頁面可以再次滾動
    // document.body.style.overflow = 'auto'; 
}

// 為了讓使用者可以測試，我們也需要一個打開模態窗口的函數
function openModal() {
    document.getElementById('n2').style.display = 'flex';
    // document.body.style.overflow = 'hidden'; 
}

window.openModal = openModal;


// --- 4. 程式碼初始化 ---

// 頁面加載完成後，執行店家列表渲染
window.onload = () => {
    renderVendorList();
    // 為了方便測試，預設打開 Modal

    
    // 將 closeModal 函數暴露到全局作用域，以便 HTML 中的 onclick 可以呼叫
	window.openModal = openModal;
    window.closeModal = closeModal; 
};



/*==================================modal-2===============================================*/

// --- 4. 詳情 Modal 相關函數 ---

const mainModal = document.getElementById('n2'); // 原本的 Modal
const detailModal = document.getElementById('detailModal'); // 新增的詳情 Modal
const detailImage = document.getElementById('detailImage');
const detailName = document.getElementById('detailName');
const detailAddress = document.getElementById('detailAddress');
const detailDialogue = document.getElementById('detailDialogue');
const googleMapBtn = document.getElementById('googleMapBtn');
let currentVendorDetail = null; // 用來儲存當前查看的店家資料

/**
 * @description 打開店家詳情 Modal
 * @param {number} id - 被點擊的店家 ID
 */
function openDetailModal(id) {
    // 1. 隱藏主 Modal
    mainModal.style.display = 'none';

    // 2. 查找店家資料
    const vendor = vendorData.find(v => v.id === id);
    if (!vendor) return;

    currentVendorDetail = vendor; // 儲存當前店家資料供跳轉使用
	
	const detailMenuContent = document.getElementById('detailMenuContent');

    // 3. 填充資料 (使用 currentLang 來顯示正確的語言)
    const lang = currentLang || 'zh'; // 確保有預設語言
    
    // 填充左側資訊
    detailImage.src = vendor.imageSrc;
    detailImage.alt = vendor.name[lang] + "照片";
    
    detailName.textContent = vendor.name[lang];
    detailAddress.textContent = vendor.address; // 假設地址不需要多語言
    
    // 填充特價/詳情
    detailDialogue.textContent = vendor.dialogue[lang]; 
	
	if (vendor.menuContent) {
    detailMenuContent.innerHTML = `<img src="${vendor.menuContent}" alt="${vendor.name[lang]} 菜單" style="width: 100%; height: auto;">`;
} else {
    // 如果沒有菜單圖片，可以顯示文字提示
    detailMenuContent.innerHTML = `<p class="lang-${lang}">尚無菜單資訊</p>`;
}
    
    // 4. 顯示詳情 Modal
    detailModal.style.display = 'flex';
}

/**
 * @description 關閉店家詳情 Modal，回到主 Modal
 */
function closeDetailModal() {
    detailModal.style.display = 'none'; // 隱藏詳情 Modal
    mainModal.style.display = 'flex';  // 顯示主 Modal (回到上一個)
    currentVendorDetail = null;
}

/**
 * @description 跳轉到 Google Maps
 */
function goToGoogleMap() {
    if (currentVendorDetail && currentVendorDetail.googleMapLink) {
        window.open(currentVendorDetail.googleMapLink, '_blank'); // 在新視窗開啟
    } else {
        alert("找不到地圖連結！");
    }
}

// 將函數暴露到全局，以便 HTML 中的 onclick 可以呼叫
window.closeDetailModal = closeDetailModal; 
window.goToGoogleMap = goToGoogleMap;

