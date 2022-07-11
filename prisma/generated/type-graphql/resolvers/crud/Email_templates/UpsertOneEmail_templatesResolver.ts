import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneEmail_templatesArgs } from "./args/UpsertOneEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Email_templates)
export class UpsertOneEmail_templatesResolver {
  @TypeGraphQL.Mutation(_returns => Email_templates, {
    nullable: false
  })
  async upsertOneEmail_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEmail_templatesArgs): Promise<Email_templates> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).email_templates.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
