import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class FullfillmentsScalarWhereWithAggregatesInput {
    AND?: FullfillmentsScalarWhereWithAggregatesInput[] | undefined;
    OR?: FullfillmentsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: FullfillmentsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    shipping_zones?: StringNullableWithAggregatesFilter | undefined;
    company?: StringNullableWithAggregatesFilter | undefined;
    address?: StringNullableWithAggregatesFilter | undefined;
    address_two?: StringNullableWithAggregatesFilter | undefined;
    city?: StringNullableWithAggregatesFilter | undefined;
    state?: StringNullableWithAggregatesFilter | undefined;
    zipcode?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    country_area?: StringNullableWithAggregatesFilter | undefined;
    phone?: StringNullableWithAggregatesFilter | undefined;
    pickup?: StringNullableWithAggregatesFilter | undefined;
    stock?: StringNullableWithAggregatesFilter | undefined;
}
