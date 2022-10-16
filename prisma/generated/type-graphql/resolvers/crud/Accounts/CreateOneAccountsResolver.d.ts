import { GraphQLResolveInfo } from "graphql";
import { CreateOneAccountsArgs } from "./args/CreateOneAccountsArgs";
import { Accounts } from "../../../models/Accounts";
export declare class CreateOneAccountsResolver {
    createOneAccounts(ctx: any, info: GraphQLResolveInfo, args: CreateOneAccountsArgs): Promise<Accounts>;
}
