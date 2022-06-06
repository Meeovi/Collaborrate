import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCredit_memosArgs } from "./args/FindUniqueCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
export declare class FindUniqueCredit_memosResolver {
    findUniqueCredit_memos(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCredit_memosArgs): Promise<Credit_memos | null>;
}
