import { GraphQLResolveInfo } from "graphql";
import { DeleteShopsArgs } from "./args/DeleteShopsArgs";
import { Shops } from "../../../models/Shops";
export declare class DeleteShopsResolver {
    deleteShops(ctx: any, info: GraphQLResolveInfo, args: DeleteShopsArgs): Promise<Shops | null>;
}
