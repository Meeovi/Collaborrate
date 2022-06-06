import { GraphQLResolveInfo } from "graphql";
import { DeleteEventsArgs } from "./args/DeleteEventsArgs";
import { Events } from "../../../models/Events";
export declare class DeleteEventsResolver {
    deleteEvents(ctx: any, info: GraphQLResolveInfo, args: DeleteEventsArgs): Promise<Events | null>;
}
