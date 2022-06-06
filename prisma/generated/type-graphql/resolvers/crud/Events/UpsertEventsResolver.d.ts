import { GraphQLResolveInfo } from "graphql";
import { UpsertEventsArgs } from "./args/UpsertEventsArgs";
import { Events } from "../../../models/Events";
export declare class UpsertEventsResolver {
    upsertEvents(ctx: any, info: GraphQLResolveInfo, args: UpsertEventsArgs): Promise<Events>;
}
