import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOnePdf_templatesArgs } from "./args/CreateOnePdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pdf_templates)
export class CreateOnePdf_templatesResolver {
  @TypeGraphQL.Mutation(_returns => Pdf_templates, {
    nullable: false
  })
  async createOnePdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePdf_templatesArgs): Promise<Pdf_templates> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
