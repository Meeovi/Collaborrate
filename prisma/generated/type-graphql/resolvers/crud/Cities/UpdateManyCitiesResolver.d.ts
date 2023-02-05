import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCitiesArgs } from "./args/UpdateManyCitiesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCitiesResolver {
    updateManyCities(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCitiesArgs): Promise<AffectedRowsOutput>;
}
