import * as TypeGraphQL from "type-graphql";
import { Categories } from "../../../models/Categories";
import { Workspaces } from "../../../models/Workspaces";
import { CategoriesWorkspacesArgs } from "./args/CategoriesWorkspacesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Categories)
export class CategoriesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Workspaces], {
    nullable: false
  })
  async workspaces(@TypeGraphQL.Root() categories: Categories, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoriesWorkspacesArgs): Promise<Workspaces[]> {
    return getPrismaFromContext(ctx).categories.findUnique({
      where: {
        id: categories.id,
      },
    }).workspaces(args);
  }
}
