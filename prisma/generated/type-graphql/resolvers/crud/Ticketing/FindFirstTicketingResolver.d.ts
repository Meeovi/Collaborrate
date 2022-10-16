import { GraphQLResolveInfo } from "graphql";
import { FindFirstTicketingArgs } from "./args/FindFirstTicketingArgs";
import { Ticketing } from "../../../models/Ticketing";
export declare class FindFirstTicketingResolver {
    findFirstTicketing(ctx: any, info: GraphQLResolveInfo, args: FindFirstTicketingArgs): Promise<Ticketing | null>;
}
