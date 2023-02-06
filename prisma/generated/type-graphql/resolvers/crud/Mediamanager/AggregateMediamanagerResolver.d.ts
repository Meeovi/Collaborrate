import { GraphQLResolveInfo } from "graphql";
import { AggregateMediamanagerArgs } from "./args/AggregateMediamanagerArgs";
import { AggregateMediamanager } from "../../outputs/AggregateMediamanager";
export declare class AggregateMediamanagerResolver {
    aggregateMediamanager(ctx: any, info: GraphQLResolveInfo, args: AggregateMediamanagerArgs): Promise<AggregateMediamanager>;
}
