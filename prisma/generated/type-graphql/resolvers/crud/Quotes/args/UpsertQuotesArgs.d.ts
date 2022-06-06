import { QuotesCreateInput } from "../../../inputs/QuotesCreateInput";
import { QuotesUpdateInput } from "../../../inputs/QuotesUpdateInput";
import { QuotesWhereUniqueInput } from "../../../inputs/QuotesWhereUniqueInput";
export declare class UpsertQuotesArgs {
    where: QuotesWhereUniqueInput;
    create: QuotesCreateInput;
    update: QuotesUpdateInput;
}
