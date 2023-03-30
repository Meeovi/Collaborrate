import { DiscountsOrderByWithRelationInput } from "../../../inputs/DiscountsOrderByWithRelationInput";
import { DiscountsWhereInput } from "../../../inputs/DiscountsWhereInput";
import { DiscountsWhereUniqueInput } from "../../../inputs/DiscountsWhereUniqueInput";
export declare class AggregateDiscountsArgs {
    where?: DiscountsWhereInput | undefined;
    orderBy?: DiscountsOrderByWithRelationInput[] | undefined;
    cursor?: DiscountsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
