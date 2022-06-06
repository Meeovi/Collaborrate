import { GraphQLResolveInfo } from "graphql";
import { CreateManyAccountsArgs } from "./args/CreateManyAccountsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAccountsResolver {
    createManyAccounts(ctx: any, info: GraphQLResolveInfo, args: CreateManyAccountsArgs): Promise<AffectedRowsOutput>;
}
