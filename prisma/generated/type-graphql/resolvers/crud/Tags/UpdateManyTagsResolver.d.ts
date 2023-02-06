import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTagsArgs } from "./args/UpdateManyTagsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTagsResolver {
    updateManyTags(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTagsArgs): Promise<AffectedRowsOutput>;
}
