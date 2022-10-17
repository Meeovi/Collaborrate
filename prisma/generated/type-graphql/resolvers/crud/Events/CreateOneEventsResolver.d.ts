import { GraphQLResolveInfo } from "graphql";
import { CreateOneEventsArgs } from "./args/CreateOneEventsArgs";
import { Events } from "../../../models/Events";
export declare class CreateOneEventsResolver {
    createOneEvents(ctx: any, info: GraphQLResolveInfo, args: CreateOneEventsArgs): Promise<Events>;
}
