import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProduct_attributeArgs } from "./args/AggregateProduct_attributeArgs";
import { CreateManyProduct_attributeArgs } from "./args/CreateManyProduct_attributeArgs";
import { CreateProduct_attributeArgs } from "./args/CreateProduct_attributeArgs";
import { DeleteManyProduct_attributeArgs } from "./args/DeleteManyProduct_attributeArgs";
import { DeleteProduct_attributeArgs } from "./args/DeleteProduct_attributeArgs";
import { FindFirstProduct_attributeArgs } from "./args/FindFirstProduct_attributeArgs";
import { FindManyProduct_attributeArgs } from "./args/FindManyProduct_attributeArgs";
import { FindUniqueProduct_attributeArgs } from "./args/FindUniqueProduct_attributeArgs";
import { GroupByProduct_attributeArgs } from "./args/GroupByProduct_attributeArgs";
import { UpdateManyProduct_attributeArgs } from "./args/UpdateManyProduct_attributeArgs";
import { UpdateProduct_attributeArgs } from "./args/UpdateProduct_attributeArgs";
import { UpsertProduct_attributeArgs } from "./args/UpsertProduct_attributeArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Product_attribute } from "../../../models/Product_attribute";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProduct_attribute } from "../../outputs/AggregateProduct_attribute";
import { Product_attributeGroupBy } from "../../outputs/Product_attributeGroupBy";

@TypeGraphQL.Resolver(_of => Product_attribute)
export class Product_attributeCrudResolver {
  @TypeGraphQL.Query(_returns => Product_attribute, {
    nullable: true
  })
  async product_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProduct_attributeArgs): Promise<Product_attribute | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Product_attribute, {
    nullable: true
  })
  async findFirstProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProduct_attributeArgs): Promise<Product_attribute | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Product_attribute], {
    nullable: false
  })
  async product_attributes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProduct_attributeArgs): Promise<Product_attribute[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Product_attribute, {
    nullable: false
  })
  async createProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateProduct_attributeArgs): Promise<Product_attribute> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyProduct_attributeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Product_attribute, {
    nullable: true
  })
  async deleteProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteProduct_attributeArgs): Promise<Product_attribute | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Product_attribute, {
    nullable: true
  })
  async updateProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateProduct_attributeArgs): Promise<Product_attribute | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyProduct_attributeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyProduct_attributeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Product_attribute, {
    nullable: false
  })
  async upsertProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertProduct_attributeArgs): Promise<Product_attribute> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateProduct_attribute, {
    nullable: false
  })
  async aggregateProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProduct_attributeArgs): Promise<AggregateProduct_attribute> {
    return getPrismaFromContext(ctx).product_attribute.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [Product_attributeGroupBy], {
    nullable: false
  })
  async groupByProduct_attribute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProduct_attributeArgs): Promise<Product_attributeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
