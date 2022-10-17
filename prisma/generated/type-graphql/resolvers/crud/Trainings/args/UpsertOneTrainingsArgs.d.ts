import { TrainingsCreateInput } from "../../../inputs/TrainingsCreateInput";
import { TrainingsUpdateInput } from "../../../inputs/TrainingsUpdateInput";
import { TrainingsWhereUniqueInput } from "../../../inputs/TrainingsWhereUniqueInput";
export declare class UpsertOneTrainingsArgs {
    where: TrainingsWhereUniqueInput;
    create: TrainingsCreateInput;
    update: TrainingsUpdateInput;
}
