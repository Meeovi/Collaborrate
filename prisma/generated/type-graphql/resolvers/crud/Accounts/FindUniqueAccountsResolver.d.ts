import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAccountsArgs } from "./args/FindUniqueAccountsArgs";
import { Accounts } from "../../../models/Accounts";
export declare class FindUniqueAccountsResolver {
    findUniqueAccounts(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAccountsArgs): Promise<Accounts | null>;
}
