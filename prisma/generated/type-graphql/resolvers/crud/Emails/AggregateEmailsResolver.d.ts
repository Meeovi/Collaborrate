import { GraphQLResolveInfo } from "graphql";
import { AggregateEmailsArgs } from "./args/AggregateEmailsArgs";
import { AggregateEmails } from "../../outputs/AggregateEmails";
export declare class AggregateEmailsResolver {
    aggregateEmails(ctx: any, info: GraphQLResolveInfo, args: AggregateEmailsArgs): Promise<AggregateEmails>;
}
