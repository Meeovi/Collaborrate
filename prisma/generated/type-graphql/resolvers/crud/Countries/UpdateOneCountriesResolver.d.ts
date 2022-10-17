import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCountriesArgs } from "./args/UpdateOneCountriesArgs";
import { Countries } from "../../../models/Countries";
export declare class UpdateOneCountriesResolver {
    updateOneCountries(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCountriesArgs): Promise<Countries | null>;
}
