import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTemplatesArgs } from "./args/FindFirstTemplatesArgs";
import { Templates } from "../../../models/Templates";
export declare class FindFirstTemplatesResolver {
    findFirstTemplates(ctx: any, info: GraphQLResolveInfo, args: FindFirstTemplatesArgs): Promise<Templates | null>;
}
