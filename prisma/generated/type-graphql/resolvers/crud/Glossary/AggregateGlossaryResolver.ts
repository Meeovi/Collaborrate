import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGlossaryArgs } from "./args/AggregateGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
import { AggregateGlossary } from "../../outputs/AggregateGlossary";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Glossary)
export class AggregateGlossaryResolver {
  @TypeGraphQL.Query(_returns => AggregateGlossary, {
    nullable: false
  })
  async aggregateGlossary(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGlossaryArgs): Promise<AggregateGlossary> {
    return getPrismaFromContext(ctx).glossary.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
