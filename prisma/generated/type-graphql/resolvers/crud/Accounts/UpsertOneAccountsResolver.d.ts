import { GraphQLResolveInfo } from "graphql";
import { UpsertOneAccountsArgs } from "./args/UpsertOneAccountsArgs";
import { Accounts } from "../../../models/Accounts";
export declare class UpsertOneAccountsResolver {
    upsertOneAccounts(ctx: any, info: GraphQLResolveInfo, args: UpsertOneAccountsArgs): Promise<Accounts>;
}
