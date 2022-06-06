import { GraphQLResolveInfo } from "graphql";
import { DeleteCountriesArgs } from "./args/DeleteCountriesArgs";
import { Countries } from "../../../models/Countries";
export declare class DeleteCountriesResolver {
    deleteCountries(ctx: any, info: GraphQLResolveInfo, args: DeleteCountriesArgs): Promise<Countries | null>;
}
