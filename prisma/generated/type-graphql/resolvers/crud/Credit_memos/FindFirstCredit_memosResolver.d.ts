import { GraphQLResolveInfo } from "graphql";
import { FindFirstCredit_memosArgs } from "./args/FindFirstCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
export declare class FindFirstCredit_memosResolver {
    findFirstCredit_memos(ctx: any, info: GraphQLResolveInfo, args: FindFirstCredit_memosArgs): Promise<Credit_memos | null>;
}
