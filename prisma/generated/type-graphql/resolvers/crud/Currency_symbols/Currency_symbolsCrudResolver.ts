import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCurrency_symbolsArgs } from "./args/AggregateCurrency_symbolsArgs";
import { CreateCurrency_symbolsArgs } from "./args/CreateCurrency_symbolsArgs";
import { CreateManyCurrency_symbolsArgs } from "./args/CreateManyCurrency_symbolsArgs";
import { DeleteCurrency_symbolsArgs } from "./args/DeleteCurrency_symbolsArgs";
import { DeleteManyCurrency_symbolsArgs } from "./args/DeleteManyCurrency_symbolsArgs";
import { FindFirstCurrency_symbolsArgs } from "./args/FindFirstCurrency_symbolsArgs";
import { FindManyCurrency_symbolsArgs } from "./args/FindManyCurrency_symbolsArgs";
import { FindUniqueCurrency_symbolsArgs } from "./args/FindUniqueCurrency_symbolsArgs";
import { GroupByCurrency_symbolsArgs } from "./args/GroupByCurrency_symbolsArgs";
import { UpdateCurrency_symbolsArgs } from "./args/UpdateCurrency_symbolsArgs";
import { UpdateManyCurrency_symbolsArgs } from "./args/UpdateManyCurrency_symbolsArgs";
import { UpsertCurrency_symbolsArgs } from "./args/UpsertCurrency_symbolsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Currency_symbols } from "../../../models/Currency_symbols";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCurrency_symbols } from "../../outputs/AggregateCurrency_symbols";
import { Currency_symbolsGroupBy } from "../../outputs/Currency_symbolsGroupBy";

@TypeGraphQL.Resolver(_of => Currency_symbols)
export class Currency_symbolsCrudResolver {
  @TypeGraphQL.Query(_returns => Currency_symbols, {
    nullable: true
  })
  async findUniqueCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCurrency_symbolsArgs): Promise<Currency_symbols | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Currency_symbols, {
    nullable: true
  })
  async findFirstCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCurrency_symbolsArgs): Promise<Currency_symbols | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Currency_symbols], {
    nullable: false
  })
  async findManyCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCurrency_symbolsArgs): Promise<Currency_symbols[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Currency_symbols, {
    nullable: false
  })
  async createCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCurrency_symbolsArgs): Promise<Currency_symbols> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCurrency_symbolsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Currency_symbols, {
    nullable: true
  })
  async deleteCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteCurrency_symbolsArgs): Promise<Currency_symbols | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Currency_symbols, {
    nullable: true
  })
  async updateCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateCurrency_symbolsArgs): Promise<Currency_symbols | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCurrency_symbolsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCurrency_symbolsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Currency_symbols, {
    nullable: false
  })
  async upsertCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertCurrency_symbolsArgs): Promise<Currency_symbols> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateCurrency_symbols, {
    nullable: false
  })
  async aggregateCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCurrency_symbolsArgs): Promise<AggregateCurrency_symbols> {
    return getPrismaFromContext(ctx).currency_symbols.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [Currency_symbolsGroupBy], {
    nullable: false
  })
  async groupByCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCurrency_symbolsArgs): Promise<Currency_symbolsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
