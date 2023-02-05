import { CountriesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CountriesOrderByWithRelationAndSearchRelevanceInput";
import { CountriesWhereInput } from "../../../inputs/CountriesWhereInput";
import { CountriesWhereUniqueInput } from "../../../inputs/CountriesWhereUniqueInput";
export declare class AggregateCountriesArgs {
    where?: CountriesWhereInput | undefined;
    orderBy?: CountriesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CountriesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
