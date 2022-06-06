import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class Currency_symbolsWhereInput {
    AND?: Currency_symbolsWhereInput[] | undefined;
    OR?: Currency_symbolsWhereInput[] | undefined;
    NOT?: Currency_symbolsWhereInput[] | undefined;
    symbol?: StringFilter | undefined;
    use_standard?: BoolNullableFilter | undefined;
}
