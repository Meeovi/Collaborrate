import { GraphQLResolveInfo } from "graphql";
import { UpsertCountriesArgs } from "./args/UpsertCountriesArgs";
import { Countries } from "../../../models/Countries";
export declare class UpsertCountriesResolver {
    upsertCountries(ctx: any, info: GraphQLResolveInfo, args: UpsertCountriesArgs): Promise<Countries>;
}
