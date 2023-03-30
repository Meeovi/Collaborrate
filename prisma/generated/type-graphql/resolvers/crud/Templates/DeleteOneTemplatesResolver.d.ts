import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTemplatesArgs } from "./args/DeleteOneTemplatesArgs";
import { Templates } from "../../../models/Templates";
export declare class DeleteOneTemplatesResolver {
    deleteOneTemplates(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTemplatesArgs): Promise<Templates | null>;
}
