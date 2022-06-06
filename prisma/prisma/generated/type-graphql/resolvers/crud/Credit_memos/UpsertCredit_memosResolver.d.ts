import { GraphQLResolveInfo } from "graphql";
import { UpsertCredit_memosArgs } from "./args/UpsertCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
export declare class UpsertCredit_memosResolver {
    upsertCredit_memos(ctx: any, info: GraphQLResolveInfo, args: UpsertCredit_memosArgs): Promise<Credit_memos>;
}
