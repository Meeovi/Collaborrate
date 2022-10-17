import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTrainingsArgs } from "./args/UpsertOneTrainingsArgs";
import { Trainings } from "../../../models/Trainings";
export declare class UpsertOneTrainingsResolver {
    upsertOneTrainings(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTrainingsArgs): Promise<Trainings>;
}
