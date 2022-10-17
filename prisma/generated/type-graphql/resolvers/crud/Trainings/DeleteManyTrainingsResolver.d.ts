import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTrainingsArgs } from "./args/DeleteManyTrainingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTrainingsResolver {
    deleteManyTrainings(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTrainingsArgs): Promise<AffectedRowsOutput>;
}
