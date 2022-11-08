import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTicketingArgs } from "./args/UpsertOneTicketingArgs";
import { Ticketing } from "../../../models/Ticketing";
export declare class UpsertOneTicketingResolver {
    upsertOneTicketing(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTicketingArgs): Promise<Ticketing>;
}
