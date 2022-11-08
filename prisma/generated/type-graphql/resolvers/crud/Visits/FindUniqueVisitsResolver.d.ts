import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVisitsArgs } from "./args/FindUniqueVisitsArgs";
import { Visits } from "../../../models/Visits";
export declare class FindUniqueVisitsResolver {
    findUniqueVisits(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVisitsArgs): Promise<Visits | null>;
}
