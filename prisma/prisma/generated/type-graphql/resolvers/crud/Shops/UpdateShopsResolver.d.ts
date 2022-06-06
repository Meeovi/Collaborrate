import { GraphQLResolveInfo } from "graphql";
import { UpdateShopsArgs } from "./args/UpdateShopsArgs";
import { Shops } from "../../../models/Shops";
export declare class UpdateShopsResolver {
    updateShops(ctx: any, info: GraphQLResolveInfo, args: UpdateShopsArgs): Promise<Shops | null>;
}
