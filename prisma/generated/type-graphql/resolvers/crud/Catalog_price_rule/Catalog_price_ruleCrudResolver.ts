import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCatalog_price_ruleArgs } from "./args/AggregateCatalog_price_ruleArgs";
import { CreateCatalog_price_ruleArgs } from "./args/CreateCatalog_price_ruleArgs";
import { CreateManyCatalog_price_ruleArgs } from "./args/CreateManyCatalog_price_ruleArgs";
import { DeleteCatalog_price_ruleArgs } from "./args/DeleteCatalog_price_ruleArgs";
import { DeleteManyCatalog_price_ruleArgs } from "./args/DeleteManyCatalog_price_ruleArgs";
import { FindFirstCatalog_price_ruleArgs } from "./args/FindFirstCatalog_price_ruleArgs";
import { FindManyCatalog_price_ruleArgs } from "./args/FindManyCatalog_price_ruleArgs";
import { FindUniqueCatalog_price_ruleArgs } from "./args/FindUniqueCatalog_price_ruleArgs";
import { GroupByCatalog_price_ruleArgs } from "./args/GroupByCatalog_price_ruleArgs";
import { UpdateCatalog_price_ruleArgs } from "./args/UpdateCatalog_price_ruleArgs";
import { UpdateManyCatalog_price_ruleArgs } from "./args/UpdateManyCatalog_price_ruleArgs";
import { UpsertCatalog_price_ruleArgs } from "./args/UpsertCatalog_price_ruleArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCatalog_price_rule } from "../../outputs/AggregateCatalog_price_rule";
import { Catalog_price_ruleGroupBy } from "../../outputs/Catalog_price_ruleGroupBy";

@TypeGraphQL.Resolver(_of => Catalog_price_rule)
export class Catalog_price_ruleCrudResolver {
  @TypeGraphQL.Query(_returns => Catalog_price_rule, {
    nullable: true
  })
  async catalog_price_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCatalog_price_ruleArgs): Promise<Catalog_price_rule | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catalog_price_rule.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Catalog_price_rule, {
    nullable: true
  })
  async findFirstCatalog_price_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCatalog_price_ruleArgs): Promise<Catalog_price_rule | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catalog_price_rule.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Catalog_price_rule], {
    nullable: false
  })
  async catalog_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCatalog_price_ruleArgs): Promise<Catalog_price_rule[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catalog_price_rule.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Catalog_price_rule, {
    nullable: false
  })
  async createCatalog_price_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCatalog_price_ruleArgs): Promise<Catalog_price_rule> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catalog_price_rule.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCatalog_price_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCatalog_price_ruleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catalog_price_rule.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Catalog_price_rule, {
    nullable: true
  })
  async deleteCatalog_price_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteCatalog_price_ruleArgs): Promise<Catalog_price_rule | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catalog_price_rule.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Catalog_price_rule, {
    nullable: true
  })
  async updateCatalog_price_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateCatalog_price_ruleArgs): Promise<Catalog_price_rule | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catalog_price_rule.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCatalog_price_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCatalog_price_ruleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catalog_price_rule.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCatalog_price_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCatalog_price_ruleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catalog_price_rule.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Catalog_price_rule, {
    nullable: false
  })
  async upsertCatalog_price_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertCatalog_price_ruleArgs): Promise<Catalog_price_rule> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catalog_price_rule.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateCatalog_price_rule, {
    nullable: false
  })
  async aggregateCatalog_price_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCatalog_price_ruleArgs): Promise<AggregateCatalog_price_rule> {
    return getPrismaFromContext(ctx).catalog_price_rule.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [Catalog_price_ruleGroupBy], {
    nullable: false
  })
  async groupByCatalog_price_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCatalog_price_ruleArgs): Promise<Catalog_price_ruleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).catalog_price_rule.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
