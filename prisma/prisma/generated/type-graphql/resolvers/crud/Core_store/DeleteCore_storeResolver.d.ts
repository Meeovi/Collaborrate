import { GraphQLResolveInfo } from "graphql";
import { DeleteCore_storeArgs } from "./args/DeleteCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
export declare class DeleteCore_storeResolver {
    deleteCore_store(ctx: any, info: GraphQLResolveInfo, args: DeleteCore_storeArgs): Promise<Core_store | null>;
}
