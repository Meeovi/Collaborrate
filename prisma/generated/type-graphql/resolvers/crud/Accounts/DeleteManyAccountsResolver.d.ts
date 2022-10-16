import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAccountsArgs } from "./args/DeleteManyAccountsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAccountsResolver {
    deleteManyAccounts(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAccountsArgs): Promise<AffectedRowsOutput>;
}
