import { GraphQLResolveInfo } from "graphql";
import { CreateOneVisitsArgs } from "./args/CreateOneVisitsArgs";
import { Visits } from "../../../models/Visits";
export declare class CreateOneVisitsResolver {
    createOneVisits(ctx: any, info: GraphQLResolveInfo, args: CreateOneVisitsArgs): Promise<Visits>;
}
