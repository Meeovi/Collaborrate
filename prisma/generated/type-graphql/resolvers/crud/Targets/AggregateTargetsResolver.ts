import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTargetsArgs } from "./args/AggregateTargetsArgs";
import { Targets } from "../../../models/Targets";
import { AggregateTargets } from "../../outputs/AggregateTargets";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Targets)
export class AggregateTargetsResolver {
  @TypeGraphQL.Query(_returns => AggregateTargets, {
    nullable: false
  })
  async aggregateTargets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTargetsArgs): Promise<AggregateTargets> {
    return getPrismaFromContext(ctx).targets.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
