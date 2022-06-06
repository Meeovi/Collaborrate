import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCustomer_groupArgs } from "./args/DeleteManyCustomer_groupArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCustomer_groupResolver {
    deleteManyCustomer_group(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCustomer_groupArgs): Promise<AffectedRowsOutput>;
}
