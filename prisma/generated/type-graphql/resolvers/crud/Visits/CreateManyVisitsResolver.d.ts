import { GraphQLResolveInfo } from "graphql";
import { CreateManyVisitsArgs } from "./args/CreateManyVisitsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVisitsResolver {
    createManyVisits(ctx: any, info: GraphQLResolveInfo, args: CreateManyVisitsArgs): Promise<AffectedRowsOutput>;
}
