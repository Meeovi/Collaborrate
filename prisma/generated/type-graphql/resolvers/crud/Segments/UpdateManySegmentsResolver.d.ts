import { GraphQLResolveInfo } from "graphql";
import { UpdateManySegmentsArgs } from "./args/UpdateManySegmentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySegmentsResolver {
    updateManySegments(ctx: any, info: GraphQLResolveInfo, args: UpdateManySegmentsArgs): Promise<AffectedRowsOutput>;
}
