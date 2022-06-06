import { GraphQLResolveInfo } from "graphql";
import { CreateEventsArgs } from "./args/CreateEventsArgs";
import { Events } from "../../../models/Events";
export declare class CreateEventsResolver {
    createEvents(ctx: any, info: GraphQLResolveInfo, args: CreateEventsArgs): Promise<Events>;
}
