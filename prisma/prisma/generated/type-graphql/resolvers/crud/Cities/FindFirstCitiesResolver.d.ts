import { GraphQLResolveInfo } from "graphql";
import { FindFirstCitiesArgs } from "./args/FindFirstCitiesArgs";
import { Cities } from "../../../models/Cities";
export declare class FindFirstCitiesResolver {
    findFirstCities(ctx: any, info: GraphQLResolveInfo, args: FindFirstCitiesArgs): Promise<Cities | null>;
}
