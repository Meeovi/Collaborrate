import { BigIntFilter } from "../inputs/BigIntFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Tax_ruleWhereInput {
    AND?: Tax_ruleWhereInput[] | undefined;
    OR?: Tax_ruleWhereInput[] | undefined;
    NOT?: Tax_ruleWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    tax_rate?: StringNullableFilter | undefined;
    prod_id?: BigIntFilter | undefined;
    products?: StringNullableFilter | undefined;
}
