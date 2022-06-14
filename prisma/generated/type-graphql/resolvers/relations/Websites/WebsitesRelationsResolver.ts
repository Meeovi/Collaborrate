import * as TypeGraphQL from "type-graphql";
import { Themes } from "../../../models/Themes";
import { Websites } from "../../../models/Websites";
import { WebsitesThemesArgs } from "./args/WebsitesThemesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Websites)
export class WebsitesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Themes], {
    nullable: false
  })
  async themes(@TypeGraphQL.Root() websites: Websites, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WebsitesThemesArgs): Promise<Themes[]> {
    return getPrismaFromContext(ctx).websites.findUnique({
      where: {
        id: websites.id,
      },
    }).themes(args);
  }
}
