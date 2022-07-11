import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneSettingscustomersArgs } from "./args/CreateOneSettingscustomersArgs";
import { Settingscustomers } from "../../../models/Settingscustomers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingscustomers)
export class CreateOneSettingscustomersResolver {
  @TypeGraphQL.Mutation(_returns => Settingscustomers, {
    nullable: false
  })
  async createOneSettingscustomers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSettingscustomersArgs): Promise<Settingscustomers> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingscustomers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
