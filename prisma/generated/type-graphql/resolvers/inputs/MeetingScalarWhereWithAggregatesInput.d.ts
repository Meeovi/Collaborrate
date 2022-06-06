import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class MeetingScalarWhereWithAggregatesInput {
    AND?: MeetingScalarWhereWithAggregatesInput[] | undefined;
    OR?: MeetingScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MeetingScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    subject?: StringNullableWithAggregatesFilter | undefined;
    start_date?: StringNullableWithAggregatesFilter | undefined;
    end_date?: StringNullableWithAggregatesFilter | undefined;
    duration?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    related_to?: StringNullableWithAggregatesFilter | undefined;
    reminders?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    assigned_to?: StringNullableWithAggregatesFilter | undefined;
    invitees?: StringNullableWithAggregatesFilter | undefined;
    scheduling?: StringNullableWithAggregatesFilter | undefined;
}
