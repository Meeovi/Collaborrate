import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCredit_memosArgs } from "./args/UpsertOneCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
export declare class UpsertOneCredit_memosResolver {
    upsertOneCredit_memos(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCredit_memosArgs): Promise<Credit_memos>;
}
