import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProvidersArgs } from "./args/AggregateProvidersArgs";
import { Providers } from "../../../models/Providers";
import { AggregateProviders } from "../../outputs/AggregateProviders";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Providers)
export class AggregateProvidersResolver {
  @TypeGraphQL.Query(_returns => AggregateProviders, {
    nullable: false
  })
  async aggregateProviders(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProvidersArgs): Promise<AggregateProviders> {
    return getPrismaFromContext(ctx).providers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
