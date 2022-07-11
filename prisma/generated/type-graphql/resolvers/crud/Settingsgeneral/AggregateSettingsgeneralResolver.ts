import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSettingsgeneralArgs } from "./args/AggregateSettingsgeneralArgs";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
import { AggregateSettingsgeneral } from "../../outputs/AggregateSettingsgeneral";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingsgeneral)
export class AggregateSettingsgeneralResolver {
  @TypeGraphQL.Query(_returns => AggregateSettingsgeneral, {
    nullable: false
  })
  async aggregateSettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSettingsgeneralArgs): Promise<AggregateSettingsgeneral> {
    return getPrismaFromContext(ctx).settingsgeneral.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
