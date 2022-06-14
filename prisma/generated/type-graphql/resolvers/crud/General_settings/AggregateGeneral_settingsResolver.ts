import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGeneral_settingsArgs } from "./args/AggregateGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
import { AggregateGeneral_settings } from "../../outputs/AggregateGeneral_settings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => General_settings)
export class AggregateGeneral_settingsResolver {
  @TypeGraphQL.Query(_returns => AggregateGeneral_settings, {
    nullable: false
  })
  async aggregateGeneral_settings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGeneral_settingsArgs): Promise<AggregateGeneral_settings> {
    return getPrismaFromContext(ctx).general_settings.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
