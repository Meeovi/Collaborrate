import { GraphQLResolveInfo } from "graphql";
import { UpsertOneEventsArgs } from "./args/UpsertOneEventsArgs";
import { Events } from "../../../models/Events";
export declare class UpsertOneEventsResolver {
    upsertOneEvents(ctx: any, info: GraphQLResolveInfo, args: UpsertOneEventsArgs): Promise<Events>;
}
