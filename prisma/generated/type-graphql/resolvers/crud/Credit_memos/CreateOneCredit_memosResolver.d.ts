import { GraphQLResolveInfo } from "graphql";
import { CreateOneCredit_memosArgs } from "./args/CreateOneCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
export declare class CreateOneCredit_memosResolver {
    createOneCredit_memos(ctx: any, info: GraphQLResolveInfo, args: CreateOneCredit_memosArgs): Promise<Credit_memos>;
}
