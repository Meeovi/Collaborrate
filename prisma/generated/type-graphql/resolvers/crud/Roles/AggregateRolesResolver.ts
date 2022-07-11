import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRolesArgs } from "./args/AggregateRolesArgs";
import { Roles } from "../../../models/Roles";
import { AggregateRoles } from "../../outputs/AggregateRoles";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Roles)
export class AggregateRolesResolver {
  @TypeGraphQL.Query(_returns => AggregateRoles, {
    nullable: false
  })
  async aggregateRoles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRolesArgs): Promise<AggregateRoles> {
    return getPrismaFromContext(ctx).roles.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
