import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTemplatesOrThrowArgs } from "./args/FindFirstTemplatesOrThrowArgs";
import { Templates } from "../../../models/Templates";
export declare class FindFirstTemplatesOrThrowResolver {
    findFirstTemplatesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTemplatesOrThrowArgs): Promise<Templates | null>;
}
