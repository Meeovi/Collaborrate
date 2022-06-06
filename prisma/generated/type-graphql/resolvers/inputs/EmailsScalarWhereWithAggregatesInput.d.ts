import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class EmailsScalarWhereWithAggregatesInput {
    AND?: EmailsScalarWhereWithAggregatesInput[] | undefined;
    OR?: EmailsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: EmailsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: DateTimeNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    subject?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    recipients?: StringNullableWithAggregatesFilter | undefined;
    cust_id?: IntWithAggregatesFilter | undefined;
}
