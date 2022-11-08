import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCountriesArgs } from "./args/DeleteOneCountriesArgs";
import { Countries } from "../../../models/Countries";
export declare class DeleteOneCountriesResolver {
    deleteOneCountries(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCountriesArgs): Promise<Countries | null>;
}
