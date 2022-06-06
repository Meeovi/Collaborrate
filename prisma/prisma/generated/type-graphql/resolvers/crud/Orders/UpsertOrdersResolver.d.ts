import { GraphQLResolveInfo } from "graphql";
import { UpsertOrdersArgs } from "./args/UpsertOrdersArgs";
import { Orders } from "../../../models/Orders";
export declare class UpsertOrdersResolver {
    upsertOrders(ctx: any, info: GraphQLResolveInfo, args: UpsertOrdersArgs): Promise<Orders>;
}
