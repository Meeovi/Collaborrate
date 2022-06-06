import { GraphQLResolveInfo } from "graphql";
import { UpsertCore_storeArgs } from "./args/UpsertCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
export declare class UpsertCore_storeResolver {
    upsertCore_store(ctx: any, info: GraphQLResolveInfo, args: UpsertCore_storeArgs): Promise<Core_store>;
}
