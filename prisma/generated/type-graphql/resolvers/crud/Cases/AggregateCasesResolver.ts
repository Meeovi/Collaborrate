import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCasesArgs } from "./args/AggregateCasesArgs";
import { Cases } from "../../../models/Cases";
import { AggregateCases } from "../../outputs/AggregateCases";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cases)
export class AggregateCasesResolver {
  @TypeGraphQL.Query(_returns => AggregateCases, {
    nullable: false
  })
  async aggregateCases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCasesArgs): Promise<AggregateCases> {
    return getPrismaFromContext(ctx).cases.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
