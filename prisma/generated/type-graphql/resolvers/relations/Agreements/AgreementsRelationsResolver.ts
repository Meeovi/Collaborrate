import * as TypeGraphQL from "type-graphql";
import { Agreements } from "../../../models/Agreements";
import { Mediamanager } from "../../../models/Mediamanager";
import { AgreementsMediamanagerArgs } from "./args/AgreementsMediamanagerArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Agreements)
export class AgreementsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Mediamanager], {
    nullable: false
  })
  async mediamanager(@TypeGraphQL.Root() agreements: Agreements, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AgreementsMediamanagerArgs): Promise<Mediamanager[]> {
    return getPrismaFromContext(ctx).agreements.findUnique({
      where: {
        id: agreements.id,
      },
    }).mediamanager(args);
  }
}
