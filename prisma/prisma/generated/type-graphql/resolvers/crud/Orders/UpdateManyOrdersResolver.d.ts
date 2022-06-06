import { GraphQLResolveInfo } from "graphql";
import { UpdateManyOrdersArgs } from "./args/UpdateManyOrdersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyOrdersResolver {
    updateManyOrders(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrdersArgs): Promise<AffectedRowsOutput>;
}
