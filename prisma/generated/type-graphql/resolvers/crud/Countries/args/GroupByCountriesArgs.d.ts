import { CountriesOrderByWithAggregationInput } from "../../../inputs/CountriesOrderByWithAggregationInput";
import { CountriesScalarWhereWithAggregatesInput } from "../../../inputs/CountriesScalarWhereWithAggregatesInput";
import { CountriesWhereInput } from "../../../inputs/CountriesWhereInput";
export declare class GroupByCountriesArgs {
    where?: CountriesWhereInput | undefined;
    orderBy?: CountriesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "image" | "region" | "trainings">;
    having?: CountriesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
