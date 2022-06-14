import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePartnersArgs } from "./args/AggregatePartnersArgs";
import { Partners } from "../../../models/Partners";
import { AggregatePartners } from "../../outputs/AggregatePartners";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Partners)
export class AggregatePartnersResolver {
  @TypeGraphQL.Query(_returns => AggregatePartners, {
    nullable: false
  })
  async aggregatePartners(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePartnersArgs): Promise<AggregatePartners> {
    return getPrismaFromContext(ctx).partners.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
