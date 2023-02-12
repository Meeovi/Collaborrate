import { QuotesOrderByWithRelationInput } from "../../../inputs/QuotesOrderByWithRelationInput";
import { QuotesWhereInput } from "../../../inputs/QuotesWhereInput";
import { QuotesWhereUniqueInput } from "../../../inputs/QuotesWhereUniqueInput";
export declare class AggregateQuotesArgs {
    where?: QuotesWhereInput | undefined;
    orderBy?: QuotesOrderByWithRelationInput[] | undefined;
    cursor?: QuotesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
