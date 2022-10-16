import { GraphQLResolveInfo } from "graphql";
import { DeleteManyEventsArgs } from "./args/DeleteManyEventsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyEventsResolver {
    deleteManyEvents(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEventsArgs): Promise<AffectedRowsOutput>;
}
