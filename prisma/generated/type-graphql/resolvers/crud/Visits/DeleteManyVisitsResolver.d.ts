import { GraphQLResolveInfo } from "graphql";
import { DeleteManyVisitsArgs } from "./args/DeleteManyVisitsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVisitsResolver {
    deleteManyVisits(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVisitsArgs): Promise<AffectedRowsOutput>;
}
