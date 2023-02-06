import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ReviewsScalarWhereWithAggregatesInput {
    AND?: ReviewsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReviewsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReviewsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    first_name?: StringNullableWithAggregatesFilter | undefined;
    last_name?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    websites?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
