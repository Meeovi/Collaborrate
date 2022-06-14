import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePdf_templatesArgs } from "./args/AggregatePdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
import { AggregatePdf_templates } from "../../outputs/AggregatePdf_templates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pdf_templates)
export class AggregatePdf_templatesResolver {
  @TypeGraphQL.Query(_returns => AggregatePdf_templates, {
    nullable: false
  })
  async aggregatePdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePdf_templatesArgs): Promise<AggregatePdf_templates> {
    return getPrismaFromContext(ctx).pdf_templates.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
