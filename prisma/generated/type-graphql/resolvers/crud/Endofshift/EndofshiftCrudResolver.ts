import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEndofshiftArgs } from "./args/AggregateEndofshiftArgs";
import { CreateManyEndofshiftArgs } from "./args/CreateManyEndofshiftArgs";
import { CreateOneEndofshiftArgs } from "./args/CreateOneEndofshiftArgs";
import { DeleteManyEndofshiftArgs } from "./args/DeleteManyEndofshiftArgs";
import { DeleteOneEndofshiftArgs } from "./args/DeleteOneEndofshiftArgs";
import { FindFirstEndofshiftArgs } from "./args/FindFirstEndofshiftArgs";
import { FindManyEndofshiftArgs } from "./args/FindManyEndofshiftArgs";
import { FindUniqueEndofshiftArgs } from "./args/FindUniqueEndofshiftArgs";
import { GroupByEndofshiftArgs } from "./args/GroupByEndofshiftArgs";
import { UpdateManyEndofshiftArgs } from "./args/UpdateManyEndofshiftArgs";
import { UpdateOneEndofshiftArgs } from "./args/UpdateOneEndofshiftArgs";
import { UpsertOneEndofshiftArgs } from "./args/UpsertOneEndofshiftArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Endofshift } from "../../../models/Endofshift";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEndofshift } from "../../outputs/AggregateEndofshift";
import { EndofshiftGroupBy } from "../../outputs/EndofshiftGroupBy";

@TypeGraphQL.Resolver(_of => Endofshift)
export class EndofshiftCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEndofshift, {
    nullable: false
  })
  async aggregateEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEndofshiftArgs): Promise<AggregateEndofshift> {
    return getPrismaFromContext(ctx).endofshift.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyEndofshiftArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Endofshift, {
    nullable: false
  })
  async createOneEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEndofshiftArgs): Promise<Endofshift> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyEndofshiftArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Endofshift, {
    nullable: true
  })
  async deleteOneEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEndofshiftArgs): Promise<Endofshift | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Endofshift, {
    nullable: true
  })
  async findFirstEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEndofshiftArgs): Promise<Endofshift | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Endofshift], {
    nullable: false
  })
  async endofshifts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEndofshiftArgs): Promise<Endofshift[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Endofshift, {
    nullable: true
  })
  async endofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEndofshiftArgs): Promise<Endofshift | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EndofshiftGroupBy], {
    nullable: false
  })
  async groupByEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEndofshiftArgs): Promise<EndofshiftGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyEndofshiftArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Endofshift, {
    nullable: true
  })
  async updateOneEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEndofshiftArgs): Promise<Endofshift | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Endofshift, {
    nullable: false
  })
  async upsertOneEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEndofshiftArgs): Promise<Endofshift> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
