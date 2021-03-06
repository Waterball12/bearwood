import {RestShop} from "../types/Shop";


const Shop = (props: RestShop) => {
    const img = Array.isArray(props.img) ? props.img[0] : "";

    const email = props.email != null ?  `
        <li class="list-group-item justify-content-start align-content-center">
            <i class="fas fa-envelope fa-1x me-4 color-text-secondary"></i>
            <small class="color-text-secondary">${props.email}</small>
        </li>
    ` : "";

    const website = props.website ? `
        <li class="list-group-item justify-content-start align-content-center">
            <i class="fas fa-globe-europe fa-1x me-4 color-text-secondary"></i>
            <small class="color-text-secondary"><a href="${props.website}" target="_blank">${props.website.replace("https://", "")}</a></small>
        </li>
    ` : "";

    return `
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-badges">
                    <div class="badge badge-pill bg-primary fw-light">${props.category.charAt(0).toUpperCase() + props.category.slice(1)}</div>
                </div>
                <img class="card-img-top" src="${img}" alt="business image" />
                <div class="card-body">
                    <h5 class="card-title fw-bold">${props.organization_name}</h5>
                    <p class="card-text">${props.description}</p>                 
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item justify-content-start align-content-center">
                            <i class="fas fa-map fa-1x me-4 color-text-secondary"></i>
                            <small class="color-text-secondary">${props.address}</small>
                        </li>
                        ${email}
                        ${website}
                        <li class="list-group-item justify-content-start align-content-center">
                            <i class="fas fa-phone fa-1x me-4 color-text-secondary"></i>
                            <small class="color-text-secondary">${props.telephone ?? "Not available"}</small>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    `
};

export default Shop;
