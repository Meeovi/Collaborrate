import { GraphQLResolveInfo } from "graphql";
import { CreateManyProvidersArgs } from "./args/CreateManyProvidersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProvidersResolver {
    createManyProviders(ctx: any, info: GraphQLResolveInfo, args: CreateManyProvidersArgs): Promise<AffectedRowsOutput>;
}
