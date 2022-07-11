import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTax_categoryArgs } from "./args/AggregateTax_categoryArgs";
import { Tax_category } from "../../../models/Tax_category";
import { AggregateTax_category } from "../../outputs/AggregateTax_category";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_category)
export class AggregateTax_categoryResolver {
  @TypeGraphQL.Query(_returns => AggregateTax_category, {
    nullable: false
  })
  async aggregateTax_category(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTax_categoryArgs): Promise<AggregateTax_category> {
    return getPrismaFromContext(ctx).tax_category.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
