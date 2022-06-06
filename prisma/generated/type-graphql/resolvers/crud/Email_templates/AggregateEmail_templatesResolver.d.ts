import { GraphQLResolveInfo } from "graphql";
import { AggregateEmail_templatesArgs } from "./args/AggregateEmail_templatesArgs";
import { AggregateEmail_templates } from "../../outputs/AggregateEmail_templates";
export declare class AggregateEmail_templatesResolver {
    aggregateEmail_templates(ctx: any, info: GraphQLResolveInfo, args: AggregateEmail_templatesArgs): Promise<AggregateEmail_templates>;
}
