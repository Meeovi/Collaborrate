import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueEmail_templatesArgs } from "./args/FindUniqueEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Email_templates)
export class FindUniqueEmail_templatesResolver {
  @TypeGraphQL.Query(_returns => Email_templates, {
    nullable: true
  })
  async findUniqueEmail_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEmail_templatesArgs): Promise<Email_templates | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).email_templates.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
