import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SourceScalarWhereWithAggregatesInput {
    AND?: SourceScalarWhereWithAggregatesInput[] | undefined;
    OR?: SourceScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SourceScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    code?: IntWithAggregatesFilter | undefined;
    enabled?: BoolNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    latitude?: StringNullableWithAggregatesFilter | undefined;
    longitude?: StringNullableWithAggregatesFilter | undefined;
    pickup_location?: BoolNullableWithAggregatesFilter | undefined;
    contact_name?: StringNullableWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    phone?: DecimalNullableWithAggregatesFilter | undefined;
    fax?: DecimalNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    state?: StringNullableWithAggregatesFilter | undefined;
    city?: StringNullableWithAggregatesFilter | undefined;
    street?: StringNullableWithAggregatesFilter | undefined;
    postcode?: DecimalNullableWithAggregatesFilter | undefined;
}
