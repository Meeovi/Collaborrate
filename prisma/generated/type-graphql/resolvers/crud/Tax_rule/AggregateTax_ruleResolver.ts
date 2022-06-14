import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTax_ruleArgs } from "./args/AggregateTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
import { AggregateTax_rule } from "../../outputs/AggregateTax_rule";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_rule)
export class AggregateTax_ruleResolver {
  @TypeGraphQL.Query(_returns => AggregateTax_rule, {
    nullable: false
  })
  async aggregateTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTax_ruleArgs): Promise<AggregateTax_rule> {
    return getPrismaFromContext(ctx).tax_rule.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
