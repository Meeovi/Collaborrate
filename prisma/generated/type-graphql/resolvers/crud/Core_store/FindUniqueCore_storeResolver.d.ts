import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCore_storeArgs } from "./args/FindUniqueCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
export declare class FindUniqueCore_storeResolver {
    core_store(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCore_storeArgs): Promise<Core_store | null>;
}
