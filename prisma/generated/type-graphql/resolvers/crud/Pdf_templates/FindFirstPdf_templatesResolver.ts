import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstPdf_templatesArgs } from "./args/FindFirstPdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pdf_templates)
export class FindFirstPdf_templatesResolver {
  @TypeGraphQL.Query(_returns => Pdf_templates, {
    nullable: true
  })
  async findFirstPdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPdf_templatesArgs): Promise<Pdf_templates | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
