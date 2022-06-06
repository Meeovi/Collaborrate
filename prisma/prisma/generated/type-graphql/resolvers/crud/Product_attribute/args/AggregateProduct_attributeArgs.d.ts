import { Product_attributeOrderByWithRelationInput } from "../../../inputs/Product_attributeOrderByWithRelationInput";
import { Product_attributeWhereInput } from "../../../inputs/Product_attributeWhereInput";
import { Product_attributeWhereUniqueInput } from "../../../inputs/Product_attributeWhereUniqueInput";
export declare class AggregateProduct_attributeArgs {
    where?: Product_attributeWhereInput | undefined;
    orderBy?: Product_attributeOrderByWithRelationInput[] | undefined;
    cursor?: Product_attributeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
