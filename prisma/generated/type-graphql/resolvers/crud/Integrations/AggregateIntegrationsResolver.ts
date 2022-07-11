import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIntegrationsArgs } from "./args/AggregateIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
import { AggregateIntegrations } from "../../outputs/AggregateIntegrations";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Integrations)
export class AggregateIntegrationsResolver {
  @TypeGraphQL.Query(_returns => AggregateIntegrations, {
    nullable: false
  })
  async aggregateIntegrations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIntegrationsArgs): Promise<AggregateIntegrations> {
    return getPrismaFromContext(ctx).integrations.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
