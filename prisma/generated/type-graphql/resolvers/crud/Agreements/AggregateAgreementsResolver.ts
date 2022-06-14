import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAgreementsArgs } from "./args/AggregateAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
import { AggregateAgreements } from "../../outputs/AggregateAgreements";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Agreements)
export class AggregateAgreementsResolver {
  @TypeGraphQL.Query(_returns => AggregateAgreements, {
    nullable: false
  })
  async aggregateAgreements(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAgreementsArgs): Promise<AggregateAgreements> {
    return getPrismaFromContext(ctx).agreements.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
