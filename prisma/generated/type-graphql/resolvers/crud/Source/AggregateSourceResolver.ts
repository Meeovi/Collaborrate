import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSourceArgs } from "./args/AggregateSourceArgs";
import { Source } from "../../../models/Source";
import { AggregateSource } from "../../outputs/AggregateSource";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Source)
export class AggregateSourceResolver {
  @TypeGraphQL.Query(_returns => AggregateSource, {
    nullable: false
  })
  async aggregateSource(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSourceArgs): Promise<AggregateSource> {
    return getPrismaFromContext(ctx).source.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
