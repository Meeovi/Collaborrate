import { GraphQLResolveInfo } from "graphql";
import { UpdateTagsArgs } from "./args/UpdateTagsArgs";
import { Tags } from "../../../models/Tags";
export declare class UpdateTagsResolver {
    updateTags(ctx: any, info: GraphQLResolveInfo, args: UpdateTagsArgs): Promise<Tags | null>;
}
