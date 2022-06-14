import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSettingsmarketingArgs } from "./args/AggregateSettingsmarketingArgs";
import { CreateManySettingsmarketingArgs } from "./args/CreateManySettingsmarketingArgs";
import { CreateSettingsmarketingArgs } from "./args/CreateSettingsmarketingArgs";
import { DeleteManySettingsmarketingArgs } from "./args/DeleteManySettingsmarketingArgs";
import { DeleteSettingsmarketingArgs } from "./args/DeleteSettingsmarketingArgs";
import { FindFirstSettingsmarketingArgs } from "./args/FindFirstSettingsmarketingArgs";
import { FindManySettingsmarketingArgs } from "./args/FindManySettingsmarketingArgs";
import { FindUniqueSettingsmarketingArgs } from "./args/FindUniqueSettingsmarketingArgs";
import { GroupBySettingsmarketingArgs } from "./args/GroupBySettingsmarketingArgs";
import { UpdateManySettingsmarketingArgs } from "./args/UpdateManySettingsmarketingArgs";
import { UpdateSettingsmarketingArgs } from "./args/UpdateSettingsmarketingArgs";
import { UpsertSettingsmarketingArgs } from "./args/UpsertSettingsmarketingArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSettingsmarketing } from "../../outputs/AggregateSettingsmarketing";
import { SettingsmarketingGroupBy } from "../../outputs/SettingsmarketingGroupBy";

@TypeGraphQL.Resolver(_of => Settingsmarketing)
export class SettingsmarketingCrudResolver {
  @TypeGraphQL.Query(_returns => Settingsmarketing, {
    nullable: true
  })
  async settingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSettingsmarketingArgs): Promise<Settingsmarketing | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Settingsmarketing, {
    nullable: true
  })
  async findFirstSettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSettingsmarketingArgs): Promise<Settingsmarketing | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Settingsmarketing], {
    nullable: false
  })
  async settingsmarketings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySettingsmarketingArgs): Promise<Settingsmarketing[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Settingsmarketing, {
    nullable: false
  })
  async createSettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateSettingsmarketingArgs): Promise<Settingsmarketing> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySettingsmarketingArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Settingsmarketing, {
    nullable: true
  })
  async deleteSettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteSettingsmarketingArgs): Promise<Settingsmarketing | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Settingsmarketing, {
    nullable: true
  })
  async updateSettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateSettingsmarketingArgs): Promise<Settingsmarketing | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySettingsmarketingArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySettingsmarketingArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Settingsmarketing, {
    nullable: false
  })
  async upsertSettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertSettingsmarketingArgs): Promise<Settingsmarketing> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateSettingsmarketing, {
    nullable: false
  })
  async aggregateSettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSettingsmarketingArgs): Promise<AggregateSettingsmarketing> {
    return getPrismaFromContext(ctx).settingsmarketing.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [SettingsmarketingGroupBy], {
    nullable: false
  })
  async groupBySettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySettingsmarketingArgs): Promise<SettingsmarketingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsmarketing.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
