import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCommentsArgs } from "./args/UpdateManyCommentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCommentsResolver {
    updateManyComments(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCommentsArgs): Promise<AffectedRowsOutput>;
}
