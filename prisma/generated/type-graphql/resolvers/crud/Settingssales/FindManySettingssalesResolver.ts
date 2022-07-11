import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManySettingssalesArgs } from "./args/FindManySettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingssales)
export class FindManySettingssalesResolver {
  @TypeGraphQL.Query(_returns => [Settingssales], {
    nullable: false
  })
  async findManySettingssales(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySettingssalesArgs): Promise<Settingssales[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingssales.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
