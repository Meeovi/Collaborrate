import { GraphQLResolveInfo } from "graphql";
import { UpsertTagsArgs } from "./args/UpsertTagsArgs";
import { Tags } from "../../../models/Tags";
export declare class UpsertTagsResolver {
    upsertTags(ctx: any, info: GraphQLResolveInfo, args: UpsertTagsArgs): Promise<Tags>;
}
