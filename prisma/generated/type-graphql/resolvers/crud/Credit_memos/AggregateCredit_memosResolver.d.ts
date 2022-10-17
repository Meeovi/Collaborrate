import { GraphQLResolveInfo } from "graphql";
import { AggregateCredit_memosArgs } from "./args/AggregateCredit_memosArgs";
import { AggregateCredit_memos } from "../../outputs/AggregateCredit_memos";
export declare class AggregateCredit_memosResolver {
    aggregateCredit_memos(ctx: any, info: GraphQLResolveInfo, args: AggregateCredit_memosArgs): Promise<AggregateCredit_memos>;
}
