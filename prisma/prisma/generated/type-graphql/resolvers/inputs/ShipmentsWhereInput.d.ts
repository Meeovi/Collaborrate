import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ShipmentsWhereInput {
    AND?: ShipmentsWhereInput[] | undefined;
    OR?: ShipmentsWhereInput[] | undefined;
    NOT?: ShipmentsWhereInput[] | undefined;
    product?: StringFilter | undefined;
    speed_grade?: StringFilter | undefined;
    ship_date?: DateTimeNullableFilter | undefined;
    carrier_name?: StringFilter | undefined;
    transit_time?: StringNullableFilter | undefined;
    tracking_url?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    id?: BigIntFilter | undefined;
}
