import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTagsArgs } from "./args/UpsertOneTagsArgs";
import { Tags } from "../../../models/Tags";
export declare class UpsertOneTagsResolver {
    upsertOneTags(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTagsArgs): Promise<Tags>;
}
