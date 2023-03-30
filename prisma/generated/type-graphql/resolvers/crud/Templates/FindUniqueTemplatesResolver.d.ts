import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTemplatesArgs } from "./args/FindUniqueTemplatesArgs";
import { Templates } from "../../../models/Templates";
export declare class FindUniqueTemplatesResolver {
    findUniqueTemplates(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTemplatesArgs): Promise<Templates | null>;
}
