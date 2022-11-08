import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class AgreementsScalarWhereWithAggregatesInput {
    AND?: AgreementsScalarWhereWithAggregatesInput[] | undefined;
    OR?: AgreementsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AgreementsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    reference_id?: StringNullableWithAggregatesFilter | undefined;
    created?: DateTimeNullableWithAggregatesFilter | undefined;
    updated?: DateTimeNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    excerpt?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    user_id?: StringNullableWithAggregatesFilter | undefined;
    shop_id?: StringNullableWithAggregatesFilter | undefined;
    mediamanager?: StringNullableWithAggregatesFilter | undefined;
}
