import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WarehouseWhereInput } from "../inputs/WarehouseWhereInput";
export declare class WarehouseWhereUniqueInput {
    id?: bigint | undefined;
    AND?: WarehouseWhereInput[] | undefined;
    OR?: WarehouseWhereInput[] | undefined;
    NOT?: WarehouseWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    postal?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    category?: StringNullableFilter | undefined;
    isPublic?: StringNullableFilter | undefined;
}
