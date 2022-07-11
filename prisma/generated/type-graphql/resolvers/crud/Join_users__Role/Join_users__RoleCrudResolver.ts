import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateJoin_users__RoleArgs } from "./args/AggregateJoin_users__RoleArgs";
import { CreateManyJoin_users__RoleArgs } from "./args/CreateManyJoin_users__RoleArgs";
import { CreateOneJoin_users__RoleArgs } from "./args/CreateOneJoin_users__RoleArgs";
import { DeleteManyJoin_users__RoleArgs } from "./args/DeleteManyJoin_users__RoleArgs";
import { DeleteOneJoin_users__RoleArgs } from "./args/DeleteOneJoin_users__RoleArgs";
import { FindFirstJoin_users__RoleArgs } from "./args/FindFirstJoin_users__RoleArgs";
import { FindManyJoin_users__RoleArgs } from "./args/FindManyJoin_users__RoleArgs";
import { FindUniqueJoin_users__RoleArgs } from "./args/FindUniqueJoin_users__RoleArgs";
import { GroupByJoin_users__RoleArgs } from "./args/GroupByJoin_users__RoleArgs";
import { UpdateManyJoin_users__RoleArgs } from "./args/UpdateManyJoin_users__RoleArgs";
import { UpdateOneJoin_users__RoleArgs } from "./args/UpdateOneJoin_users__RoleArgs";
import { UpsertOneJoin_users__RoleArgs } from "./args/UpsertOneJoin_users__RoleArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Join_users__Role } from "../../../models/Join_users__Role";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateJoin_users__Role } from "../../outputs/AggregateJoin_users__Role";
import { Join_users__RoleGroupBy } from "../../outputs/Join_users__RoleGroupBy";

@TypeGraphQL.Resolver(_of => Join_users__Role)
export class Join_users__RoleCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateJoin_users__Role, {
    nullable: false
  })
  async aggregateJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateJoin_users__RoleArgs): Promise<AggregateJoin_users__Role> {
    return getPrismaFromContext(ctx).join_users__Role.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyJoin_users__RoleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Join_users__Role, {
    nullable: false
  })
  async createOneJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneJoin_users__RoleArgs): Promise<Join_users__Role> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyJoin_users__RoleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Join_users__Role, {
    nullable: true
  })
  async deleteOneJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneJoin_users__RoleArgs): Promise<Join_users__Role | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Join_users__Role, {
    nullable: true
  })
  async findFirstJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstJoin_users__RoleArgs): Promise<Join_users__Role | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Join_users__Role], {
    nullable: false
  })
  async join_users__Roles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyJoin_users__RoleArgs): Promise<Join_users__Role[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Join_users__Role, {
    nullable: true
  })
  async join_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueJoin_users__RoleArgs): Promise<Join_users__Role | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Join_users__RoleGroupBy], {
    nullable: false
  })
  async groupByJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByJoin_users__RoleArgs): Promise<Join_users__RoleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyJoin_users__RoleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Join_users__Role, {
    nullable: true
  })
  async updateOneJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneJoin_users__RoleArgs): Promise<Join_users__Role | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Join_users__Role, {
    nullable: false
  })
  async upsertOneJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneJoin_users__RoleArgs): Promise<Join_users__Role> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
