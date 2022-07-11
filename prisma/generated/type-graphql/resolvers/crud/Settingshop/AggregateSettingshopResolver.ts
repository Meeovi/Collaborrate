import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSettingshopArgs } from "./args/AggregateSettingshopArgs";
import { Settingshop } from "../../../models/Settingshop";
import { AggregateSettingshop } from "../../outputs/AggregateSettingshop";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingshop)
export class AggregateSettingshopResolver {
  @TypeGraphQL.Query(_returns => AggregateSettingshop, {
    nullable: false
  })
  async aggregateSettingshop(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSettingshopArgs): Promise<AggregateSettingshop> {
    return getPrismaFromContext(ctx).settingshop.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
