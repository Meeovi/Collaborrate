import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCountriesArgs } from "./args/UpsertOneCountriesArgs";
import { Countries } from "../../../models/Countries";
export declare class UpsertOneCountriesResolver {
    upsertOneCountries(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCountriesArgs): Promise<Countries>;
}
