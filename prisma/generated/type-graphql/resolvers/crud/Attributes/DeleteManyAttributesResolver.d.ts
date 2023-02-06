import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAttributesArgs } from "./args/DeleteManyAttributesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAttributesResolver {
    deleteManyAttributes(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAttributesArgs): Promise<AffectedRowsOutput>;
}
