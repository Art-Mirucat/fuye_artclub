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

    // 页面加载完成后隐藏加载动画
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
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
});

// 确保在所有资源加载完毕后彻底隐藏加载动画
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
    }
});
