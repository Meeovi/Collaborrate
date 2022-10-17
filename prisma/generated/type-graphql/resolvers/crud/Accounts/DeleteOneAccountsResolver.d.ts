import { GraphQLResolveInfo } from "graphql";
import { DeleteOneAccountsArgs } from "./args/DeleteOneAccountsArgs";
import { Accounts } from "../../../models/Accounts";
export declare class DeleteOneAccountsResolver {
    deleteOneAccounts(ctx: any, info: GraphQLResolveInfo, args: DeleteOneAccountsArgs): Promise<Accounts | null>;
}
