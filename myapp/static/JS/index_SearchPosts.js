document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');

    if (!searchInput) {
        console.error("Search input with ID 'searchInput' not found.");
        return;
    }

    searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toLowerCase();
        const posts = document.querySelectorAll('.blog-post');

        posts.forEach(post => {

            const title = post.querySelector('.post-title')?.textContent.toLowerCase() || '';
            const paragraphs = Array.from(post.querySelectorAll('p'))
                .map(p => p.textContent.toLowerCase())
                .join(' ');

            const combinedContent = title + ' ' + paragraphs;


            if (combinedContent.includes(filter)) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        });
    });
});