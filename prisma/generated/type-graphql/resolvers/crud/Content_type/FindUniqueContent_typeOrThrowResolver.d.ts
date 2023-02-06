import { GraphQLResolveInfo } from "graphql";
import { FindUniqueContent_typeOrThrowArgs } from "./args/FindUniqueContent_typeOrThrowArgs";
import { Content_type } from "../../../models/Content_type";
export declare class FindUniqueContent_typeOrThrowResolver {
    getContent_type(ctx: any, info: GraphQLResolveInfo, args: FindUniqueContent_typeOrThrowArgs): Promise<Content_type | null>;
}
