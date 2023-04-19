import {StoreItem} from "../components/StoreItem";

export function Store() {
    const items = {id: 1, name: "item", price: 200, imgUrl: "img/png"}
    return (
        <StoreItem {...items}/>
    )
}