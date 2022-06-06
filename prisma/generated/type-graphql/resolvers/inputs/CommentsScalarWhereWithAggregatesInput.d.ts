import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CommentsScalarWhereWithAggregatesInput {
    AND?: CommentsScalarWhereWithAggregatesInput[] | undefined;
    OR?: CommentsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CommentsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    customer_name?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    response?: StringNullableWithAggregatesFilter | undefined;
    published?: DateTimeNullableWithAggregatesFilter | undefined;
    cust_id?: IntWithAggregatesFilter | undefined;
}
