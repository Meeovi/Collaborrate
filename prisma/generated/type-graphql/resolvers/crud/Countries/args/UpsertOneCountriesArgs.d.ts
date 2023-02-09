import { CountriesCreateInput } from "../../../inputs/CountriesCreateInput";
import { CountriesUpdateInput } from "../../../inputs/CountriesUpdateInput";
import { CountriesWhereUniqueInput } from "../../../inputs/CountriesWhereUniqueInput";
export declare class UpsertOneCountriesArgs {
    where: CountriesWhereUniqueInput;
    create: CountriesCreateInput;
    update: CountriesUpdateInput;
}
