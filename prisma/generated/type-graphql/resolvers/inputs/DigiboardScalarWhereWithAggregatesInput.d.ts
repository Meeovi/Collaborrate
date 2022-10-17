import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class DigiboardScalarWhereWithAggregatesInput {
    AND?: DigiboardScalarWhereWithAggregatesInput[] | undefined;
    OR?: DigiboardScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DigiboardScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    board?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    student?: StringNullableWithAggregatesFilter | undefined;
    course?: StringNullableWithAggregatesFilter | undefined;
}
