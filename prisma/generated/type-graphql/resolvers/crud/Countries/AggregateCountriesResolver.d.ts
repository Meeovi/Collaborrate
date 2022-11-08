import { GraphQLResolveInfo } from "graphql";
import { AggregateCountriesArgs } from "./args/AggregateCountriesArgs";
import { AggregateCountries } from "../../outputs/AggregateCountries";
export declare class AggregateCountriesResolver {
    aggregateCountries(ctx: any, info: GraphQLResolveInfo, args: AggregateCountriesArgs): Promise<AggregateCountries>;
}
