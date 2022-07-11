import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSettingscustomersArgs } from "./args/UpsertOneSettingscustomersArgs";
import { Settingscustomers } from "../../../models/Settingscustomers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingscustomers)
export class UpsertOneSettingscustomersResolver {
  @TypeGraphQL.Mutation(_returns => Settingscustomers, {
    nullable: false
  })
  async upsertOneSettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSettingscustomersArgs): Promise<Settingscustomers> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
