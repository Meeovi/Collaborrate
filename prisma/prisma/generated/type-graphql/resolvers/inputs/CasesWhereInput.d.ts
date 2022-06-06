import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CasesWhereInput {
    AND?: CasesWhereInput[] | undefined;
    OR?: CasesWhereInput[] | undefined;
    NOT?: CasesWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    case_number?: IntNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    subject?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    resolution?: StringNullableFilter | undefined;
    priority?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    account_name?: StringNullableFilter | undefined;
    assigned_to?: StringNullableFilter | undefined;
    date_modified?: DateTimeNullableFilter | undefined;
}
