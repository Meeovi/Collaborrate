import { GraphQLResolveInfo } from "graphql";
import { CreateManyTicketingArgs } from "./args/CreateManyTicketingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTicketingResolver {
    createManyTicketing(ctx: any, info: GraphQLResolveInfo, args: CreateManyTicketingArgs): Promise<AffectedRowsOutput>;
}
