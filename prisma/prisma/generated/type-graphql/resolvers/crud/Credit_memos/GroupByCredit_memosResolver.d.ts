import { GraphQLResolveInfo } from "graphql";
import { GroupByCredit_memosArgs } from "./args/GroupByCredit_memosArgs";
import { Credit_memosGroupBy } from "../../outputs/Credit_memosGroupBy";
export declare class GroupByCredit_memosResolver {
    groupByCredit_memos(ctx: any, info: GraphQLResolveInfo, args: GroupByCredit_memosArgs): Promise<Credit_memosGroupBy[]>;
}
