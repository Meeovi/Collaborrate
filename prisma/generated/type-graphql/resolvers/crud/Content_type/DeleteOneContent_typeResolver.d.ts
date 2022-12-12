import { GraphQLResolveInfo } from "graphql";
import { DeleteOneContent_typeArgs } from "./args/DeleteOneContent_typeArgs";
import { Content_type } from "../../../models/Content_type";
export declare class DeleteOneContent_typeResolver {
    deleteOneContent_type(ctx: any, info: GraphQLResolveInfo, args: DeleteOneContent_typeArgs): Promise<Content_type | null>;
}
