import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSettingssalesArgs } from "./args/AggregateSettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
import { AggregateSettingssales } from "../../outputs/AggregateSettingssales";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingssales)
export class AggregateSettingssalesResolver {
  @TypeGraphQL.Query(_returns => AggregateSettingssales, {
    nullable: false
  })
  async aggregateSettingssales(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSettingssalesArgs): Promise<AggregateSettingssales> {
    return getPrismaFromContext(ctx).settingssales.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
