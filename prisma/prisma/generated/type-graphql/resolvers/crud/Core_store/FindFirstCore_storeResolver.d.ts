import { GraphQLResolveInfo } from "graphql";
import { FindFirstCore_storeArgs } from "./args/FindFirstCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
export declare class FindFirstCore_storeResolver {
    findFirstCore_store(ctx: any, info: GraphQLResolveInfo, args: FindFirstCore_storeArgs): Promise<Core_store | null>;
}
