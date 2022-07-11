import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOnePdf_templatesArgs } from "./args/UpdateOnePdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pdf_templates)
export class UpdateOnePdf_templatesResolver {
  @TypeGraphQL.Mutation(_returns => Pdf_templates, {
    nullable: true
  })
  async updateOnePdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePdf_templatesArgs): Promise<Pdf_templates | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
