import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCart_price_rulesArgs } from "./args/AggregateCart_price_rulesArgs";
import { CreateManyCart_price_rulesArgs } from "./args/CreateManyCart_price_rulesArgs";
import { CreateOneCart_price_rulesArgs } from "./args/CreateOneCart_price_rulesArgs";
import { DeleteManyCart_price_rulesArgs } from "./args/DeleteManyCart_price_rulesArgs";
import { DeleteOneCart_price_rulesArgs } from "./args/DeleteOneCart_price_rulesArgs";
import { FindFirstCart_price_rulesArgs } from "./args/FindFirstCart_price_rulesArgs";
import { FindManyCart_price_rulesArgs } from "./args/FindManyCart_price_rulesArgs";
import { FindUniqueCart_price_rulesArgs } from "./args/FindUniqueCart_price_rulesArgs";
import { GroupByCart_price_rulesArgs } from "./args/GroupByCart_price_rulesArgs";
import { UpdateManyCart_price_rulesArgs } from "./args/UpdateManyCart_price_rulesArgs";
import { UpdateOneCart_price_rulesArgs } from "./args/UpdateOneCart_price_rulesArgs";
import { UpsertOneCart_price_rulesArgs } from "./args/UpsertOneCart_price_rulesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCart_price_rules } from "../../outputs/AggregateCart_price_rules";
import { Cart_price_rulesGroupBy } from "../../outputs/Cart_price_rulesGroupBy";

@TypeGraphQL.Resolver(_of => Cart_price_rules)
export class Cart_price_rulesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCart_price_rules, {
    nullable: false
  })
  async aggregateCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCart_price_rulesArgs): Promise<AggregateCart_price_rules> {
    return getPrismaFromContext(ctx).cart_price_rules.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCart_price_rulesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Cart_price_rules, {
    nullable: false
  })
  async createOneCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCart_price_rulesArgs): Promise<Cart_price_rules> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCart_price_rulesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Cart_price_rules, {
    nullable: true
  })
  async deleteOneCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCart_price_rulesArgs): Promise<Cart_price_rules | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Cart_price_rules, {
    nullable: true
  })
  async findFirstCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCart_price_rulesArgs): Promise<Cart_price_rules | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Cart_price_rules], {
    nullable: false
  })
  async findManyCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCart_price_rulesArgs): Promise<Cart_price_rules[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Cart_price_rules, {
    nullable: true
  })
  async findUniqueCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCart_price_rulesArgs): Promise<Cart_price_rules | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Cart_price_rulesGroupBy], {
    nullable: false
  })
  async groupByCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCart_price_rulesArgs): Promise<Cart_price_rulesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCart_price_rulesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Cart_price_rules, {
    nullable: true
  })
  async updateOneCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCart_price_rulesArgs): Promise<Cart_price_rules | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Cart_price_rules, {
    nullable: false
  })
  async upsertOneCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCart_price_rulesArgs): Promise<Cart_price_rules> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
