import { GraphQLResolveInfo } from "graphql";
import { DeleteAccountsArgs } from "./args/DeleteAccountsArgs";
import { Accounts } from "../../../models/Accounts";
export declare class DeleteAccountsResolver {
    deleteAccounts(ctx: any, info: GraphQLResolveInfo, args: DeleteAccountsArgs): Promise<Accounts | null>;
}
