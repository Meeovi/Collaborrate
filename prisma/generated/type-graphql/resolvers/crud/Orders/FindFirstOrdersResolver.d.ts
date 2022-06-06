import { GraphQLResolveInfo } from "graphql";
import { FindFirstOrdersArgs } from "./args/FindFirstOrdersArgs";
import { Orders } from "../../../models/Orders";
export declare class FindFirstOrdersResolver {
    findFirstOrders(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrdersArgs): Promise<Orders | null>;
}
