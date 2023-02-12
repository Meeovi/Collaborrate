import { CurrenciesWhereInput } from "../inputs/CurrenciesWhereInput";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CurrenciesWhereUniqueInput {
    id?: bigint | undefined;
    AND?: CurrenciesWhereInput[] | undefined;
    OR?: CurrenciesWhereInput[] | undefined;
    NOT?: CurrenciesWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    code?: StringNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    region?: StringNullableFilter | undefined;
    symbol?: StringNullableFilter | undefined;
    useStandard?: StringNullableFilter | undefined;
}
