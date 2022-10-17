import { GraphQLResolveInfo } from "graphql";
import { UpsertOneLeadsArgs } from "./args/UpsertOneLeadsArgs";
import { Leads } from "../../../models/Leads";
export declare class UpsertOneLeadsResolver {
    upsertOneLeads(ctx: any, info: GraphQLResolveInfo, args: UpsertOneLeadsArgs): Promise<Leads>;
}
