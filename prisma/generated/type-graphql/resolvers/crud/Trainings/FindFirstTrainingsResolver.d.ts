import { GraphQLResolveInfo } from "graphql";
import { FindFirstTrainingsArgs } from "./args/FindFirstTrainingsArgs";
import { Trainings } from "../../../models/Trainings";
export declare class FindFirstTrainingsResolver {
    findFirstTrainings(ctx: any, info: GraphQLResolveInfo, args: FindFirstTrainingsArgs): Promise<Trainings | null>;
}
