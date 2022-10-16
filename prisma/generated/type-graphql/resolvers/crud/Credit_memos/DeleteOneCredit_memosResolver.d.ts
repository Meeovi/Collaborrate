import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCredit_memosArgs } from "./args/DeleteOneCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
export declare class DeleteOneCredit_memosResolver {
    deleteOneCredit_memos(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCredit_memosArgs): Promise<Credit_memos | null>;
}
