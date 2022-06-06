import { GraphQLResolveInfo } from "graphql";
import { CreateCountriesArgs } from "./args/CreateCountriesArgs";
import { Countries } from "../../../models/Countries";
export declare class CreateCountriesResolver {
    createCountries(ctx: any, info: GraphQLResolveInfo, args: CreateCountriesArgs): Promise<Countries>;
}
