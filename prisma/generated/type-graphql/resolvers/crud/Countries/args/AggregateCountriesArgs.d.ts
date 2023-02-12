import { CountriesOrderByWithRelationInput } from "../../../inputs/CountriesOrderByWithRelationInput";
import { CountriesWhereInput } from "../../../inputs/CountriesWhereInput";
import { CountriesWhereUniqueInput } from "../../../inputs/CountriesWhereUniqueInput";
export declare class AggregateCountriesArgs {
    where?: CountriesWhereInput | undefined;
    orderBy?: CountriesOrderByWithRelationInput[] | undefined;
    cursor?: CountriesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
