import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFullfillmentsArgs } from "./args/AggregateFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
import { AggregateFullfillments } from "../../outputs/AggregateFullfillments";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Fullfillments)
export class AggregateFullfillmentsResolver {
  @TypeGraphQL.Query(_returns => AggregateFullfillments, {
    nullable: false
  })
  async aggregateFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFullfillmentsArgs): Promise<AggregateFullfillments> {
    return getPrismaFromContext(ctx).fullfillments.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
