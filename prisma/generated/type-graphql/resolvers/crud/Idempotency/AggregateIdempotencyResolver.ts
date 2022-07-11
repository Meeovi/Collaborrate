import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIdempotencyArgs } from "./args/AggregateIdempotencyArgs";
import { Idempotency } from "../../../models/Idempotency";
import { AggregateIdempotency } from "../../outputs/AggregateIdempotency";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Idempotency)
export class AggregateIdempotencyResolver {
  @TypeGraphQL.Query(_returns => AggregateIdempotency, {
    nullable: false
  })
  async aggregateIdempotency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIdempotencyArgs): Promise<AggregateIdempotency> {
    return getPrismaFromContext(ctx).idempotency.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
