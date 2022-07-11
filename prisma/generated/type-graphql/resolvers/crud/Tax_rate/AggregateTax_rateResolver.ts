import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTax_rateArgs } from "./args/AggregateTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
import { AggregateTax_rate } from "../../outputs/AggregateTax_rate";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_rate)
export class AggregateTax_rateResolver {
  @TypeGraphQL.Query(_returns => AggregateTax_rate, {
    nullable: false
  })
  async aggregateTax_rate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTax_rateArgs): Promise<AggregateTax_rate> {
    return getPrismaFromContext(ctx).tax_rate.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
