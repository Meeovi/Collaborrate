import { GraphQLResolveInfo } from "graphql";
import { CreateOneCountriesArgs } from "./args/CreateOneCountriesArgs";
import { Countries } from "../../../models/Countries";
export declare class CreateOneCountriesResolver {
    createOneCountries(ctx: any, info: GraphQLResolveInfo, args: CreateOneCountriesArgs): Promise<Countries>;
}
