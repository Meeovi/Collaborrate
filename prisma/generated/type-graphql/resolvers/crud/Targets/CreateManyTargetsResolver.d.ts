import { GraphQLResolveInfo } from "graphql";
import { CreateManyTargetsArgs } from "./args/CreateManyTargetsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTargetsResolver {
    createManyTargets(ctx: any, info: GraphQLResolveInfo, args: CreateManyTargetsArgs): Promise<AffectedRowsOutput>;
}
