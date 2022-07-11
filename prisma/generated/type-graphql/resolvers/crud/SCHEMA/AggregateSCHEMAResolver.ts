import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSCHEMAArgs } from "./args/AggregateSCHEMAArgs";
import { SCHEMA } from "../../../models/SCHEMA";
import { AggregateSCHEMA } from "../../outputs/AggregateSCHEMA";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SCHEMA)
export class AggregateSCHEMAResolver {
  @TypeGraphQL.Query(_returns => AggregateSCHEMA, {
    nullable: false
  })
  async aggregateSCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSCHEMAArgs): Promise<AggregateSCHEMA> {
    return getPrismaFromContext(ctx).sCHEMA.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
