import { GraphQLResolveInfo } from "graphql";
import { UpdateOrdersArgs } from "./args/UpdateOrdersArgs";
import { Orders } from "../../../models/Orders";
export declare class UpdateOrdersResolver {
    updateOrders(ctx: any, info: GraphQLResolveInfo, args: UpdateOrdersArgs): Promise<Orders | null>;
}
