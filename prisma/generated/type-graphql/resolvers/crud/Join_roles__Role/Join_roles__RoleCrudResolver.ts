import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateJoin_roles__RoleArgs } from "./args/AggregateJoin_roles__RoleArgs";
import { CreateManyJoin_roles__RoleArgs } from "./args/CreateManyJoin_roles__RoleArgs";
import { CreateOneJoin_roles__RoleArgs } from "./args/CreateOneJoin_roles__RoleArgs";
import { DeleteManyJoin_roles__RoleArgs } from "./args/DeleteManyJoin_roles__RoleArgs";
import { DeleteOneJoin_roles__RoleArgs } from "./args/DeleteOneJoin_roles__RoleArgs";
import { FindFirstJoin_roles__RoleArgs } from "./args/FindFirstJoin_roles__RoleArgs";
import { FindManyJoin_roles__RoleArgs } from "./args/FindManyJoin_roles__RoleArgs";
import { FindUniqueJoin_roles__RoleArgs } from "./args/FindUniqueJoin_roles__RoleArgs";
import { GroupByJoin_roles__RoleArgs } from "./args/GroupByJoin_roles__RoleArgs";
import { UpdateManyJoin_roles__RoleArgs } from "./args/UpdateManyJoin_roles__RoleArgs";
import { UpdateOneJoin_roles__RoleArgs } from "./args/UpdateOneJoin_roles__RoleArgs";
import { UpsertOneJoin_roles__RoleArgs } from "./args/UpsertOneJoin_roles__RoleArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Join_roles__Role } from "../../../models/Join_roles__Role";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateJoin_roles__Role } from "../../outputs/AggregateJoin_roles__Role";
import { Join_roles__RoleGroupBy } from "../../outputs/Join_roles__RoleGroupBy";

@TypeGraphQL.Resolver(_of => Join_roles__Role)
export class Join_roles__RoleCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateJoin_roles__Role, {
    nullable: false
  })
  async aggregateJoin_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateJoin_roles__RoleArgs): Promise<AggregateJoin_roles__Role> {
    return getPrismaFromContext(ctx).join_roles__Role.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyJoin_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyJoin_roles__RoleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Join_roles__Role, {
    nullable: false
  })
  async createOneJoin_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneJoin_roles__RoleArgs): Promise<Join_roles__Role> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyJoin_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyJoin_roles__RoleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Join_roles__Role, {
    nullable: true
  })
  async deleteOneJoin_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneJoin_roles__RoleArgs): Promise<Join_roles__Role | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Join_roles__Role, {
    nullable: true
  })
  async findFirstJoin_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstJoin_roles__RoleArgs): Promise<Join_roles__Role | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Join_roles__Role], {
    nullable: false
  })
  async join_roles__Roles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyJoin_roles__RoleArgs): Promise<Join_roles__Role[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Join_roles__Role, {
    nullable: true
  })
  async join_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueJoin_roles__RoleArgs): Promise<Join_roles__Role | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Join_roles__RoleGroupBy], {
    nullable: false
  })
  async groupByJoin_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByJoin_roles__RoleArgs): Promise<Join_roles__RoleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyJoin_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyJoin_roles__RoleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Join_roles__Role, {
    nullable: true
  })
  async updateOneJoin_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneJoin_roles__RoleArgs): Promise<Join_roles__Role | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Join_roles__Role, {
    nullable: false
  })
  async upsertOneJoin_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneJoin_roles__RoleArgs): Promise<Join_roles__Role> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
