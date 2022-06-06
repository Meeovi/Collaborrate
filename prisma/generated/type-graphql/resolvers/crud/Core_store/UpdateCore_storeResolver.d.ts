import { GraphQLResolveInfo } from "graphql";
import { UpdateCore_storeArgs } from "./args/UpdateCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
export declare class UpdateCore_storeResolver {
    updateCore_store(ctx: any, info: GraphQLResolveInfo, args: UpdateCore_storeArgs): Promise<Core_store | null>;
}
