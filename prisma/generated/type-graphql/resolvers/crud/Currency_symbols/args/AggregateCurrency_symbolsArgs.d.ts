import { Currency_symbolsOrderByWithRelationInput } from "../../../inputs/Currency_symbolsOrderByWithRelationInput";
import { Currency_symbolsWhereInput } from "../../../inputs/Currency_symbolsWhereInput";
import { Currency_symbolsWhereUniqueInput } from "../../../inputs/Currency_symbolsWhereUniqueInput";
export declare class AggregateCurrency_symbolsArgs {
    where?: Currency_symbolsWhereInput | undefined;
    orderBy?: Currency_symbolsOrderByWithRelationInput[] | undefined;
    cursor?: Currency_symbolsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
