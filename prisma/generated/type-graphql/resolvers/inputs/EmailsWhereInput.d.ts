import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class EmailsWhereInput {
    AND?: EmailsWhereInput[] | undefined;
    OR?: EmailsWhereInput[] | undefined;
    NOT?: EmailsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: DateTimeNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    subject?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    recipients?: StringNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
    customers?: CustomersRelationFilter | undefined;
}
