import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAttributesArgs } from "./args/UpdateManyAttributesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAttributesResolver {
    updateManyAttributes(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAttributesArgs): Promise<AffectedRowsOutput>;
}
