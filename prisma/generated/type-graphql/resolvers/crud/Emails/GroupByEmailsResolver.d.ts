import { GraphQLResolveInfo } from "graphql";
import { GroupByEmailsArgs } from "./args/GroupByEmailsArgs";
import { EmailsGroupBy } from "../../outputs/EmailsGroupBy";
export declare class GroupByEmailsResolver {
    groupByEmails(ctx: any, info: GraphQLResolveInfo, args: GroupByEmailsArgs): Promise<EmailsGroupBy[]>;
}
