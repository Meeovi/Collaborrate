import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTemplatesArgs } from "./args/UpdateOneTemplatesArgs";
import { Templates } from "../../../models/Templates";
export declare class UpdateOneTemplatesResolver {
    updateOneTemplates(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTemplatesArgs): Promise<Templates | null>;
}
