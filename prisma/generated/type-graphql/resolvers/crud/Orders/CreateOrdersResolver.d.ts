import { GraphQLResolveInfo } from "graphql";
import { CreateOrdersArgs } from "./args/CreateOrdersArgs";
import { Orders } from "../../../models/Orders";
export declare class CreateOrdersResolver {
    createOrders(ctx: any, info: GraphQLResolveInfo, args: CreateOrdersArgs): Promise<Orders>;
}
