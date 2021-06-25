import Shops from "../components/Shops";


const app = async () => {


    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get('q');

    document.getElementById('shops')!.innerHTML = await Shops({shopName: q, order: 'asc'});
}

app();
