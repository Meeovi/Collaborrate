import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class MessagesWhereInput {
    AND?: MessagesWhereInput[] | undefined;
    OR?: MessagesWhereInput[] | undefined;
    NOT?: MessagesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    from?: StringNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    subject?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    sender?: StringNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
    media?: StringNullableFilter | undefined;
    staff_id?: IntNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
}
