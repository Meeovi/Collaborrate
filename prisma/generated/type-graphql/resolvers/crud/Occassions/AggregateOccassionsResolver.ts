import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOccassionsArgs } from "./args/AggregateOccassionsArgs";
import { Occassions } from "../../../models/Occassions";
import { AggregateOccassions } from "../../outputs/AggregateOccassions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Occassions)
export class AggregateOccassionsResolver {
  @TypeGraphQL.Query(_returns => AggregateOccassions, {
    nullable: false
  })
  async aggregateOccassions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOccassionsArgs): Promise<AggregateOccassions> {
    return getPrismaFromContext(ctx).occassions.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
