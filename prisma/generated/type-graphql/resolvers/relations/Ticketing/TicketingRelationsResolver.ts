import * as TypeGraphQL from "type-graphql";
import { Projects } from "../../../models/Projects";
import { Ticketing } from "../../../models/Ticketing";
import { TicketingProjects_projectsToticketingArgs } from "./args/TicketingProjects_projectsToticketingArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ticketing)
export class TicketingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Projects], {
    nullable: false
  })
  async projects_projectsToticketing(@TypeGraphQL.Root() ticketing: Ticketing, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TicketingProjects_projectsToticketingArgs): Promise<Projects[]> {
    return getPrismaFromContext(ctx).ticketing.findUnique({
      where: {
        id: ticketing.id,
      },
    }).projects_projectsToticketing(args);
  }
}
