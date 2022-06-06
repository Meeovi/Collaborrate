import { GraphQLResolveInfo } from "graphql";
import { GroupByEmail_templatesArgs } from "./args/GroupByEmail_templatesArgs";
import { Email_templatesGroupBy } from "../../outputs/Email_templatesGroupBy";
export declare class GroupByEmail_templatesResolver {
    groupByEmail_templates(ctx: any, info: GraphQLResolveInfo, args: GroupByEmail_templatesArgs): Promise<Email_templatesGroupBy[]>;
}
