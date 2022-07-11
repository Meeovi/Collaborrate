import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMediamanagerArgs } from "./args/AggregateMediamanagerArgs";
import { CreateManyMediamanagerArgs } from "./args/CreateManyMediamanagerArgs";
import { CreateOneMediamanagerArgs } from "./args/CreateOneMediamanagerArgs";
import { DeleteManyMediamanagerArgs } from "./args/DeleteManyMediamanagerArgs";
import { DeleteOneMediamanagerArgs } from "./args/DeleteOneMediamanagerArgs";
import { FindFirstMediamanagerArgs } from "./args/FindFirstMediamanagerArgs";
import { FindManyMediamanagerArgs } from "./args/FindManyMediamanagerArgs";
import { FindUniqueMediamanagerArgs } from "./args/FindUniqueMediamanagerArgs";
import { GroupByMediamanagerArgs } from "./args/GroupByMediamanagerArgs";
import { UpdateManyMediamanagerArgs } from "./args/UpdateManyMediamanagerArgs";
import { UpdateOneMediamanagerArgs } from "./args/UpdateOneMediamanagerArgs";
import { UpsertOneMediamanagerArgs } from "./args/UpsertOneMediamanagerArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Mediamanager } from "../../../models/Mediamanager";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMediamanager } from "../../outputs/AggregateMediamanager";
import { MediamanagerGroupBy } from "../../outputs/MediamanagerGroupBy";

@TypeGraphQL.Resolver(_of => Mediamanager)
export class MediamanagerCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMediamanager, {
    nullable: false
  })
  async aggregateMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMediamanagerArgs): Promise<AggregateMediamanager> {
    return getPrismaFromContext(ctx).mediamanager.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMediamanagerArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Mediamanager, {
    nullable: false
  })
  async createOneMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMediamanagerArgs): Promise<Mediamanager> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMediamanagerArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Mediamanager, {
    nullable: true
  })
  async deleteOneMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMediamanagerArgs): Promise<Mediamanager | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Mediamanager, {
    nullable: true
  })
  async findFirstMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMediamanagerArgs): Promise<Mediamanager | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Mediamanager], {
    nullable: false
  })
  async mediamanagers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMediamanagerArgs): Promise<Mediamanager[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Mediamanager, {
    nullable: true
  })
  async mediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMediamanagerArgs): Promise<Mediamanager | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MediamanagerGroupBy], {
    nullable: false
  })
  async groupByMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMediamanagerArgs): Promise<MediamanagerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMediamanagerArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Mediamanager, {
    nullable: true
  })
  async updateOneMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMediamanagerArgs): Promise<Mediamanager | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Mediamanager, {
    nullable: false
  })
  async upsertOneMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMediamanagerArgs): Promise<Mediamanager> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
