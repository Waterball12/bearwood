import Data from "../shop.json";
import {RestShops} from "../types/Shop";

export interface ShopParams {
    order: "asc" | "desc";
    shopName?: string | null;
}

const Shops = (props: ShopParams) => {
    const shopData = Data as RestShops;

    let template = "";

    shopData.data.forEach(x => {
        template = template.concat(`
            <div class="col-sm-12 col-md-6">
                <div class="card">
                    <div class="card-body">
                        ${x.organization_name}
                    </div>
                </div>
            </div>
        `)
    });

    return template;
};

export default Shops;
