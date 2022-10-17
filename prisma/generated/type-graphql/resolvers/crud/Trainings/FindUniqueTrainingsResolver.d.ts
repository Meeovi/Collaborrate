import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTrainingsArgs } from "./args/FindUniqueTrainingsArgs";
import { Trainings } from "../../../models/Trainings";
export declare class FindUniqueTrainingsResolver {
    findUniqueTrainings(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTrainingsArgs): Promise<Trainings | null>;
}
