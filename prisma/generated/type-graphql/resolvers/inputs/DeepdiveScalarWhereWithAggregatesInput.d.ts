import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class DeepdiveScalarWhereWithAggregatesInput {
    AND?: DeepdiveScalarWhereWithAggregatesInput[] | undefined;
    OR?: DeepdiveScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DeepdiveScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    end_date?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    attendees?: StringNullableWithAggregatesFilter | undefined;
    login?: StringNullableWithAggregatesFilter | undefined;
    start_date?: StringNullableWithAggregatesFilter | undefined;
    whid?: StringNullableWithAggregatesFilter | undefined;
}
