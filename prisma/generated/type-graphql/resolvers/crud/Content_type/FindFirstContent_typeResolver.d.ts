import { GraphQLResolveInfo } from "graphql";
import { FindFirstContent_typeArgs } from "./args/FindFirstContent_typeArgs";
import { Content_type } from "../../../models/Content_type";
export declare class FindFirstContent_typeResolver {
    findFirstContent_type(ctx: any, info: GraphQLResolveInfo, args: FindFirstContent_typeArgs): Promise<Content_type | null>;
}
