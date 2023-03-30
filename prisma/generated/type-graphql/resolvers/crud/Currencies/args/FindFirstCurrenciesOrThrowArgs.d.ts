import { CurrenciesOrderByWithRelationInput } from "../../../inputs/CurrenciesOrderByWithRelationInput";
import { CurrenciesWhereInput } from "../../../inputs/CurrenciesWhereInput";
import { CurrenciesWhereUniqueInput } from "../../../inputs/CurrenciesWhereUniqueInput";
export declare class FindFirstCurrenciesOrThrowArgs {
    where?: CurrenciesWhereInput | undefined;
    orderBy?: CurrenciesOrderByWithRelationInput[] | undefined;
    cursor?: CurrenciesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "code" | "name" | "region" | "symbol" | "useStandard"> | undefined;
}
