import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTargetsArgs } from "./args/UpdateManyTargetsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTargetsResolver {
    updateManyTargets(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTargetsArgs): Promise<AffectedRowsOutput>;
}
