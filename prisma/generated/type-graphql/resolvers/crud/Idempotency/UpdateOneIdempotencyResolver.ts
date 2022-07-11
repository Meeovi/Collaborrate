import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneIdempotencyArgs } from "./args/UpdateOneIdempotencyArgs";
import { Idempotency } from "../../../models/Idempotency";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Idempotency)
export class UpdateOneIdempotencyResolver {
  @TypeGraphQL.Mutation(_returns => Idempotency, {
    nullable: true
  })
  async updateOneIdempotency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneIdempotencyArgs): Promise<Idempotency | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).idempotency.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
