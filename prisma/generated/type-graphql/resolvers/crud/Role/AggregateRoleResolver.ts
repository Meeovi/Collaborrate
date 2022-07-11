import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRoleArgs } from "./args/AggregateRoleArgs";
import { Role } from "../../../models/Role";
import { AggregateRole } from "../../outputs/AggregateRole";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class AggregateRoleResolver {
  @TypeGraphQL.Query(_returns => AggregateRole, {
    nullable: false
  })
  async aggregateRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRoleArgs): Promise<AggregateRole> {
    return getPrismaFromContext(ctx).role.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
