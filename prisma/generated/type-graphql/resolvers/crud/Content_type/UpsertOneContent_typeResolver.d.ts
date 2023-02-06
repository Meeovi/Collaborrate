import { GraphQLResolveInfo } from "graphql";
import { UpsertOneContent_typeArgs } from "./args/UpsertOneContent_typeArgs";
import { Content_type } from "../../../models/Content_type";
export declare class UpsertOneContent_typeResolver {
    upsertOneContent_type(ctx: any, info: GraphQLResolveInfo, args: UpsertOneContent_typeArgs): Promise<Content_type>;
}
