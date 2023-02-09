import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTagsArgs } from "./args/DeleteOneTagsArgs";
import { Tags } from "../../../models/Tags";
export declare class DeleteOneTagsResolver {
    deleteOneTags(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTagsArgs): Promise<Tags | null>;
}
