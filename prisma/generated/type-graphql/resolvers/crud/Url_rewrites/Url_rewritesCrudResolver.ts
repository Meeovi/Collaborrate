import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUrl_rewritesArgs } from "./args/AggregateUrl_rewritesArgs";
import { CreateManyUrl_rewritesArgs } from "./args/CreateManyUrl_rewritesArgs";
import { CreateOneUrl_rewritesArgs } from "./args/CreateOneUrl_rewritesArgs";
import { DeleteManyUrl_rewritesArgs } from "./args/DeleteManyUrl_rewritesArgs";
import { DeleteOneUrl_rewritesArgs } from "./args/DeleteOneUrl_rewritesArgs";
import { FindFirstUrl_rewritesArgs } from "./args/FindFirstUrl_rewritesArgs";
import { FindManyUrl_rewritesArgs } from "./args/FindManyUrl_rewritesArgs";
import { FindUniqueUrl_rewritesArgs } from "./args/FindUniqueUrl_rewritesArgs";
import { GroupByUrl_rewritesArgs } from "./args/GroupByUrl_rewritesArgs";
import { UpdateManyUrl_rewritesArgs } from "./args/UpdateManyUrl_rewritesArgs";
import { UpdateOneUrl_rewritesArgs } from "./args/UpdateOneUrl_rewritesArgs";
import { UpsertOneUrl_rewritesArgs } from "./args/UpsertOneUrl_rewritesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Url_rewrites } from "../../../models/Url_rewrites";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUrl_rewrites } from "../../outputs/AggregateUrl_rewrites";
import { Url_rewritesGroupBy } from "../../outputs/Url_rewritesGroupBy";

@TypeGraphQL.Resolver(_of => Url_rewrites)
export class Url_rewritesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUrl_rewrites, {
    nullable: false
  })
  async aggregateUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUrl_rewritesArgs): Promise<AggregateUrl_rewrites> {
    return getPrismaFromContext(ctx).url_rewrites.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUrl_rewritesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Url_rewrites, {
    nullable: false
  })
  async createOneUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUrl_rewritesArgs): Promise<Url_rewrites> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUrl_rewritesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Url_rewrites, {
    nullable: true
  })
  async deleteOneUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUrl_rewritesArgs): Promise<Url_rewrites | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Url_rewrites, {
    nullable: true
  })
  async findFirstUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUrl_rewritesArgs): Promise<Url_rewrites | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Url_rewrites], {
    nullable: false
  })
  async findManyUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUrl_rewritesArgs): Promise<Url_rewrites[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Url_rewrites, {
    nullable: true
  })
  async findUniqueUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUrl_rewritesArgs): Promise<Url_rewrites | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Url_rewritesGroupBy], {
    nullable: false
  })
  async groupByUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUrl_rewritesArgs): Promise<Url_rewritesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUrl_rewritesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Url_rewrites, {
    nullable: true
  })
  async updateOneUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUrl_rewritesArgs): Promise<Url_rewrites | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Url_rewrites, {
    nullable: false
  })
  async upsertOneUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUrl_rewritesArgs): Promise<Url_rewrites> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
