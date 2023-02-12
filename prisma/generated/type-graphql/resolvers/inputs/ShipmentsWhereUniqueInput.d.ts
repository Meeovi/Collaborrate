import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ShipmentsWhereInput } from "../inputs/ShipmentsWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ShipmentsWhereUniqueInput {
    id?: bigint | undefined;
    AND?: ShipmentsWhereInput[] | undefined;
    OR?: ShipmentsWhereInput[] | undefined;
    NOT?: ShipmentsWhereInput[] | undefined;
    product?: StringNullableFilter | undefined;
    speed_grade?: StringNullableFilter | undefined;
    ship_date?: DateTimeNullableFilter | undefined;
    carrier_name?: StringFilter | undefined;
    transit_time?: StringNullableFilter | undefined;
    tracking_url?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    client_id?: StringNullableFilter | undefined;
    client_secret?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    website?: StringNullableFilter | undefined;
}
