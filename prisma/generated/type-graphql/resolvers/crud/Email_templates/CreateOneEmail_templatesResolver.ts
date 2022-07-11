import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneEmail_templatesArgs } from "./args/CreateOneEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Email_templates)
export class CreateOneEmail_templatesResolver {
  @TypeGraphQL.Mutation(_returns => Email_templates, {
    nullable: false
  })
  async createOneEmail_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEmail_templatesArgs): Promise<Email_templates> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).email_templates.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
