import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSettingsmarketingArgs } from "./args/AggregateSettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
import { AggregateSettingsmarketing } from "../../outputs/AggregateSettingsmarketing";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingsmarketing)
export class AggregateSettingsmarketingResolver {
  @TypeGraphQL.Query(_returns => AggregateSettingsmarketing, {
    nullable: false
  })
  async aggregateSettingsmarketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSettingsmarketingArgs): Promise<AggregateSettingsmarketing> {
    return getPrismaFromContext(ctx).settingsmarketing.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
