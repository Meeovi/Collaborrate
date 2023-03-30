import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTemplatesArgs } from "./args/UpsertOneTemplatesArgs";
import { Templates } from "../../../models/Templates";
export declare class UpsertOneTemplatesResolver {
    upsertOneTemplates(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTemplatesArgs): Promise<Templates>;
}
