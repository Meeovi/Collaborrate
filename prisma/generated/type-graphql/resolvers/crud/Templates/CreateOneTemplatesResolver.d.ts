import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTemplatesArgs } from "./args/CreateOneTemplatesArgs";
import { Templates } from "../../../models/Templates";
export declare class CreateOneTemplatesResolver {
    createOneTemplates(ctx: any, info: GraphQLResolveInfo, args: CreateOneTemplatesArgs): Promise<Templates>;
}
