import { GraphQLResolveInfo } from "graphql";
import { GroupByProjectsArgs } from "./args/GroupByProjectsArgs";
import { ProjectsGroupBy } from "../../outputs/ProjectsGroupBy";
export declare class GroupByProjectsResolver {
    groupByProjects(ctx: any, info: GraphQLResolveInfo, args: GroupByProjectsArgs): Promise<ProjectsGroupBy[]>;
}
