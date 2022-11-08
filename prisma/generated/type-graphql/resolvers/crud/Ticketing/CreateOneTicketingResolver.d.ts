import { GraphQLResolveInfo } from "graphql";
import { CreateOneTicketingArgs } from "./args/CreateOneTicketingArgs";
import { Ticketing } from "../../../models/Ticketing";
export declare class CreateOneTicketingResolver {
    createOneTicketing(ctx: any, info: GraphQLResolveInfo, args: CreateOneTicketingArgs): Promise<Ticketing>;
}
