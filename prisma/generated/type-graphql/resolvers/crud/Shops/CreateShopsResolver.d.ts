import { GraphQLResolveInfo } from "graphql";
import { CreateShopsArgs } from "./args/CreateShopsArgs";
import { Shops } from "../../../models/Shops";
export declare class CreateShopsResolver {
    createShops(ctx: any, info: GraphQLResolveInfo, args: CreateShopsArgs): Promise<Shops>;
}
