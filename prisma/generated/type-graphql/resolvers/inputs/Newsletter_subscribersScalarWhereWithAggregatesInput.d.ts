import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class Newsletter_subscribersScalarWhereWithAggregatesInput {
    AND?: Newsletter_subscribersScalarWhereWithAggregatesInput[] | undefined;
    OR?: Newsletter_subscribersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Newsletter_subscribersScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    customer_first_name?: StringNullableWithAggregatesFilter | undefined;
    customer_last_name?: StringNullableWithAggregatesFilter | undefined;
    store?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    websites?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    cust_id?: IntWithAggregatesFilter | undefined;
}
