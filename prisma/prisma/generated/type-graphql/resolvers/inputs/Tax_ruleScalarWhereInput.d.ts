import { BigIntFilter } from "../inputs/BigIntFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Tax_ruleScalarWhereInput {
    AND?: Tax_ruleScalarWhereInput[] | undefined;
    OR?: Tax_ruleScalarWhereInput[] | undefined;
    NOT?: Tax_ruleScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    tax_rate?: StringNullableFilter | undefined;
    prod_id?: BigIntFilter | undefined;
}
