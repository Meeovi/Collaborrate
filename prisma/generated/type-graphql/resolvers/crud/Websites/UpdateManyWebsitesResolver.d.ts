import { GraphQLResolveInfo } from "graphql";
import { UpdateManyWebsitesArgs } from "./args/UpdateManyWebsitesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyWebsitesResolver {
    updateManyWebsites(ctx: any, info: GraphQLResolveInfo, args: UpdateManyWebsitesArgs): Promise<AffectedRowsOutput>;
}
