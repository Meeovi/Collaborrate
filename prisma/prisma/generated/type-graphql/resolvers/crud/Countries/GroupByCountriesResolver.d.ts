import { GraphQLResolveInfo } from "graphql";
import { GroupByCountriesArgs } from "./args/GroupByCountriesArgs";
import { CountriesGroupBy } from "../../outputs/CountriesGroupBy";
export declare class GroupByCountriesResolver {
    groupByCountries(ctx: any, info: GraphQLResolveInfo, args: GroupByCountriesArgs): Promise<CountriesGroupBy[]>;
}
