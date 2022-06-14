import * as TypeGraphQL from "type-graphql";
import { Shops } from "../../../models/Shops";
import { Workspaces } from "../../../models/Workspaces";
import { ShopsWorkspacesArgs } from "./args/ShopsWorkspacesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shops)
export class ShopsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Workspaces], {
    nullable: false
  })
  async workspaces(@TypeGraphQL.Root() shops: Shops, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShopsWorkspacesArgs): Promise<Workspaces[]> {
    return getPrismaFromContext(ctx).shops.findUnique({
      where: {
        id: shops.id,
      },
    }).workspaces(args);
  }
}
