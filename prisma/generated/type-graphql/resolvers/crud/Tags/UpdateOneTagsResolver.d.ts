import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTagsArgs } from "./args/UpdateOneTagsArgs";
import { Tags } from "../../../models/Tags";
export declare class UpdateOneTagsResolver {
    updateOneTags(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTagsArgs): Promise<Tags | null>;
}
