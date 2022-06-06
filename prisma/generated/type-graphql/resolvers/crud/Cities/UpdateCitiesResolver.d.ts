import { GraphQLResolveInfo } from "graphql";
import { UpdateCitiesArgs } from "./args/UpdateCitiesArgs";
import { Cities } from "../../../models/Cities";
export declare class UpdateCitiesResolver {
    updateCities(ctx: any, info: GraphQLResolveInfo, args: UpdateCitiesArgs): Promise<Cities | null>;
}
