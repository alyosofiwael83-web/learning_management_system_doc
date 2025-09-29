function setActiveLink() {
    // يأخذ المسار الحالي من الرابط بدون اسم النطاق
    const currentPath = window.location.pathname; 

    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        // يأخذ المسار من كل رابط في الشريط الجانبي
        const linkPath = new URL(link.href).pathname;

        // يقارن إذا كان المسار الحالي ينتهي بنفس مسار الرابط
        if (currentPath === linkPath) {
            // يزيل التفعيل من أي عنصر آخر
            document.querySelectorAll('.nav-item.active, .submenu a.active').forEach(i => i.classList.remove('active'));
            
            // يفعل الرابط الحالي
            link.classList.add('active');
            
            // يفتح القائمة المنسدلة إذا كان الرابط بداخلها
            const parentNavItem = link.closest('.nav-item');
            if (parentNavItem) {
                parentNavItem.classList.add('active');
            }
        }
    });
}
