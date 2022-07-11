import * as TypeGraphQL from "type-graphql";
import { Themes } from "../../../models/Themes";
import { Websites } from "../../../models/Websites";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Themes)
export class ThemesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Websites, {
    nullable: false
  })
  async websites(@TypeGraphQL.Root() themes: Themes, @TypeGraphQL.Ctx() ctx: any): Promise<Websites> {
    return getPrismaFromContext(ctx).themes.findUnique({
      where: {
        id: themes.id,
      },
    }).websites({});
  }
}
