import { Currency_ratesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Currency_ratesOrderByWithRelationAndSearchRelevanceInput";
import { Currency_ratesWhereInput } from "../../../inputs/Currency_ratesWhereInput";
import { Currency_ratesWhereUniqueInput } from "../../../inputs/Currency_ratesWhereUniqueInput";
export declare class FindManyCurrency_ratesArgs {
    where?: Currency_ratesWhereInput | undefined;
    orderBy?: Currency_ratesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Currency_ratesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"import_service" | "usd" | "id"> | undefined;
}
