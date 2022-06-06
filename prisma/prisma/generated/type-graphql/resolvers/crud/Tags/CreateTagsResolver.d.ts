import { GraphQLResolveInfo } from "graphql";
import { CreateTagsArgs } from "./args/CreateTagsArgs";
import { Tags } from "../../../models/Tags";
export declare class CreateTagsResolver {
    createTags(ctx: any, info: GraphQLResolveInfo, args: CreateTagsArgs): Promise<Tags>;
}
