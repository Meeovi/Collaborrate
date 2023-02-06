import { GraphQLResolveInfo } from "graphql";
import { DeleteManySegmentsArgs } from "./args/DeleteManySegmentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySegmentsResolver {
    deleteManySegments(ctx: any, info: GraphQLResolveInfo, args: DeleteManySegmentsArgs): Promise<AffectedRowsOutput>;
}
