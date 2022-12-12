import { GraphQLResolveInfo } from "graphql";
import { UpdateOneVisitsArgs } from "./args/UpdateOneVisitsArgs";
import { Visits } from "../../../models/Visits";
export declare class UpdateOneVisitsResolver {
    updateOneVisits(ctx: any, info: GraphQLResolveInfo, args: UpdateOneVisitsArgs): Promise<Visits | null>;
}
