import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateInternalizationArgs } from "./args/AggregateInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
import { AggregateInternalization } from "../../outputs/AggregateInternalization";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Internalization)
export class AggregateInternalizationResolver {
  @TypeGraphQL.Query(_returns => AggregateInternalization, {
    nullable: false
  })
  async aggregateInternalization(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInternalizationArgs): Promise<AggregateInternalization> {
    return getPrismaFromContext(ctx).internalization.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
