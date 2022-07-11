import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGlobalConfigArgs } from "./args/AggregateGlobalConfigArgs";
import { CreateManyGlobalConfigArgs } from "./args/CreateManyGlobalConfigArgs";
import { CreateOneGlobalConfigArgs } from "./args/CreateOneGlobalConfigArgs";
import { DeleteManyGlobalConfigArgs } from "./args/DeleteManyGlobalConfigArgs";
import { DeleteOneGlobalConfigArgs } from "./args/DeleteOneGlobalConfigArgs";
import { FindFirstGlobalConfigArgs } from "./args/FindFirstGlobalConfigArgs";
import { FindManyGlobalConfigArgs } from "./args/FindManyGlobalConfigArgs";
import { FindUniqueGlobalConfigArgs } from "./args/FindUniqueGlobalConfigArgs";
import { GroupByGlobalConfigArgs } from "./args/GroupByGlobalConfigArgs";
import { UpdateManyGlobalConfigArgs } from "./args/UpdateManyGlobalConfigArgs";
import { UpdateOneGlobalConfigArgs } from "./args/UpdateOneGlobalConfigArgs";
import { UpsertOneGlobalConfigArgs } from "./args/UpsertOneGlobalConfigArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { GlobalConfig } from "../../../models/GlobalConfig";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGlobalConfig } from "../../outputs/AggregateGlobalConfig";
import { GlobalConfigGroupBy } from "../../outputs/GlobalConfigGroupBy";

@TypeGraphQL.Resolver(_of => GlobalConfig)
export class GlobalConfigCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateGlobalConfig, {
    nullable: false
  })
  async aggregateGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGlobalConfigArgs): Promise<AggregateGlobalConfig> {
    return getPrismaFromContext(ctx).globalConfig.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyGlobalConfigArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GlobalConfig, {
    nullable: false
  })
  async createOneGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGlobalConfigArgs): Promise<GlobalConfig> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyGlobalConfigArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GlobalConfig, {
    nullable: true
  })
  async deleteOneGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGlobalConfigArgs): Promise<GlobalConfig | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GlobalConfig, {
    nullable: true
  })
  async findFirstGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGlobalConfigArgs): Promise<GlobalConfig | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GlobalConfig], {
    nullable: false
  })
  async globalConfigs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGlobalConfigArgs): Promise<GlobalConfig[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GlobalConfig, {
    nullable: true
  })
  async globalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGlobalConfigArgs): Promise<GlobalConfig | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GlobalConfigGroupBy], {
    nullable: false
  })
  async groupByGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGlobalConfigArgs): Promise<GlobalConfigGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyGlobalConfigArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GlobalConfig, {
    nullable: true
  })
  async updateOneGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGlobalConfigArgs): Promise<GlobalConfig | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GlobalConfig, {
    nullable: false
  })
  async upsertOneGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneGlobalConfigArgs): Promise<GlobalConfig> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).globalConfig.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
