import { GraphQLResolveInfo } from "graphql";
import { DeleteOrdersArgs } from "./args/DeleteOrdersArgs";
import { Orders } from "../../../models/Orders";
export declare class DeleteOrdersResolver {
    deleteOrders(ctx: any, info: GraphQLResolveInfo, args: DeleteOrdersArgs): Promise<Orders | null>;
}
