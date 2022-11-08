import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTicketingArgs } from "./args/UpdateOneTicketingArgs";
import { Ticketing } from "../../../models/Ticketing";
export declare class UpdateOneTicketingResolver {
    updateOneTicketing(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTicketingArgs): Promise<Ticketing | null>;
}
