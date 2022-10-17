import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ReportsWhereInput {
    AND?: ReportsWhereInput[] | undefined;
    OR?: ReportsWhereInput[] | undefined;
    NOT?: ReportsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    customer?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    quantity?: DecimalNullableFilter | undefined;
    subtotal?: StringNullableFilter | undefined;
    applied_coupon?: StringNullableFilter | undefined;
    created?: DateTimeNullableFilter | undefined;
    updated?: DateTimeNullableFilter | undefined;
    ip_address?: StringNullableFilter | undefined;
}
