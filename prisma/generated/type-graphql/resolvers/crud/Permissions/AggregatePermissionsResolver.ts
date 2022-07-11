import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePermissionsArgs } from "./args/AggregatePermissionsArgs";
import { Permissions } from "../../../models/Permissions";
import { AggregatePermissions } from "../../outputs/AggregatePermissions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Permissions)
export class AggregatePermissionsResolver {
  @TypeGraphQL.Query(_returns => AggregatePermissions, {
    nullable: false
  })
  async aggregatePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePermissionsArgs): Promise<AggregatePermissions> {
    return getPrismaFromContext(ctx).permissions.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
