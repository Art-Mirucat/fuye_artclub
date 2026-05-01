document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');

    // 汉堡菜单点击切换逻辑
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // 通用图片放大查看功能
    const zoomableImages = document.querySelectorAll('.zoomable-image');
    if (zoomableImages.length > 0) {
        // 如果不存在则创建模态框
        let zoomModal = document.getElementById('commonZoomModal');
        if (!zoomModal) {
            zoomModal = document.createElement('div');
            zoomModal.id = 'commonZoomModal';
            zoomModal.className = 'image-modal-overlay';
            zoomModal.innerHTML = `
                <div class="image-modal-content">
                    <span class="close-image-modal">&times;</span>
                    <img class="modal-full-image" id="zoomModalImg" src="" alt="放大图">
                </div>
            `;
            document.body.appendChild(zoomModal);

            // 点击背景或关闭按钮时关闭
            zoomModal.onclick = (e) => {
                if (e.target === zoomModal || e.target.classList.contains('close-image-modal')) {
                    zoomModal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            };
        }

        const modalImg = document.getElementById('zoomModalImg');
        zoomableImages.forEach(img => {
            img.addEventListener('click', () => {
                if (modalImg) {
                    modalImg.src = img.src;
                }
                zoomModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // 禁止页面滚动
            });
        });
    }

    // 窗口缩放时临时禁用动画，防止导航栏菜单“乱跑”
    let resizeTimer;
    window.addEventListener('resize', () => {
        document.body.classList.add('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
        }, 400);

        // 切换回电脑端布局时，强制关闭已打开的移动端菜单
        if (window.innerWidth > 768) {
            if (hamburgerMenu && navLinks) {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        }
    });

    // 启动资源加载监听
    initResourceLoader();
});

/**
 * 隐藏加载动画 (加入暴力样式修正)
 */
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
        loadingScreen.classList.add('hidden');
        // 加入暴力显示修正，确保在特定浏览器下也能消失
        setTimeout(() => { loadingScreen.style.display = 'none'; }, 500);
    }
}

/**
 * 同时监听图片和字体的加载状态
 */
async function initResourceLoader() {
    const imagePromise = new Promise((resolve) => {
        const images = document.images;
        const totalImages = images.length;
        let loadedImages = 0;

        if (totalImages === 0) {
            resolve();
            return;
        }

        const imageLoaded = () => {
            loadedImages++;
            if (loadedImages >= totalImages) {
                resolve();
            }
        };

        for (let i = 0; i < totalImages; i++) {
            if (images[i].complete) {
                imageLoaded();
            } else {
                images[i].addEventListener('load', imageLoaded);
                images[i].addEventListener('error', imageLoaded);
            }
        }
    });

    // 监听字体加载 (加入 race 机制防止字体下载卡死)
    const fontPromise = Promise.race([
        document.fonts.ready,
        new Promise(resolve => setTimeout(resolve, 3000)) // 3秒没加载完就不等了
    ]);

    // 等待图片和字体都就绪
    try {
        await Promise.all([imagePromise, fontPromise]);
        hideLoadingScreen();
    } catch (err) {
        console.error("资源加载出错:", err);
        hideLoadingScreen(); // 出错也隐藏，防止卡死
    }
}

/**
 * 兜底方案：确保在所有资源彻底加载完毕后隐藏
 */
window.addEventListener('load', () => {
    hideLoadingScreen();
});

// 如果 5 秒后还没加载完，强制关闭加载动画 (将原本的10秒缩短，提升体验)
setTimeout(hideLoadingScreen, 5000);
