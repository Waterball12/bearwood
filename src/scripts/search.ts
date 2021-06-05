const searchForm = document.getElementById('search-form');

searchForm!.addEventListener('submit', e => {
    e.preventDefault();
    // @ts-ignore
    const searchValue = document.getElementById('search-form-input')!.value;

    if (searchValue.length == 0) {
        return;
    }

    window.location = 'shops.html?q=' + searchValue;
})
