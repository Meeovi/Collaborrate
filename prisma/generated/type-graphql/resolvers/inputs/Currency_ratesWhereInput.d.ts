import { BigIntFilter } from "../inputs/BigIntFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class Currency_ratesWhereInput {
    AND?: Currency_ratesWhereInput[] | undefined;
    OR?: Currency_ratesWhereInput[] | undefined;
    NOT?: Currency_ratesWhereInput[] | undefined;
    import_service?: StringFilter | undefined;
    usd?: DecimalNullableFilter | undefined;
    id?: BigIntFilter | undefined;
}
