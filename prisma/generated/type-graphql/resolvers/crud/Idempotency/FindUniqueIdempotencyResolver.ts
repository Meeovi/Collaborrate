import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueIdempotencyArgs } from "./args/FindUniqueIdempotencyArgs";
import { Idempotency } from "../../../models/Idempotency";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Idempotency)
export class FindUniqueIdempotencyResolver {
  @TypeGraphQL.Query(_returns => Idempotency, {
    nullable: true
  })
  async idempotency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIdempotencyArgs): Promise<Idempotency | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).idempotency.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
