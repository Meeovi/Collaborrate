import { GraphQLResolveInfo } from "graphql";
import { UpdateAccountsArgs } from "./args/UpdateAccountsArgs";
import { Accounts } from "../../../models/Accounts";
export declare class UpdateAccountsResolver {
    updateAccounts(ctx: any, info: GraphQLResolveInfo, args: UpdateAccountsArgs): Promise<Accounts | null>;
}
