import { GraphQLResolveInfo } from "graphql";
import { CreateManyTagsArgs } from "./args/CreateManyTagsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTagsResolver {
    createManyTags(ctx: any, info: GraphQLResolveInfo, args: CreateManyTagsArgs): Promise<AffectedRowsOutput>;
}
