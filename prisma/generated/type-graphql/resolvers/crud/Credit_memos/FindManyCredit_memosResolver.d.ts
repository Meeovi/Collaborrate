import { GraphQLResolveInfo } from "graphql";
import { FindManyCredit_memosArgs } from "./args/FindManyCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
export declare class FindManyCredit_memosResolver {
    findManyCredit_memos(ctx: any, info: GraphQLResolveInfo, args: FindManyCredit_memosArgs): Promise<Credit_memos[]>;
}
