import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTemplatesOrThrowArgs } from "./args/FindUniqueTemplatesOrThrowArgs";
import { Templates } from "../../../models/Templates";
export declare class FindUniqueTemplatesOrThrowResolver {
    findUniqueTemplatesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTemplatesOrThrowArgs): Promise<Templates | null>;
}
