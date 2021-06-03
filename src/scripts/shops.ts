import Shops from "../components/Shops";




const app = async () => {
    const searchForm = document.getElementById('search-form');

    searchForm!.addEventListener('submit', e => {
        e.preventDefault();

        // @ts-ignore
        const searchValue = document.getElementById('search-form-input')!.value;

        window.location = 'shops.html?q=' + searchValue;

    })

    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get('q');

    document.getElementById('shops')!.innerHTML = await Shops({shopName: q, order: 'asc'});
}

app();
