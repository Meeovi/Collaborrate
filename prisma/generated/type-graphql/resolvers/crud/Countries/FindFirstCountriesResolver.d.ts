import { GraphQLResolveInfo } from "graphql";
import { FindFirstCountriesArgs } from "./args/FindFirstCountriesArgs";
import { Countries } from "../../../models/Countries";
export declare class FindFirstCountriesResolver {
    findFirstCountries(ctx: any, info: GraphQLResolveInfo, args: FindFirstCountriesArgs): Promise<Countries | null>;
}
