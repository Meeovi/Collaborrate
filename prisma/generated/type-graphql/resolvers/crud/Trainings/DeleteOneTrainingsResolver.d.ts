import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTrainingsArgs } from "./args/DeleteOneTrainingsArgs";
import { Trainings } from "../../../models/Trainings";
export declare class DeleteOneTrainingsResolver {
    deleteOneTrainings(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTrainingsArgs): Promise<Trainings | null>;
}
