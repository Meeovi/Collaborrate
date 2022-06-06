import { GraphQLResolveInfo } from "graphql";
import { GroupByProject_templatesArgs } from "./args/GroupByProject_templatesArgs";
import { Project_templatesGroupBy } from "../../outputs/Project_templatesGroupBy";
export declare class GroupByProject_templatesResolver {
    groupByProject_templates(ctx: any, info: GraphQLResolveInfo, args: GroupByProject_templatesArgs): Promise<Project_templatesGroupBy[]>;
}
