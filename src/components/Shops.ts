import Data from "../shop.json";
import {RestShops} from "../types/Shop";
import Fuse from "fuse.js";
import NotFound from "./NotFound";
import Shop from "./Shop";

export interface ShopParams {
    order: "asc" | "desc";
    shopName?: string | null;
}

const Shops = (props: ShopParams) => {
    const shopData = Data as RestShops;

    let template = "";

    if (props.shopName != null) {

        const searchResult = new Fuse(shopData.data, {
            keys: ['organization_name', 'description', 'category']
        }).search(props.shopName || '');

        if (searchResult == null || searchResult.length <= 0) {
            return NotFound(props.shopName);
        }

        searchResult.map(x => x.item).forEach(x => {
            template = template.concat(Shop(x))
        });
    } else {
        shopData.data.forEach(x => {
            template = template.concat(Shop(x))
        });
    }

    return template;
};



export default Shops;
