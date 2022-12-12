import { GraphQLResolveInfo } from "graphql";
import { FindManyOrdersArgs } from "./args/FindManyOrdersArgs";
import { Orders } from "../../../models/Orders";
export declare class FindManyOrdersResolver {
    findManyOrders(ctx: any, info: GraphQLResolveInfo, args: FindManyOrdersArgs): Promise<Orders[]>;
}
