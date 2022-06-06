import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAccountsArgs } from "./args/UpdateManyAccountsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAccountsResolver {
    updateManyAccounts(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAccountsArgs): Promise<AffectedRowsOutput>;
}
