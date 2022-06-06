import { GraphQLResolveInfo } from "graphql";
import { CreateAccountsArgs } from "./args/CreateAccountsArgs";
import { Accounts } from "../../../models/Accounts";
export declare class CreateAccountsResolver {
    createAccounts(ctx: any, info: GraphQLResolveInfo, args: CreateAccountsArgs): Promise<Accounts>;
}
