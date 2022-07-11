import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIdempotencyArgs } from "./args/AggregateIdempotencyArgs";
import { CreateManyIdempotencyArgs } from "./args/CreateManyIdempotencyArgs";
import { CreateOneIdempotencyArgs } from "./args/CreateOneIdempotencyArgs";
import { DeleteManyIdempotencyArgs } from "./args/DeleteManyIdempotencyArgs";
import { DeleteOneIdempotencyArgs } from "./args/DeleteOneIdempotencyArgs";
import { FindFirstIdempotencyArgs } from "./args/FindFirstIdempotencyArgs";
import { FindManyIdempotencyArgs } from "./args/FindManyIdempotencyArgs";
import { FindUniqueIdempotencyArgs } from "./args/FindUniqueIdempotencyArgs";
import { GroupByIdempotencyArgs } from "./args/GroupByIdempotencyArgs";
import { UpdateManyIdempotencyArgs } from "./args/UpdateManyIdempotencyArgs";
import { UpdateOneIdempotencyArgs } from "./args/UpdateOneIdempotencyArgs";
import { UpsertOneIdempotencyArgs } from "./args/UpsertOneIdempotencyArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Idempotency } from "../../../models/Idempotency";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateIdempotency } from "../../outputs/AggregateIdempotency";
import { IdempotencyGroupBy } from "../../outputs/IdempotencyGroupBy";

@TypeGraphQL.Resolver(_of => Idempotency)
export class IdempotencyCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateIdempotency, {
    nullable: false
  })
  async aggregateIdempotency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIdempotencyArgs): Promise<AggregateIdempotency> {
    return getPrismaFromContext(ctx).idempotency.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyIdempotency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyIdempotencyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).idempotency.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyIdempotency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyIdempotencyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).idempotency.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => Idempotency, {
    nullable: true
  })
  async findFirstIdempotency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIdempotencyArgs): Promise<Idempotency | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).idempotency.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Idempotency], {
    nullable: false
  })
  async idempotencies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyIdempotencyArgs): Promise<Idempotency[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).idempotency.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [IdempotencyGroupBy], {
    nullable: false
  })
  async groupByIdempotency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIdempotencyArgs): Promise<IdempotencyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).idempotency.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyIdempotency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyIdempotencyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).idempotency.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => Idempotency, {
    nullable: false
  })
  async upsertOneIdempotency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneIdempotencyArgs): Promise<Idempotency> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).idempotency.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
