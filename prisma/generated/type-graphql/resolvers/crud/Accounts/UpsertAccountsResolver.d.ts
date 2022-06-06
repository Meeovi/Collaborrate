import { GraphQLResolveInfo } from "graphql";
import { UpsertAccountsArgs } from "./args/UpsertAccountsArgs";
import { Accounts } from "../../../models/Accounts";
export declare class UpsertAccountsResolver {
    upsertAccounts(ctx: any, info: GraphQLResolveInfo, args: UpsertAccountsArgs): Promise<Accounts>;
}
