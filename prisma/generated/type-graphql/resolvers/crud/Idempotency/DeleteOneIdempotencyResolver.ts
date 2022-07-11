import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneIdempotencyArgs } from "./args/DeleteOneIdempotencyArgs";
import { Idempotency } from "../../../models/Idempotency";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Idempotency)
export class DeleteOneIdempotencyResolver {
  @TypeGraphQL.Mutation(_returns => Idempotency, {
    nullable: true
  })
  async deleteOneIdempotency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneIdempotencyArgs): Promise<Idempotency | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).idempotency.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
