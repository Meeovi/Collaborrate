import { GraphQLResolveInfo } from "graphql";
import { UpsertOneOrdersArgs } from "./args/UpsertOneOrdersArgs";
import { Orders } from "../../../models/Orders";
export declare class UpsertOneOrdersResolver {
    upsertOneOrders(ctx: any, info: GraphQLResolveInfo, args: UpsertOneOrdersArgs): Promise<Orders>;
}
