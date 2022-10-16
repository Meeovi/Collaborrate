import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class OpportunitiesScalarWhereWithAggregatesInput {
    AND?: OpportunitiesScalarWhereWithAggregatesInput[] | undefined;
    OR?: OpportunitiesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OpportunitiesScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    amount?: StringNullableWithAggregatesFilter | undefined;
    sales_stage?: StringNullableWithAggregatesFilter | undefined;
    currency?: StringNullableWithAggregatesFilter | undefined;
    probability?: StringNullableWithAggregatesFilter | undefined;
    next_step?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    assigned_to?: StringNullableWithAggregatesFilter | undefined;
    lead_source?: StringNullableWithAggregatesFilter | undefined;
    campaign?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    account_name?: StringNullableWithAggregatesFilter | undefined;
    expected_close_date?: StringNullableWithAggregatesFilter | undefined;
}
