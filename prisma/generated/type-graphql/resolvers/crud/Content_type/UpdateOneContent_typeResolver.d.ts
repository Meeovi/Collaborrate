import { GraphQLResolveInfo } from "graphql";
import { UpdateOneContent_typeArgs } from "./args/UpdateOneContent_typeArgs";
import { Content_type } from "../../../models/Content_type";
export declare class UpdateOneContent_typeResolver {
    updateOneContent_type(ctx: any, info: GraphQLResolveInfo, args: UpdateOneContent_typeArgs): Promise<Content_type | null>;
}
