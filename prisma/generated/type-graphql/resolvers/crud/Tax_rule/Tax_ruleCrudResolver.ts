import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTax_ruleArgs } from "./args/AggregateTax_ruleArgs";
import { CreateManyTax_ruleArgs } from "./args/CreateManyTax_ruleArgs";
import { CreateOneTax_ruleArgs } from "./args/CreateOneTax_ruleArgs";
import { DeleteManyTax_ruleArgs } from "./args/DeleteManyTax_ruleArgs";
import { DeleteOneTax_ruleArgs } from "./args/DeleteOneTax_ruleArgs";
import { FindFirstTax_ruleArgs } from "./args/FindFirstTax_ruleArgs";
import { FindManyTax_ruleArgs } from "./args/FindManyTax_ruleArgs";
import { FindUniqueTax_ruleArgs } from "./args/FindUniqueTax_ruleArgs";
import { GroupByTax_ruleArgs } from "./args/GroupByTax_ruleArgs";
import { UpdateManyTax_ruleArgs } from "./args/UpdateManyTax_ruleArgs";
import { UpdateOneTax_ruleArgs } from "./args/UpdateOneTax_ruleArgs";
import { UpsertOneTax_ruleArgs } from "./args/UpsertOneTax_ruleArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Tax_rule } from "../../../models/Tax_rule";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTax_rule } from "../../outputs/AggregateTax_rule";
import { Tax_ruleGroupBy } from "../../outputs/Tax_ruleGroupBy";

@TypeGraphQL.Resolver(_of => Tax_rule)
export class Tax_ruleCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTax_rule, {
    nullable: false
  })
  async aggregateTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTax_ruleArgs): Promise<AggregateTax_rule> {
    return getPrismaFromContext(ctx).tax_rule.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTax_ruleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Tax_rule, {
    nullable: false
  })
  async createOneTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTax_ruleArgs): Promise<Tax_rule> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTax_ruleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Tax_rule, {
    nullable: true
  })
  async deleteOneTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTax_ruleArgs): Promise<Tax_rule | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Tax_rule, {
    nullable: true
  })
  async findFirstTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTax_ruleArgs): Promise<Tax_rule | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Tax_rule], {
    nullable: false
  })
  async tax_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTax_ruleArgs): Promise<Tax_rule[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Tax_rule, {
    nullable: true
  })
  async tax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTax_ruleArgs): Promise<Tax_rule | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Tax_ruleGroupBy], {
    nullable: false
  })
  async groupByTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTax_ruleArgs): Promise<Tax_ruleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTax_ruleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Tax_rule, {
    nullable: true
  })
  async updateOneTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTax_ruleArgs): Promise<Tax_rule | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Tax_rule, {
    nullable: false
  })
  async upsertOneTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTax_ruleArgs): Promise<Tax_rule> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
