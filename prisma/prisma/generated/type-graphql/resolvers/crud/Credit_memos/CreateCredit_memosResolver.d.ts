import { GraphQLResolveInfo } from "graphql";
import { CreateCredit_memosArgs } from "./args/CreateCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
export declare class CreateCredit_memosResolver {
    createCredit_memos(ctx: any, info: GraphQLResolveInfo, args: CreateCredit_memosArgs): Promise<Credit_memos>;
}
