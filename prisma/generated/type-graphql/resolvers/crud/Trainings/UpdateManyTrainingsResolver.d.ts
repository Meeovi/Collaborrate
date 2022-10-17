import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTrainingsArgs } from "./args/UpdateManyTrainingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTrainingsResolver {
    updateManyTrainings(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTrainingsArgs): Promise<AffectedRowsOutput>;
}
