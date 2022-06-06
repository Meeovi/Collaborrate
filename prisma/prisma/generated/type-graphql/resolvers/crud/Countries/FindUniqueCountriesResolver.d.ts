import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCountriesArgs } from "./args/FindUniqueCountriesArgs";
import { Countries } from "../../../models/Countries";
export declare class FindUniqueCountriesResolver {
    findUniqueCountries(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCountriesArgs): Promise<Countries | null>;
}
