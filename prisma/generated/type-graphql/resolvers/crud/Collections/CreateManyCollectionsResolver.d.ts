import { GraphQLResolveInfo } from "graphql";
import { CreateManyCollectionsArgs } from "./args/CreateManyCollectionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCollectionsResolver {
    createManyCollections(ctx: any, info: GraphQLResolveInfo, args: CreateManyCollectionsArgs): Promise<AffectedRowsOutput>;
}
