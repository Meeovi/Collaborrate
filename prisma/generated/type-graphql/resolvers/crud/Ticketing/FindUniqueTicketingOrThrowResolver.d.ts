import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTicketingOrThrowArgs } from "./args/FindUniqueTicketingOrThrowArgs";
import { Ticketing } from "../../../models/Ticketing";
export declare class FindUniqueTicketingOrThrowResolver {
    getTicketing(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTicketingOrThrowArgs): Promise<Ticketing | null>;
}
