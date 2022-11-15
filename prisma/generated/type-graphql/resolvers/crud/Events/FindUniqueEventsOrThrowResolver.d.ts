import { GraphQLResolveInfo } from "graphql";
import { FindUniqueEventsOrThrowArgs } from "./args/FindUniqueEventsOrThrowArgs";
import { Events } from "../../../models/Events";
export declare class FindUniqueEventsOrThrowResolver {
    findUniqueEventsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEventsOrThrowArgs): Promise<Events | null>;
}
