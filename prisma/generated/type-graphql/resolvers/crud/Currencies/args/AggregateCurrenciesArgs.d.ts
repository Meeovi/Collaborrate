import { CurrenciesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CurrenciesOrderByWithRelationAndSearchRelevanceInput";
import { CurrenciesWhereInput } from "../../../inputs/CurrenciesWhereInput";
import { CurrenciesWhereUniqueInput } from "../../../inputs/CurrenciesWhereUniqueInput";
export declare class AggregateCurrenciesArgs {
    where?: CurrenciesWhereInput | undefined;
    orderBy?: CurrenciesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CurrenciesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
