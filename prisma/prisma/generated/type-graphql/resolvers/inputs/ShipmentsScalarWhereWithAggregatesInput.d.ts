import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ShipmentsScalarWhereWithAggregatesInput {
    AND?: ShipmentsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ShipmentsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ShipmentsScalarWhereWithAggregatesInput[] | undefined;
    product?: StringWithAggregatesFilter | undefined;
    speed_grade?: StringWithAggregatesFilter | undefined;
    ship_date?: DateTimeNullableWithAggregatesFilter | undefined;
    carrier_name?: StringWithAggregatesFilter | undefined;
    transit_time?: StringNullableWithAggregatesFilter | undefined;
    tracking_url?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
}
