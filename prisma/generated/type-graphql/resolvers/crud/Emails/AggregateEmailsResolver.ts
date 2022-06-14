import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEmailsArgs } from "./args/AggregateEmailsArgs";
import { Emails } from "../../../models/Emails";
import { AggregateEmails } from "../../outputs/AggregateEmails";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Emails)
export class AggregateEmailsResolver {
  @TypeGraphQL.Query(_returns => AggregateEmails, {
    nullable: false
  })
  async aggregateEmails(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEmailsArgs): Promise<AggregateEmails> {
    return getPrismaFromContext(ctx).emails.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
