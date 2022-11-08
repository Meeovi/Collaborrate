import { GraphQLResolveInfo } from "graphql";
import { DeleteOneEventsArgs } from "./args/DeleteOneEventsArgs";
import { Events } from "../../../models/Events";
export declare class DeleteOneEventsResolver {
    deleteOneEvents(ctx: any, info: GraphQLResolveInfo, args: DeleteOneEventsArgs): Promise<Events | null>;
}
