import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTrainingsArgs } from "./args/UpdateOneTrainingsArgs";
import { Trainings } from "../../../models/Trainings";
export declare class UpdateOneTrainingsResolver {
    updateOneTrainings(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTrainingsArgs): Promise<Trainings | null>;
}
