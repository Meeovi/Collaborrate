import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class NewslettersWhereInput {
    AND?: NewslettersWhereInput[] | undefined;
    OR?: NewslettersWhereInput[] | undefined;
    NOT?: NewslettersWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringFilter | undefined;
    customer_first_name?: StringNullableFilter | undefined;
    customer_last_name?: StringNullableFilter | undefined;
    store?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    websites?: StringNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
    customers?: StringNullableFilter | undefined;
}
