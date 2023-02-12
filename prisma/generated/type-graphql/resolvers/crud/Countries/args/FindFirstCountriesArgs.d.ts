import { CountriesOrderByWithRelationInput } from "../../../inputs/CountriesOrderByWithRelationInput";
import { CountriesWhereInput } from "../../../inputs/CountriesWhereInput";
import { CountriesWhereUniqueInput } from "../../../inputs/CountriesWhereUniqueInput";
export declare class FindFirstCountriesArgs {
    where?: CountriesWhereInput | undefined;
    orderBy?: CountriesOrderByWithRelationInput[] | undefined;
    cursor?: CountriesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "image" | "region" | "trainings"> | undefined;
}
