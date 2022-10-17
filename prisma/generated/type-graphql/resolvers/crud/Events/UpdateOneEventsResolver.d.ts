import { GraphQLResolveInfo } from "graphql";
import { UpdateOneEventsArgs } from "./args/UpdateOneEventsArgs";
import { Events } from "../../../models/Events";
export declare class UpdateOneEventsResolver {
    updateOneEvents(ctx: any, info: GraphQLResolveInfo, args: UpdateOneEventsArgs): Promise<Events | null>;
}
