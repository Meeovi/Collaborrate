import { DiscountsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DiscountsOrderByWithRelationAndSearchRelevanceInput";
import { DiscountsWhereInput } from "../../../inputs/DiscountsWhereInput";
import { DiscountsWhereUniqueInput } from "../../../inputs/DiscountsWhereUniqueInput";
export declare class AggregateDiscountsArgs {
    where?: DiscountsWhereInput | undefined;
    orderBy?: DiscountsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DiscountsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
