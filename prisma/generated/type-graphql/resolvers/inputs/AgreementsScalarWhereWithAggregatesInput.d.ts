import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class AgreementsScalarWhereWithAggregatesInput {
    AND?: AgreementsScalarWhereWithAggregatesInput[] | undefined;
    OR?: AgreementsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AgreementsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    created?: DateTimeNullableWithAggregatesFilter | undefined;
    excerpt?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    mediamanager?: StringNullableWithAggregatesFilter | undefined;
    reference_id?: StringNullableWithAggregatesFilter | undefined;
    shop_id?: StringNullableWithAggregatesFilter | undefined;
    updated?: DateTimeNullableWithAggregatesFilter | undefined;
    user_id?: StringNullableWithAggregatesFilter | undefined;
}
