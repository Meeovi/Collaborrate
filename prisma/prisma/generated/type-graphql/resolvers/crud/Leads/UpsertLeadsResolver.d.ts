import { GraphQLResolveInfo } from "graphql";
import { UpsertLeadsArgs } from "./args/UpsertLeadsArgs";
import { Leads } from "../../../models/Leads";
export declare class UpsertLeadsResolver {
    upsertLeads(ctx: any, info: GraphQLResolveInfo, args: UpsertLeadsArgs): Promise<Leads>;
}
