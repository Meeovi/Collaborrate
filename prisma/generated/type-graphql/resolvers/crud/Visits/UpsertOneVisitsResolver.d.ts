import { GraphQLResolveInfo } from "graphql";
import { UpsertOneVisitsArgs } from "./args/UpsertOneVisitsArgs";
import { Visits } from "../../../models/Visits";
export declare class UpsertOneVisitsResolver {
    upsertOneVisits(ctx: any, info: GraphQLResolveInfo, args: UpsertOneVisitsArgs): Promise<Visits>;
}
