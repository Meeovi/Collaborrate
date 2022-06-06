import { CitiesCreateInput } from "../../../inputs/CitiesCreateInput";
import { CitiesUpdateInput } from "../../../inputs/CitiesUpdateInput";
import { CitiesWhereUniqueInput } from "../../../inputs/CitiesWhereUniqueInput";
export declare class UpsertCitiesArgs {
    where: CitiesWhereUniqueInput;
    create: CitiesCreateInput;
    update: CitiesUpdateInput;
}
