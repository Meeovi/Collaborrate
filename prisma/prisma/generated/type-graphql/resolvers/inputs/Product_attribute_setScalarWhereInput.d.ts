import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Product_attribute_setScalarWhereInput {
    AND?: Product_attribute_setScalarWhereInput[] | undefined;
    OR?: Product_attribute_setScalarWhereInput[] | undefined;
    NOT?: Product_attribute_setScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    based_on?: StringNullableFilter | undefined;
    attribute_id?: IntFilter | undefined;
}
