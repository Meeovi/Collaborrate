import { GraphQLResolveInfo } from "graphql";
import { FindManyAccountsArgs } from "./args/FindManyAccountsArgs";
import { Accounts } from "../../../models/Accounts";
export declare class FindManyAccountsResolver {
    findManyAccounts(ctx: any, info: GraphQLResolveInfo, args: FindManyAccountsArgs): Promise<Accounts[]>;
}
