import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTicketingArgs } from "./args/DeleteManyTicketingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTicketingResolver {
    deleteManyTicketing(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTicketingArgs): Promise<AffectedRowsOutput>;
}
