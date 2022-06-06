import { ProductsCreateInput } from "../../../inputs/ProductsCreateInput";
import { ProductsUpdateInput } from "../../../inputs/ProductsUpdateInput";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";
export declare class UpsertProductsArgs {
    where: ProductsWhereUniqueInput;
    create: ProductsCreateInput;
    update: ProductsUpdateInput;
}
