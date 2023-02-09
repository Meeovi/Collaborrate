import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrdersArgs } from "./args/FindUniqueOrdersArgs";
import { Orders } from "../../../models/Orders";
export declare class FindUniqueOrdersResolver {
    findUniqueOrders(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrdersArgs): Promise<Orders | null>;
}
