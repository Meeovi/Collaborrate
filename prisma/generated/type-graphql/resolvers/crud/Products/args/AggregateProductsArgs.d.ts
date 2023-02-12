import { ProductsOrderByWithRelationInput } from "../../../inputs/ProductsOrderByWithRelationInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";
export declare class AggregateProductsArgs {
    where?: ProductsWhereInput | undefined;
    orderBy?: ProductsOrderByWithRelationInput[] | undefined;
    cursor?: ProductsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
