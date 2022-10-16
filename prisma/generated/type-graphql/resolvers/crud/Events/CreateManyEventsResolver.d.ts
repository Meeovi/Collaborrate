import { GraphQLResolveInfo } from "graphql";
import { CreateManyEventsArgs } from "./args/CreateManyEventsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyEventsResolver {
    createManyEvents(ctx: any, info: GraphQLResolveInfo, args: CreateManyEventsArgs): Promise<AffectedRowsOutput>;
}
