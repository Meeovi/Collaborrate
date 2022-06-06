import { GraphQLResolveInfo } from "graphql";
import { CreateCore_storeArgs } from "./args/CreateCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
export declare class CreateCore_storeResolver {
    createCore_store(ctx: any, info: GraphQLResolveInfo, args: CreateCore_storeArgs): Promise<Core_store>;
}
