import { GraphQLResolveInfo } from "graphql";
import { FindManyCountriesArgs } from "./args/FindManyCountriesArgs";
import { Countries } from "../../../models/Countries";
export declare class FindManyCountriesResolver {
    findManyCountries(ctx: any, info: GraphQLResolveInfo, args: FindManyCountriesArgs): Promise<Countries[]>;
}
