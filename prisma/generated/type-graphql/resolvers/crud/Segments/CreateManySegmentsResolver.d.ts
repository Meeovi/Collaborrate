import { GraphQLResolveInfo } from "graphql";
import { CreateManySegmentsArgs } from "./args/CreateManySegmentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySegmentsResolver {
    createManySegments(ctx: any, info: GraphQLResolveInfo, args: CreateManySegmentsArgs): Promise<AffectedRowsOutput>;
}
