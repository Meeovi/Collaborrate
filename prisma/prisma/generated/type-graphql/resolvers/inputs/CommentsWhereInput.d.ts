import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CommentsWhereInput {
    AND?: CommentsWhereInput[] | undefined;
    OR?: CommentsWhereInput[] | undefined;
    NOT?: CommentsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    customer_name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    response?: StringNullableFilter | undefined;
    published?: DateTimeNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
    customers?: CustomersRelationFilter | undefined;
}
