import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneIdempotencyArgs } from "./args/CreateOneIdempotencyArgs";
import { Idempotency } from "../../../models/Idempotency";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Idempotency)
export class CreateOneIdempotencyResolver {
  @TypeGraphQL.Mutation(_returns => Idempotency, {
    nullable: false
  })
  async createOneIdempotency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneIdempotencyArgs): Promise<Idempotency> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).idempotency.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
