import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Core_storeWhereInput {
    AND?: Core_storeWhereInput[] | undefined;
    OR?: Core_storeWhereInput[] | undefined;
    NOT?: Core_storeWhereInput[] | undefined;
    id?: IntFilter | undefined;
    key?: StringNullableFilter | undefined;
    value?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    environment?: StringNullableFilter | undefined;
    tag?: StringNullableFilter | undefined;
}
