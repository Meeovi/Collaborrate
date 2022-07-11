import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneSettingssalesArgs } from "./args/CreateOneSettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingssales)
export class CreateOneSettingssalesResolver {
  @TypeGraphQL.Mutation(_returns => Settingssales, {
    nullable: false
  })
  async createOneSettingssales(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSettingssalesArgs): Promise<Settingssales> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingssales.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
