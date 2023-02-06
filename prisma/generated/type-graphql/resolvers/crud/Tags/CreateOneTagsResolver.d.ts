import { GraphQLResolveInfo } from "graphql";
import { CreateOneTagsArgs } from "./args/CreateOneTagsArgs";
import { Tags } from "../../../models/Tags";
export declare class CreateOneTagsResolver {
    createOneTags(ctx: any, info: GraphQLResolveInfo, args: CreateOneTagsArgs): Promise<Tags>;
}
