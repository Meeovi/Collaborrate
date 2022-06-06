import { GraphQLResolveInfo } from "graphql";
import { GroupByNewsletter_subscribersArgs } from "./args/GroupByNewsletter_subscribersArgs";
import { Newsletter_subscribersGroupBy } from "../../outputs/Newsletter_subscribersGroupBy";
export declare class GroupByNewsletter_subscribersResolver {
    groupByNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: GroupByNewsletter_subscribersArgs): Promise<Newsletter_subscribersGroupBy[]>;
}
