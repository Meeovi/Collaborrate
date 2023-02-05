import { GraphQLResolveInfo } from "graphql";
import { CreateOneContent_typeArgs } from "./args/CreateOneContent_typeArgs";
import { Content_type } from "../../../models/Content_type";
export declare class CreateOneContent_typeResolver {
    createOneContent_type(ctx: any, info: GraphQLResolveInfo, args: CreateOneContent_typeArgs): Promise<Content_type>;
}
