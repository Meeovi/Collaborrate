import { GraphQLResolveInfo } from "graphql";
import { UpdateCredit_memosArgs } from "./args/UpdateCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
export declare class UpdateCredit_memosResolver {
    updateCredit_memos(ctx: any, info: GraphQLResolveInfo, args: UpdateCredit_memosArgs): Promise<Credit_memos | null>;
}
