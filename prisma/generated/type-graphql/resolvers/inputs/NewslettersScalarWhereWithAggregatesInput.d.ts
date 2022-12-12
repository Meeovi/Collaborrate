import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class NewslettersScalarWhereWithAggregatesInput {
    AND?: NewslettersScalarWhereWithAggregatesInput[] | undefined;
    OR?: NewslettersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: NewslettersScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    customer_first_name?: StringNullableWithAggregatesFilter | undefined;
    customer_last_name?: StringNullableWithAggregatesFilter | undefined;
    store?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    websites?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    cust_id?: IntWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
}
