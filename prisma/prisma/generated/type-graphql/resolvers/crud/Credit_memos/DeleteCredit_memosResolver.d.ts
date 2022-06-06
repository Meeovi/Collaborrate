import { GraphQLResolveInfo } from "graphql";
import { DeleteCredit_memosArgs } from "./args/DeleteCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
export declare class DeleteCredit_memosResolver {
    deleteCredit_memos(ctx: any, info: GraphQLResolveInfo, args: DeleteCredit_memosArgs): Promise<Credit_memos | null>;
}
