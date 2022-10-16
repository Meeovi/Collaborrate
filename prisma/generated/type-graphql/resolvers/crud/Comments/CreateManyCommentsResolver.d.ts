import { GraphQLResolveInfo } from "graphql";
import { CreateManyCommentsArgs } from "./args/CreateManyCommentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCommentsResolver {
    createManyComments(ctx: any, info: GraphQLResolveInfo, args: CreateManyCommentsArgs): Promise<AffectedRowsOutput>;
}
