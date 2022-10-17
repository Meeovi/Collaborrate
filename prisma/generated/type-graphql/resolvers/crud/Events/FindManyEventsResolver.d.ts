import { GraphQLResolveInfo } from "graphql";
import { FindManyEventsArgs } from "./args/FindManyEventsArgs";
import { Events } from "../../../models/Events";
export declare class FindManyEventsResolver {
    findManyEvents(ctx: any, info: GraphQLResolveInfo, args: FindManyEventsArgs): Promise<Events[]>;
}
