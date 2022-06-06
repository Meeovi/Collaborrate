import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SourceWhereInput {
    AND?: SourceWhereInput[] | undefined;
    OR?: SourceWhereInput[] | undefined;
    NOT?: SourceWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    code?: IntFilter | undefined;
    enabled?: BoolNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    latitude?: StringNullableFilter | undefined;
    longitude?: StringNullableFilter | undefined;
    pickup_location?: BoolNullableFilter | undefined;
    contact_name?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    phone?: DecimalNullableFilter | undefined;
    fax?: DecimalNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    street?: StringNullableFilter | undefined;
    postcode?: DecimalNullableFilter | undefined;
}
