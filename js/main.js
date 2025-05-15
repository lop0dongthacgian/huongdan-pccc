document.addEventListener('DOMContentLoaded', function() {
    const menuHuongDan = document.getElementById('menu-huongdan');
    const menuTroChoi = document.getElementById('menu-trochoi');
    const trangChuSection = document.getElementById('trang-chu');
    const huongDanSection = document.getElementById('noi-dung-huongdan');
    const navLinks = document.querySelectorAll('nav a');

    function showSection(sectionId) {
        trangChuSection.classList.add('hidden');
        huongDanSection.classList.add('hidden');

        document.querySelector('nav a.active')?.classList.remove('active');

        const targetSection = document.getElementById(`noi-dung-${sectionId}`);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }

        const activeNavLink = document.querySelector(`nav a[href="#${sectionId}"]`);
        if (activeNavLink) {
            activeNavLink.classList.add('active');
        }
    }

    if (menuHuongDan) {
        menuHuongDan.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('huongdan');
        });
    }

    //  Không cần xử lý click cho "Trò chơi" vì nó là liên kết trực tiếp

    // Hiển thị trang chủ khi tải trang
    if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        showSection(sectionId);
    } else if (trangChuSection) {
        trangChuSection.classList.remove('hidden');
        document.querySelector('nav a[href="index.html"]')?.classList.add('active');
    }
});