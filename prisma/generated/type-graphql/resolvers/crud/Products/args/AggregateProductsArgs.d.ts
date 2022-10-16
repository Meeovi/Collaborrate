import { ProductsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ProductsOrderByWithRelationAndSearchRelevanceInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";
export declare class AggregateProductsArgs {
    where?: ProductsWhereInput | undefined;
    orderBy?: ProductsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ProductsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
