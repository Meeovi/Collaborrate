import { GraphQLResolveInfo } from "graphql";
import { DeleteManyWebsitesArgs } from "./args/DeleteManyWebsitesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyWebsitesResolver {
    deleteManyWebsites(ctx: any, info: GraphQLResolveInfo, args: DeleteManyWebsitesArgs): Promise<AffectedRowsOutput>;
}
