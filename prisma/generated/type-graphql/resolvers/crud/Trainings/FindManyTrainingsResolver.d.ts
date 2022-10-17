import { GraphQLResolveInfo } from "graphql";
import { FindManyTrainingsArgs } from "./args/FindManyTrainingsArgs";
import { Trainings } from "../../../models/Trainings";
export declare class FindManyTrainingsResolver {
    findManyTrainings(ctx: any, info: GraphQLResolveInfo, args: FindManyTrainingsArgs): Promise<Trainings[]>;
}
