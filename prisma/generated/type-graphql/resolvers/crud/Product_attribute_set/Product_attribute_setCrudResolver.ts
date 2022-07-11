import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProduct_attribute_setArgs } from "./args/AggregateProduct_attribute_setArgs";
import { CreateManyProduct_attribute_setArgs } from "./args/CreateManyProduct_attribute_setArgs";
import { CreateOneProduct_attribute_setArgs } from "./args/CreateOneProduct_attribute_setArgs";
import { DeleteManyProduct_attribute_setArgs } from "./args/DeleteManyProduct_attribute_setArgs";
import { DeleteOneProduct_attribute_setArgs } from "./args/DeleteOneProduct_attribute_setArgs";
import { FindFirstProduct_attribute_setArgs } from "./args/FindFirstProduct_attribute_setArgs";
import { FindManyProduct_attribute_setArgs } from "./args/FindManyProduct_attribute_setArgs";
import { FindUniqueProduct_attribute_setArgs } from "./args/FindUniqueProduct_attribute_setArgs";
import { GroupByProduct_attribute_setArgs } from "./args/GroupByProduct_attribute_setArgs";
import { UpdateManyProduct_attribute_setArgs } from "./args/UpdateManyProduct_attribute_setArgs";
import { UpdateOneProduct_attribute_setArgs } from "./args/UpdateOneProduct_attribute_setArgs";
import { UpsertOneProduct_attribute_setArgs } from "./args/UpsertOneProduct_attribute_setArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProduct_attribute_set } from "../../outputs/AggregateProduct_attribute_set";
import { Product_attribute_setGroupBy } from "../../outputs/Product_attribute_setGroupBy";

@TypeGraphQL.Resolver(_of => Product_attribute_set)
export class Product_attribute_setCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateProduct_attribute_set, {
    nullable: false
  })
  async aggregateProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProduct_attribute_setArgs): Promise<AggregateProduct_attribute_set> {
    return getPrismaFromContext(ctx).product_attribute_set.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyProduct_attribute_setArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Product_attribute_set, {
    nullable: false
  })
  async createOneProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneProduct_attribute_setArgs): Promise<Product_attribute_set> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyProduct_attribute_setArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Product_attribute_set, {
    nullable: true
  })
  async deleteOneProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneProduct_attribute_setArgs): Promise<Product_attribute_set | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Product_attribute_set, {
    nullable: true
  })
  async findFirstProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProduct_attribute_setArgs): Promise<Product_attribute_set | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Product_attribute_set], {
    nullable: false
  })
  async product_attribute_sets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProduct_attribute_setArgs): Promise<Product_attribute_set[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Product_attribute_set, {
    nullable: true
  })
  async product_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProduct_attribute_setArgs): Promise<Product_attribute_set | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Product_attribute_setGroupBy], {
    nullable: false
  })
  async groupByProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProduct_attribute_setArgs): Promise<Product_attribute_setGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyProduct_attribute_setArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Product_attribute_set, {
    nullable: true
  })
  async updateOneProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneProduct_attribute_setArgs): Promise<Product_attribute_set | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Product_attribute_set, {
    nullable: false
  })
  async upsertOneProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneProduct_attribute_setArgs): Promise<Product_attribute_set> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
