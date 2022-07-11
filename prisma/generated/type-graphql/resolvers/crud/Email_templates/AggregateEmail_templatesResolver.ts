import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEmail_templatesArgs } from "./args/AggregateEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
import { AggregateEmail_templates } from "../../outputs/AggregateEmail_templates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Email_templates)
export class AggregateEmail_templatesResolver {
  @TypeGraphQL.Query(_returns => AggregateEmail_templates, {
    nullable: false
  })
  async aggregateEmail_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEmail_templatesArgs): Promise<AggregateEmail_templates> {
    return getPrismaFromContext(ctx).email_templates.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
