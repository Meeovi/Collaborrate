import { GraphQLResolveInfo } from "graphql";
import { UpdateCountriesArgs } from "./args/UpdateCountriesArgs";
import { Countries } from "../../../models/Countries";
export declare class UpdateCountriesResolver {
    updateCountries(ctx: any, info: GraphQLResolveInfo, args: UpdateCountriesArgs): Promise<Countries | null>;
}
