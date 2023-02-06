import { CountriesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CountriesOrderByWithRelationAndSearchRelevanceInput";
import { CountriesWhereInput } from "../../../inputs/CountriesWhereInput";
import { CountriesWhereUniqueInput } from "../../../inputs/CountriesWhereUniqueInput";
export declare class FindManyCountriesArgs {
    where?: CountriesWhereInput | undefined;
    orderBy?: CountriesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CountriesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "image" | "region" | "trainings"> | undefined;
}
