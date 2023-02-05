import { GraphQLResolveInfo } from "graphql";
import { DeleteOneOrdersArgs } from "./args/DeleteOneOrdersArgs";
import { Orders } from "../../../models/Orders";
export declare class DeleteOneOrdersResolver {
    deleteOneOrders(ctx: any, info: GraphQLResolveInfo, args: DeleteOneOrdersArgs): Promise<Orders | null>;
}
