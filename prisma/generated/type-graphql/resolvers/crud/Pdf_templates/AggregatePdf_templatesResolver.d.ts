import { GraphQLResolveInfo } from "graphql";
import { AggregatePdf_templatesArgs } from "./args/AggregatePdf_templatesArgs";
import { AggregatePdf_templates } from "../../outputs/AggregatePdf_templates";
export declare class AggregatePdf_templatesResolver {
    aggregatePdf_templates(ctx: any, info: GraphQLResolveInfo, args: AggregatePdf_templatesArgs): Promise<AggregatePdf_templates>;
}
