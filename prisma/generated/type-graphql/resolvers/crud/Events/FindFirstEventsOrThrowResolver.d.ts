import { GraphQLResolveInfo } from "graphql";
import { FindFirstEventsOrThrowArgs } from "./args/FindFirstEventsOrThrowArgs";
import { Events } from "../../../models/Events";
export declare class FindFirstEventsOrThrowResolver {
    findFirstEventsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstEventsOrThrowArgs): Promise<Events | null>;
}
