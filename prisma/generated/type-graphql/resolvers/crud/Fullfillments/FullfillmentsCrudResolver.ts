import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFullfillmentsArgs } from "./args/AggregateFullfillmentsArgs";
import { CreateManyFullfillmentsArgs } from "./args/CreateManyFullfillmentsArgs";
import { CreateOneFullfillmentsArgs } from "./args/CreateOneFullfillmentsArgs";
import { DeleteManyFullfillmentsArgs } from "./args/DeleteManyFullfillmentsArgs";
import { DeleteOneFullfillmentsArgs } from "./args/DeleteOneFullfillmentsArgs";
import { FindFirstFullfillmentsArgs } from "./args/FindFirstFullfillmentsArgs";
import { FindManyFullfillmentsArgs } from "./args/FindManyFullfillmentsArgs";
import { FindUniqueFullfillmentsArgs } from "./args/FindUniqueFullfillmentsArgs";
import { GroupByFullfillmentsArgs } from "./args/GroupByFullfillmentsArgs";
import { UpdateManyFullfillmentsArgs } from "./args/UpdateManyFullfillmentsArgs";
import { UpdateOneFullfillmentsArgs } from "./args/UpdateOneFullfillmentsArgs";
import { UpsertOneFullfillmentsArgs } from "./args/UpsertOneFullfillmentsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Fullfillments } from "../../../models/Fullfillments";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFullfillments } from "../../outputs/AggregateFullfillments";
import { FullfillmentsGroupBy } from "../../outputs/FullfillmentsGroupBy";

@TypeGraphQL.Resolver(_of => Fullfillments)
export class FullfillmentsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateFullfillments, {
    nullable: false
  })
  async aggregateFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFullfillmentsArgs): Promise<AggregateFullfillments> {
    return getPrismaFromContext(ctx).fullfillments.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyFullfillmentsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Fullfillments, {
    nullable: false
  })
  async createOneFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneFullfillmentsArgs): Promise<Fullfillments> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyFullfillmentsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Fullfillments, {
    nullable: true
  })
  async deleteOneFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneFullfillmentsArgs): Promise<Fullfillments | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Fullfillments, {
    nullable: true
  })
  async findFirstFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFullfillmentsArgs): Promise<Fullfillments | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Fullfillments], {
    nullable: false
  })
  async findManyFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFullfillmentsArgs): Promise<Fullfillments[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Fullfillments, {
    nullable: true
  })
  async findUniqueFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFullfillmentsArgs): Promise<Fullfillments | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [FullfillmentsGroupBy], {
    nullable: false
  })
  async groupByFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFullfillmentsArgs): Promise<FullfillmentsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyFullfillmentsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Fullfillments, {
    nullable: true
  })
  async updateOneFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneFullfillmentsArgs): Promise<Fullfillments | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Fullfillments, {
    nullable: false
  })
  async upsertOneFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneFullfillmentsArgs): Promise<Fullfillments> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
