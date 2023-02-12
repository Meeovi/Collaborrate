import { CurrenciesOrderByWithRelationInput } from "../../../inputs/CurrenciesOrderByWithRelationInput";
import { CurrenciesWhereInput } from "../../../inputs/CurrenciesWhereInput";
import { CurrenciesWhereUniqueInput } from "../../../inputs/CurrenciesWhereUniqueInput";
export declare class AggregateCurrenciesArgs {
    where?: CurrenciesWhereInput | undefined;
    orderBy?: CurrenciesOrderByWithRelationInput[] | undefined;
    cursor?: CurrenciesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
