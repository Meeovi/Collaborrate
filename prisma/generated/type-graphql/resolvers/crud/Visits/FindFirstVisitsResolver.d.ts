import { GraphQLResolveInfo } from "graphql";
import { FindFirstVisitsArgs } from "./args/FindFirstVisitsArgs";
import { Visits } from "../../../models/Visits";
export declare class FindFirstVisitsResolver {
    findFirstVisits(ctx: any, info: GraphQLResolveInfo, args: FindFirstVisitsArgs): Promise<Visits | null>;
}
