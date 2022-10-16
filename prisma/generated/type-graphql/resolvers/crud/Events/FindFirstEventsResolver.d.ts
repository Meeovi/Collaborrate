import { GraphQLResolveInfo } from "graphql";
import { FindFirstEventsArgs } from "./args/FindFirstEventsArgs";
import { Events } from "../../../models/Events";
export declare class FindFirstEventsResolver {
    findFirstEvents(ctx: any, info: GraphQLResolveInfo, args: FindFirstEventsArgs): Promise<Events | null>;
}
