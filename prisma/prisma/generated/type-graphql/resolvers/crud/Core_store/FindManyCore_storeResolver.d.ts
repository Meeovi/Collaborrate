import { GraphQLResolveInfo } from "graphql";
import { FindManyCore_storeArgs } from "./args/FindManyCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
export declare class FindManyCore_storeResolver {
    core_stores(ctx: any, info: GraphQLResolveInfo, args: FindManyCore_storeArgs): Promise<Core_store[]>;
}
