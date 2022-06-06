import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class MeetingWhereInput {
    AND?: MeetingWhereInput[] | undefined;
    OR?: MeetingWhereInput[] | undefined;
    NOT?: MeetingWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    subject?: StringNullableFilter | undefined;
    start_date?: StringNullableFilter | undefined;
    end_date?: StringNullableFilter | undefined;
    duration?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    related_to?: StringNullableFilter | undefined;
    reminders?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    assigned_to?: StringNullableFilter | undefined;
    invitees?: StringNullableFilter | undefined;
    scheduling?: StringNullableFilter | undefined;
}
