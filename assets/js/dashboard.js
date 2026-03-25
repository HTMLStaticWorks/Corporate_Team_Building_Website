document.addEventListener('DOMContentLoaded', () => {
    
    // ---- Dashboard Sidebar Toggle (Mobile) ----
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // Close sidebar on click outside in mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 991) {
                if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target) && sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }


    // ---- Dashboard Tabs Logic ----
    const navLinks = document.querySelectorAll('.sidebar-nav a[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    if (navLinks.length > 0 && tabContents.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active classes
                navLinks.forEach(l => l.classList.remove('active'));
                tabContents.forEach(c => c.style.display = 'none');
                
                // Add active to clicked
                link.classList.add('active');
                const targetId = link.getAttribute('data-tab');
                const targetTab = document.getElementById(`tab-${targetId}`);
                
                // Show target content
                if (targetTab) {
                    targetTab.style.display = 'block';
                }

                // If mobile, close sidebar on nav click
                if (window.innerWidth <= 991 && sidebar) {
                    sidebar.classList.remove('active');
                }
            });
        });
    }
});
