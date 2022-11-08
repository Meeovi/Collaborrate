import { GraphQLResolveInfo } from "graphql";
import { DeleteOneVisitsArgs } from "./args/DeleteOneVisitsArgs";
import { Visits } from "../../../models/Visits";
export declare class DeleteOneVisitsResolver {
    deleteOneVisits(ctx: any, info: GraphQLResolveInfo, args: DeleteOneVisitsArgs): Promise<Visits | null>;
}
