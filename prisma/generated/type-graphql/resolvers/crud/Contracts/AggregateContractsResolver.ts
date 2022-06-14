import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateContractsArgs } from "./args/AggregateContractsArgs";
import { Contracts } from "../../../models/Contracts";
import { AggregateContracts } from "../../outputs/AggregateContracts";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Contracts)
export class AggregateContractsResolver {
  @TypeGraphQL.Query(_returns => AggregateContracts, {
    nullable: false
  })
  async aggregateContracts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContractsArgs): Promise<AggregateContracts> {
    return getPrismaFromContext(ctx).contracts.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
