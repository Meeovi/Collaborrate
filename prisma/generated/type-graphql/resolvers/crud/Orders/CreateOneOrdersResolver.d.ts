import { GraphQLResolveInfo } from "graphql";
import { CreateOneOrdersArgs } from "./args/CreateOneOrdersArgs";
import { Orders } from "../../../models/Orders";
export declare class CreateOneOrdersResolver {
    createOneOrders(ctx: any, info: GraphQLResolveInfo, args: CreateOneOrdersArgs): Promise<Orders>;
}
