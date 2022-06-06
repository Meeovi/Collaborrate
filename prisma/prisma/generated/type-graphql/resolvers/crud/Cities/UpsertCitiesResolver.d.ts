import { GraphQLResolveInfo } from "graphql";
import { UpsertCitiesArgs } from "./args/UpsertCitiesArgs";
import { Cities } from "../../../models/Cities";
export declare class UpsertCitiesResolver {
    upsertCities(ctx: any, info: GraphQLResolveInfo, args: UpsertCitiesArgs): Promise<Cities>;
}
