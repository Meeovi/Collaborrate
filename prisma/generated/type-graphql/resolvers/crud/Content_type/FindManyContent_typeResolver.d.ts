import { GraphQLResolveInfo } from "graphql";
import { FindManyContent_typeArgs } from "./args/FindManyContent_typeArgs";
import { Content_type } from "../../../models/Content_type";
export declare class FindManyContent_typeResolver {
    content_types(ctx: any, info: GraphQLResolveInfo, args: FindManyContent_typeArgs): Promise<Content_type[]>;
}
