import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OpportunitiesWhereInput {
    AND?: OpportunitiesWhereInput[] | undefined;
    OR?: OpportunitiesWhereInput[] | undefined;
    NOT?: OpportunitiesWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    amount?: StringNullableFilter | undefined;
    sales_stage?: StringNullableFilter | undefined;
    currency?: StringNullableFilter | undefined;
    probability?: StringNullableFilter | undefined;
    next_step?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    assigned_to?: StringNullableFilter | undefined;
    lead_source?: StringNullableFilter | undefined;
    campaign?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    account_name?: StringNullableFilter | undefined;
    expected_close_date?: StringNullableFilter | undefined;
}
