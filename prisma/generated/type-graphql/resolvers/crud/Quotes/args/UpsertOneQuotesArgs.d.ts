import { QuotesCreateInput } from "../../../inputs/QuotesCreateInput";
import { QuotesUpdateInput } from "../../../inputs/QuotesUpdateInput";
import { QuotesWhereUniqueInput } from "../../../inputs/QuotesWhereUniqueInput";
export declare class UpsertOneQuotesArgs {
    where: QuotesWhereUniqueInput;
    create: QuotesCreateInput;
    update: QuotesUpdateInput;
}
