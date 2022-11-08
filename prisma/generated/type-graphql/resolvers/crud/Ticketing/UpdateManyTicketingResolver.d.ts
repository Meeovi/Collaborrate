import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTicketingArgs } from "./args/UpdateManyTicketingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTicketingResolver {
    updateManyTicketing(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTicketingArgs): Promise<AffectedRowsOutput>;
}
