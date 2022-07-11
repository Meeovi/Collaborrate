import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSettingscustomersArgs } from "./args/AggregateSettingscustomersArgs";
import { CreateManySettingscustomersArgs } from "./args/CreateManySettingscustomersArgs";
import { CreateOneSettingscustomersArgs } from "./args/CreateOneSettingscustomersArgs";
import { DeleteManySettingscustomersArgs } from "./args/DeleteManySettingscustomersArgs";
import { DeleteOneSettingscustomersArgs } from "./args/DeleteOneSettingscustomersArgs";
import { FindFirstSettingscustomersArgs } from "./args/FindFirstSettingscustomersArgs";
import { FindManySettingscustomersArgs } from "./args/FindManySettingscustomersArgs";
import { FindUniqueSettingscustomersArgs } from "./args/FindUniqueSettingscustomersArgs";
import { GroupBySettingscustomersArgs } from "./args/GroupBySettingscustomersArgs";
import { UpdateManySettingscustomersArgs } from "./args/UpdateManySettingscustomersArgs";
import { UpdateOneSettingscustomersArgs } from "./args/UpdateOneSettingscustomersArgs";
import { UpsertOneSettingscustomersArgs } from "./args/UpsertOneSettingscustomersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Settingscustomers } from "../../../models/Settingscustomers";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSettingscustomers } from "../../outputs/AggregateSettingscustomers";
import { SettingscustomersGroupBy } from "../../outputs/SettingscustomersGroupBy";

@TypeGraphQL.Resolver(_of => Settingscustomers)
export class SettingscustomersCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSettingscustomers, {
    nullable: false
  })
  async aggregateSettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSettingscustomersArgs): Promise<AggregateSettingscustomers> {
    return getPrismaFromContext(ctx).settingscustomers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySettingscustomersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Settingscustomers, {
    nullable: false
  })
  async createOneSettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSettingscustomersArgs): Promise<Settingscustomers> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySettingscustomersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Settingscustomers, {
    nullable: true
  })
  async deleteOneSettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSettingscustomersArgs): Promise<Settingscustomers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Settingscustomers, {
    nullable: true
  })
  async findFirstSettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSettingscustomersArgs): Promise<Settingscustomers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Settingscustomers], {
    nullable: false
  })
  async findManySettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySettingscustomersArgs): Promise<Settingscustomers[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Settingscustomers, {
    nullable: true
  })
  async findUniqueSettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSettingscustomersArgs): Promise<Settingscustomers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SettingscustomersGroupBy], {
    nullable: false
  })
  async groupBySettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySettingscustomersArgs): Promise<SettingscustomersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySettingscustomersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Settingscustomers, {
    nullable: true
  })
  async updateOneSettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSettingscustomersArgs): Promise<Settingscustomers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Settingscustomers, {
    nullable: false
  })
  async upsertOneSettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSettingscustomersArgs): Promise<Settingscustomers> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
