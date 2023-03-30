import type { GraphQLResolveInfo } from "graphql";
import { FindManyTemplatesArgs } from "./args/FindManyTemplatesArgs";
import { Templates } from "../../../models/Templates";
export declare class FindManyTemplatesResolver {
    findManyTemplates(ctx: any, info: GraphQLResolveInfo, args: FindManyTemplatesArgs): Promise<Templates[]>;
}
