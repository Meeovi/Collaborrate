import { GraphQLResolveInfo } from "graphql";
import { UpdateEventsArgs } from "./args/UpdateEventsArgs";
import { Events } from "../../../models/Events";
export declare class UpdateEventsResolver {
    updateEvents(ctx: any, info: GraphQLResolveInfo, args: UpdateEventsArgs): Promise<Events | null>;
}
