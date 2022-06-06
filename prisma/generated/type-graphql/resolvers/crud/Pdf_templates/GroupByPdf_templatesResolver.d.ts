import { GraphQLResolveInfo } from "graphql";
import { GroupByPdf_templatesArgs } from "./args/GroupByPdf_templatesArgs";
import { Pdf_templatesGroupBy } from "../../outputs/Pdf_templatesGroupBy";
export declare class GroupByPdf_templatesResolver {
    groupByPdf_templates(ctx: any, info: GraphQLResolveInfo, args: GroupByPdf_templatesArgs): Promise<Pdf_templatesGroupBy[]>;
}
