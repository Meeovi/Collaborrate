import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class AgreementsScalarWhereWithAggregatesInput {
    AND?: AgreementsScalarWhereWithAggregatesInput[] | undefined;
    OR?: AgreementsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AgreementsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    reference_id?: IntWithAggregatesFilter | undefined;
    created?: DateTimeNullableWithAggregatesFilter | undefined;
    updated?: DateTimeNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    excerpt?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    user_id?: IntWithAggregatesFilter | undefined;
    shop_id?: IntWithAggregatesFilter | undefined;
}
