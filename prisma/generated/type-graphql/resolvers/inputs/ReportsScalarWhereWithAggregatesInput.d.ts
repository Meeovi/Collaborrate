import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ReportsScalarWhereWithAggregatesInput {
    AND?: ReportsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReportsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReportsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    customer?: StringNullableWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
    quantity?: DecimalNullableWithAggregatesFilter | undefined;
    subtotal?: StringNullableWithAggregatesFilter | undefined;
    applied_coupon?: StringNullableWithAggregatesFilter | undefined;
    created?: DateTimeNullableWithAggregatesFilter | undefined;
    updated?: DateTimeNullableWithAggregatesFilter | undefined;
    ip_address?: StringNullableWithAggregatesFilter | undefined;
}
