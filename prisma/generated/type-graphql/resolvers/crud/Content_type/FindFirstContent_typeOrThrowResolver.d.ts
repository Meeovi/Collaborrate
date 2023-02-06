import { GraphQLResolveInfo } from "graphql";
import { FindFirstContent_typeOrThrowArgs } from "./args/FindFirstContent_typeOrThrowArgs";
import { Content_type } from "../../../models/Content_type";
export declare class FindFirstContent_typeOrThrowResolver {
    findFirstContent_typeOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstContent_typeOrThrowArgs): Promise<Content_type | null>;
}
