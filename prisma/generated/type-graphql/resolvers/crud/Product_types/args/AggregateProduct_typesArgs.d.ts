import { Product_typesOrderByWithRelationInput } from "../../../inputs/Product_typesOrderByWithRelationInput";
import { Product_typesWhereInput } from "../../../inputs/Product_typesWhereInput";
import { Product_typesWhereUniqueInput } from "../../../inputs/Product_typesWhereUniqueInput";
export declare class AggregateProduct_typesArgs {
    where?: Product_typesWhereInput | undefined;
    orderBy?: Product_typesOrderByWithRelationInput[] | undefined;
    cursor?: Product_typesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
