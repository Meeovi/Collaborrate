import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { BrandsWhereInput } from "../inputs/BrandsWhereInput";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class BrandsWhereUniqueInput {
    id?: bigint | undefined;
    AND?: BrandsWhereInput[] | undefined;
    OR?: BrandsWhereInput[] | undefined;
    NOT?: BrandsWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    code?: StringNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    isPublic?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    product?: BigIntNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    mediamanager?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    workspaces?: StringNullableFilter | undefined;
}
