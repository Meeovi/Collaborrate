import { GraphQLResolveInfo } from "graphql";
import { CreateManyTrainingsArgs } from "./args/CreateManyTrainingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTrainingsResolver {
    createManyTrainings(ctx: any, info: GraphQLResolveInfo, args: CreateManyTrainingsArgs): Promise<AffectedRowsOutput>;
}
