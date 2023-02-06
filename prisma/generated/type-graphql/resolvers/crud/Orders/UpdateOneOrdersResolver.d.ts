import { GraphQLResolveInfo } from "graphql";
import { UpdateOneOrdersArgs } from "./args/UpdateOneOrdersArgs";
import { Orders } from "../../../models/Orders";
export declare class UpdateOneOrdersResolver {
    updateOneOrders(ctx: any, info: GraphQLResolveInfo, args: UpdateOneOrdersArgs): Promise<Orders | null>;
}
