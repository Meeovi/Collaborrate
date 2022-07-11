import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSettingshopArgs } from "./args/UpsertOneSettingshopArgs";
import { Settingshop } from "../../../models/Settingshop";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingshop)
export class UpsertOneSettingshopResolver {
  @TypeGraphQL.Mutation(_returns => Settingshop, {
    nullable: false
  })
  async upsertOneSettingshop(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSettingshopArgs): Promise<Settingshop> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingshop.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
