const lineContainer = document.getElementById("hamburger");
const menu = document.querySelector(".menu");
const searchInput = document.getElementById('search-input');
const serviceItems = document.querySelectorAll('.service-item');

// Hamburger menu toggle
lineContainer.addEventListener("click", () => {
    const isActive = lineContainer.classList.toggle("active");
    menu.classList.toggle("active");
    lineContainer.setAttribute("aria-expanded", isActive);
});

// Search functionality with debounce
let timeout;
searchInput.addEventListener('input', function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        const filter = searchInput.value.toLowerCase();

        // Show all items if search input is empty
        if (filter === '') {
            serviceItems.forEach(item => {
                item.style.display = 'block';
            });
            return;
        }

        serviceItems.forEach(item => {
            const title = item.textContent.toLowerCase();
            item.style.display = title.includes(filter) ? 'block' : 'none';
        });
    }, 300); // Delay in milliseconds
});

document.addEventListener('DOMContentLoaded', () => {
    const snowflakeCount = 50;
    const body = document.body;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration
        body.appendChild(snowflake);
    }
});