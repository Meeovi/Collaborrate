import { GraphQLResolveInfo } from "graphql";
import { UpdateManyVisitsArgs } from "./args/UpdateManyVisitsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVisitsResolver {
    updateManyVisits(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVisitsArgs): Promise<AffectedRowsOutput>;
}
