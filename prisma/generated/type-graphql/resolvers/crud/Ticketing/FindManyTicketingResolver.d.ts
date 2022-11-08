import { GraphQLResolveInfo } from "graphql";
import { FindManyTicketingArgs } from "./args/FindManyTicketingArgs";
import { Ticketing } from "../../../models/Ticketing";
export declare class FindManyTicketingResolver {
    ticketings(ctx: any, info: GraphQLResolveInfo, args: FindManyTicketingArgs): Promise<Ticketing[]>;
}
