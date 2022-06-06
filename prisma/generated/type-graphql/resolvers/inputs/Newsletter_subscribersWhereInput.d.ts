import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Newsletter_subscribersWhereInput {
    AND?: Newsletter_subscribersWhereInput[] | undefined;
    OR?: Newsletter_subscribersWhereInput[] | undefined;
    NOT?: Newsletter_subscribersWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringFilter | undefined;
    customer_first_name?: StringNullableFilter | undefined;
    customer_last_name?: StringNullableFilter | undefined;
    store?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    websites?: StringNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
    customers?: CustomersRelationFilter | undefined;
}
