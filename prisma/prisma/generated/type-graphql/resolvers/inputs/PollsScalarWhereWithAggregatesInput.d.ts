import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PollsScalarWhereWithAggregatesInput {
    AND?: PollsScalarWhereWithAggregatesInput[] | undefined;
    OR?: PollsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PollsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    excerpt?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    published?: DateTimeNullableWithAggregatesFilter | undefined;
    question?: StringNullableWithAggregatesFilter | undefined;
    response?: StringNullableWithAggregatesFilter | undefined;
    categories?: StringNullableWithAggregatesFilter | undefined;
    articles?: StringNullableWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    users?: StringNullableWithAggregatesFilter | undefined;
}
