import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EmailsWhereInput } from "../inputs/EmailsWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class EmailsWhereUniqueInput {
    id?: number | undefined;
    AND?: EmailsWhereInput[] | undefined;
    OR?: EmailsWhereInput[] | undefined;
    NOT?: EmailsWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    subject?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
    bcc?: StringNullableFilter | undefined;
    cc?: StringNullableFilter | undefined;
    from?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    staff_id?: IntNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
}
