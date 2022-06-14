import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateKnowledgebaseArgs } from "./args/AggregateKnowledgebaseArgs";
import { CreateKnowledgebaseArgs } from "./args/CreateKnowledgebaseArgs";
import { CreateManyKnowledgebaseArgs } from "./args/CreateManyKnowledgebaseArgs";
import { DeleteKnowledgebaseArgs } from "./args/DeleteKnowledgebaseArgs";
import { DeleteManyKnowledgebaseArgs } from "./args/DeleteManyKnowledgebaseArgs";
import { FindFirstKnowledgebaseArgs } from "./args/FindFirstKnowledgebaseArgs";
import { FindManyKnowledgebaseArgs } from "./args/FindManyKnowledgebaseArgs";
import { FindUniqueKnowledgebaseArgs } from "./args/FindUniqueKnowledgebaseArgs";
import { GroupByKnowledgebaseArgs } from "./args/GroupByKnowledgebaseArgs";
import { UpdateKnowledgebaseArgs } from "./args/UpdateKnowledgebaseArgs";
import { UpdateManyKnowledgebaseArgs } from "./args/UpdateManyKnowledgebaseArgs";
import { UpsertKnowledgebaseArgs } from "./args/UpsertKnowledgebaseArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Knowledgebase } from "../../../models/Knowledgebase";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateKnowledgebase } from "../../outputs/AggregateKnowledgebase";
import { KnowledgebaseGroupBy } from "../../outputs/KnowledgebaseGroupBy";

@TypeGraphQL.Resolver(_of => Knowledgebase)
export class KnowledgebaseCrudResolver {
  @TypeGraphQL.Query(_returns => Knowledgebase, {
    nullable: true
  })
  async knowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueKnowledgebaseArgs): Promise<Knowledgebase | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Knowledgebase, {
    nullable: true
  })
  async findFirstKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstKnowledgebaseArgs): Promise<Knowledgebase | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Knowledgebase], {
    nullable: false
  })
  async knowledgebases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyKnowledgebaseArgs): Promise<Knowledgebase[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Knowledgebase, {
    nullable: false
  })
  async createKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateKnowledgebaseArgs): Promise<Knowledgebase> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyKnowledgebaseArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Knowledgebase, {
    nullable: true
  })
  async deleteKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteKnowledgebaseArgs): Promise<Knowledgebase | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Knowledgebase, {
    nullable: true
  })
  async updateKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateKnowledgebaseArgs): Promise<Knowledgebase | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyKnowledgebaseArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyKnowledgebaseArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Knowledgebase, {
    nullable: false
  })
  async upsertKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertKnowledgebaseArgs): Promise<Knowledgebase> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateKnowledgebase, {
    nullable: false
  })
  async aggregateKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateKnowledgebaseArgs): Promise<AggregateKnowledgebase> {
    return getPrismaFromContext(ctx).knowledgebase.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [KnowledgebaseGroupBy], {
    nullable: false
  })
  async groupByKnowledgebase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByKnowledgebaseArgs): Promise<KnowledgebaseGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).knowledgebase.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
