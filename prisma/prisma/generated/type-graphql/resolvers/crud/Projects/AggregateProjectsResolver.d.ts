import { GraphQLResolveInfo } from "graphql";
import { AggregateProjectsArgs } from "./args/AggregateProjectsArgs";
import { AggregateProjects } from "../../outputs/AggregateProjects";
export declare class AggregateProjectsResolver {
    aggregateProjects(ctx: any, info: GraphQLResolveInfo, args: AggregateProjectsArgs): Promise<AggregateProjects>;
}
