import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ShipmentsScalarWhereWithAggregatesInput {
    AND?: ShipmentsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ShipmentsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ShipmentsScalarWhereWithAggregatesInput[] | undefined;
    product?: StringNullableWithAggregatesFilter | undefined;
    speed_grade?: StringNullableWithAggregatesFilter | undefined;
    ship_date?: DateTimeNullableWithAggregatesFilter | undefined;
    carrier_name?: StringWithAggregatesFilter | undefined;
    transit_time?: StringNullableWithAggregatesFilter | undefined;
    tracking_url?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    client_id?: StringNullableWithAggregatesFilter | undefined;
    client_secret?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    website?: StringNullableWithAggregatesFilter | undefined;
}
