import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTicketingArgs } from "./args/FindUniqueTicketingArgs";
import { Ticketing } from "../../../models/Ticketing";
export declare class FindUniqueTicketingResolver {
    ticketing(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTicketingArgs): Promise<Ticketing | null>;
}
