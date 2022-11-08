import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTicketingArgs } from "./args/DeleteOneTicketingArgs";
import { Ticketing } from "../../../models/Ticketing";
export declare class DeleteOneTicketingResolver {
    deleteOneTicketing(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTicketingArgs): Promise<Ticketing | null>;
}
