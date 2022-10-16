import { GraphQLResolveInfo } from "graphql";
import { CreateManyWebsitesArgs } from "./args/CreateManyWebsitesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyWebsitesResolver {
    createManyWebsites(ctx: any, info: GraphQLResolveInfo, args: CreateManyWebsitesArgs): Promise<AffectedRowsOutput>;
}
