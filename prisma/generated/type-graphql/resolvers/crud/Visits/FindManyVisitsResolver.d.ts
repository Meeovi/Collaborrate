import { GraphQLResolveInfo } from "graphql";
import { FindManyVisitsArgs } from "./args/FindManyVisitsArgs";
import { Visits } from "../../../models/Visits";
export declare class FindManyVisitsResolver {
    findManyVisits(ctx: any, info: GraphQLResolveInfo, args: FindManyVisitsArgs): Promise<Visits[]>;
}
