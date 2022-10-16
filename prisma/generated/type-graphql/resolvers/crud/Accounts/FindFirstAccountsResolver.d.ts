import { GraphQLResolveInfo } from "graphql";
import { FindFirstAccountsArgs } from "./args/FindFirstAccountsArgs";
import { Accounts } from "../../../models/Accounts";
export declare class FindFirstAccountsResolver {
    findFirstAccounts(ctx: any, info: GraphQLResolveInfo, args: FindFirstAccountsArgs): Promise<Accounts | null>;
}
