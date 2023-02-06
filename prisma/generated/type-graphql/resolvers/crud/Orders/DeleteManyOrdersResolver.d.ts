import { GraphQLResolveInfo } from "graphql";
import { DeleteManyOrdersArgs } from "./args/DeleteManyOrdersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyOrdersResolver {
    deleteManyOrders(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrdersArgs): Promise<AffectedRowsOutput>;
}
