import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGraphQLConfigArgs } from "./args/AggregateGraphQLConfigArgs";
import { CreateManyGraphQLConfigArgs } from "./args/CreateManyGraphQLConfigArgs";
import { CreateOneGraphQLConfigArgs } from "./args/CreateOneGraphQLConfigArgs";
import { DeleteManyGraphQLConfigArgs } from "./args/DeleteManyGraphQLConfigArgs";
import { DeleteOneGraphQLConfigArgs } from "./args/DeleteOneGraphQLConfigArgs";
import { FindFirstGraphQLConfigArgs } from "./args/FindFirstGraphQLConfigArgs";
import { FindManyGraphQLConfigArgs } from "./args/FindManyGraphQLConfigArgs";
import { FindUniqueGraphQLConfigArgs } from "./args/FindUniqueGraphQLConfigArgs";
import { GroupByGraphQLConfigArgs } from "./args/GroupByGraphQLConfigArgs";
import { UpdateManyGraphQLConfigArgs } from "./args/UpdateManyGraphQLConfigArgs";
import { UpdateOneGraphQLConfigArgs } from "./args/UpdateOneGraphQLConfigArgs";
import { UpsertOneGraphQLConfigArgs } from "./args/UpsertOneGraphQLConfigArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { GraphQLConfig } from "../../../models/GraphQLConfig";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGraphQLConfig } from "../../outputs/AggregateGraphQLConfig";
import { GraphQLConfigGroupBy } from "../../outputs/GraphQLConfigGroupBy";

@TypeGraphQL.Resolver(_of => GraphQLConfig)
export class GraphQLConfigCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateGraphQLConfig, {
    nullable: false
  })
  async aggregateGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGraphQLConfigArgs): Promise<AggregateGraphQLConfig> {
    return getPrismaFromContext(ctx).graphQLConfig.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyGraphQLConfigArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GraphQLConfig, {
    nullable: false
  })
  async createOneGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGraphQLConfigArgs): Promise<GraphQLConfig> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyGraphQLConfigArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GraphQLConfig, {
    nullable: true
  })
  async deleteOneGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGraphQLConfigArgs): Promise<GraphQLConfig | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GraphQLConfig, {
    nullable: true
  })
  async findFirstGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGraphQLConfigArgs): Promise<GraphQLConfig | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GraphQLConfig], {
    nullable: false
  })
  async graphQLConfigs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGraphQLConfigArgs): Promise<GraphQLConfig[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GraphQLConfig, {
    nullable: true
  })
  async graphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGraphQLConfigArgs): Promise<GraphQLConfig | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GraphQLConfigGroupBy], {
    nullable: false
  })
  async groupByGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGraphQLConfigArgs): Promise<GraphQLConfigGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyGraphQLConfigArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GraphQLConfig, {
    nullable: true
  })
  async updateOneGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGraphQLConfigArgs): Promise<GraphQLConfig | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => GraphQLConfig, {
    nullable: false
  })
  async upsertOneGraphQLConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneGraphQLConfigArgs): Promise<GraphQLConfig> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).graphQLConfig.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
