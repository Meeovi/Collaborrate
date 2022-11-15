import { GraphQLResolveInfo } from "graphql";
import { FindFirstTicketingOrThrowArgs } from "./args/FindFirstTicketingOrThrowArgs";
import { Ticketing } from "../../../models/Ticketing";
export declare class FindFirstTicketingOrThrowResolver {
    findFirstTicketingOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTicketingOrThrowArgs): Promise<Ticketing | null>;
}
