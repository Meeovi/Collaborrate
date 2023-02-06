import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CurrenciesWhereInput {
    AND?: CurrenciesWhereInput[] | undefined;
    OR?: CurrenciesWhereInput[] | undefined;
    NOT?: CurrenciesWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    code?: StringNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    region?: StringNullableFilter | undefined;
    symbol?: StringNullableFilter | undefined;
    useStandard?: StringNullableFilter | undefined;
}
