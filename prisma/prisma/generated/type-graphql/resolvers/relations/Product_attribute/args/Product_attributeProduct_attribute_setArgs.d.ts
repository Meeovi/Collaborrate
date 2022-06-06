import { Product_attribute_setOrderByWithRelationInput } from "../../../inputs/Product_attribute_setOrderByWithRelationInput";
import { Product_attribute_setWhereInput } from "../../../inputs/Product_attribute_setWhereInput";
import { Product_attribute_setWhereUniqueInput } from "../../../inputs/Product_attribute_setWhereUniqueInput";
export declare class Product_attributeProduct_attribute_setArgs {
    where?: Product_attribute_setWhereInput | undefined;
    orderBy?: Product_attribute_setOrderByWithRelationInput[] | undefined;
    cursor?: Product_attribute_setWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "based_on" | "attribute_id"> | undefined;
}
