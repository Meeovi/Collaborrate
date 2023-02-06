import { GraphQLResolveInfo } from "graphql";
import { CreateManyOrdersArgs } from "./args/CreateManyOrdersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyOrdersResolver {
    createManyOrders(ctx: any, info: GraphQLResolveInfo, args: CreateManyOrdersArgs): Promise<AffectedRowsOutput>;
}
