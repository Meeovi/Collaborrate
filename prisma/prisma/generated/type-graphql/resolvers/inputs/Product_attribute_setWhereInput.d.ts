import { IntFilter } from "../inputs/IntFilter";
import { Product_attributeRelationFilter } from "../inputs/Product_attributeRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Product_attribute_setWhereInput {
    AND?: Product_attribute_setWhereInput[] | undefined;
    OR?: Product_attribute_setWhereInput[] | undefined;
    NOT?: Product_attribute_setWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    based_on?: StringNullableFilter | undefined;
    attribute_id?: IntFilter | undefined;
    product_attribute?: Product_attributeRelationFilter | undefined;
}
