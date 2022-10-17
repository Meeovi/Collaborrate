import { GraphQLResolveInfo } from "graphql";
import { UpdateManyEventsArgs } from "./args/UpdateManyEventsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyEventsResolver {
    updateManyEvents(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEventsArgs): Promise<AffectedRowsOutput>;
}
