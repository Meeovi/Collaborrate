import { GraphQLResolveInfo } from "graphql";
import { FindUniqueEventsArgs } from "./args/FindUniqueEventsArgs";
import { Events } from "../../../models/Events";
export declare class FindUniqueEventsResolver {
    findUniqueEvents(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEventsArgs): Promise<Events | null>;
}
