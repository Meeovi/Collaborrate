import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPdf_templatesArgs } from "./args/GroupByPdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
import { Pdf_templatesGroupBy } from "../../outputs/Pdf_templatesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pdf_templates)
export class GroupByPdf_templatesResolver {
  @TypeGraphQL.Query(_returns => [Pdf_templatesGroupBy], {
    nullable: false
  })
  async groupByPdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPdf_templatesArgs): Promise<Pdf_templatesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
