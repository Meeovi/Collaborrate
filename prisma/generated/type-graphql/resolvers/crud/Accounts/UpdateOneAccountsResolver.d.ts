import { GraphQLResolveInfo } from "graphql";
import { UpdateOneAccountsArgs } from "./args/UpdateOneAccountsArgs";
import { Accounts } from "../../../models/Accounts";
export declare class UpdateOneAccountsResolver {
    updateOneAccounts(ctx: any, info: GraphQLResolveInfo, args: UpdateOneAccountsArgs): Promise<Accounts | null>;
}
