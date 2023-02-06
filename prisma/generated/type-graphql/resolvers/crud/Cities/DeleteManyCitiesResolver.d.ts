import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCitiesArgs } from "./args/DeleteManyCitiesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCitiesResolver {
    deleteManyCities(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCitiesArgs): Promise<AffectedRowsOutput>;
}
