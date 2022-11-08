import { GraphQLResolveInfo } from "graphql";
import { FindUniqueContent_typeArgs } from "./args/FindUniqueContent_typeArgs";
import { Content_type } from "../../../models/Content_type";
export declare class FindUniqueContent_typeResolver {
    content_type(ctx: any, info: GraphQLResolveInfo, args: FindUniqueContent_typeArgs): Promise<Content_type | null>;
}
