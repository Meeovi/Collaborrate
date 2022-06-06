import { Currency_ratesOrderByWithRelationInput } from "../../../inputs/Currency_ratesOrderByWithRelationInput";
import { Currency_ratesWhereInput } from "../../../inputs/Currency_ratesWhereInput";
import { Currency_ratesWhereUniqueInput } from "../../../inputs/Currency_ratesWhereUniqueInput";
export declare class FindFirstCurrency_ratesArgs {
    where?: Currency_ratesWhereInput | undefined;
    orderBy?: Currency_ratesOrderByWithRelationInput[] | undefined;
    cursor?: Currency_ratesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"import_service" | "usd"> | undefined;
}
