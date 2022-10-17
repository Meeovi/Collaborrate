import { GraphQLResolveInfo } from "graphql";
import { CreateOneTrainingsArgs } from "./args/CreateOneTrainingsArgs";
import { Trainings } from "../../../models/Trainings";
export declare class CreateOneTrainingsResolver {
    createOneTrainings(ctx: any, info: GraphQLResolveInfo, args: CreateOneTrainingsArgs): Promise<Trainings>;
}
