import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class VisitsScalarWhereWithAggregatesInput {
    AND?: VisitsScalarWhereWithAggregatesInput[] | undefined;
    OR?: VisitsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: VisitsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    location?: StringNullableWithAggregatesFilter | undefined;
    username?: StringNullableWithAggregatesFilter | undefined;
    reason?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    emergency?: StringNullableWithAggregatesFilter | undefined;
    start_date?: StringNullableWithAggregatesFilter | undefined;
    end_date?: StringNullableWithAggregatesFilter | undefined;
    task?: StringNullableWithAggregatesFilter | undefined;
    meeting?: StringNullableWithAggregatesFilter | undefined;
}
