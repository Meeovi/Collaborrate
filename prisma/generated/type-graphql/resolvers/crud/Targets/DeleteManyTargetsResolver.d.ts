import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTargetsArgs } from "./args/DeleteManyTargetsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTargetsResolver {
    deleteManyTargets(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTargetsArgs): Promise<AffectedRowsOutput>;
}
