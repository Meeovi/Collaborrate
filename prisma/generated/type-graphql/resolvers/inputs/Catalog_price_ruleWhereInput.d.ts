import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Catalog_price_ruleWhereInput {
    AND?: Catalog_price_ruleWhereInput[] | undefined;
    OR?: Catalog_price_ruleWhereInput[] | undefined;
    NOT?: Catalog_price_ruleWhereInput[] | undefined;
    id?: IntFilter | undefined;
    rule?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    active?: BoolNullableFilter | undefined;
    customer_groups?: StringNullableFilter | undefined;
    priority?: StringNullableFilter | undefined;
    start_date?: DateTimeNullableFilter | undefined;
    end_date?: DateTimeNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    website?: StringNullableFilter | undefined;
    actions_apply?: StringNullableFilter | undefined;
    actions_discount_amount?: DecimalNullableFilter | undefined;
    actions_discard_subsequent_rules?: BoolNullableFilter | undefined;
}
