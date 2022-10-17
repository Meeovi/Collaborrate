import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCredit_memosArgs } from "./args/UpdateOneCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
export declare class UpdateOneCredit_memosResolver {
    updateOneCredit_memos(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCredit_memosArgs): Promise<Credit_memos | null>;
}
