import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSettingscustomersArgs } from "./args/AggregateSettingscustomersArgs";
import { Settingscustomers } from "../../../models/Settingscustomers";
import { AggregateSettingscustomers } from "../../outputs/AggregateSettingscustomers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingscustomers)
export class AggregateSettingscustomersResolver {
  @TypeGraphQL.Query(_returns => AggregateSettingscustomers, {
    nullable: false
  })
  async aggregateSettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSettingscustomersArgs): Promise<AggregateSettingscustomers> {
    return getPrismaFromContext(ctx).settingscustomers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
