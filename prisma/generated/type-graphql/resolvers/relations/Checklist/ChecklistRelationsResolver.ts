import * as TypeGraphQL from "type-graphql";
import { Checklist } from "../../../models/Checklist";
import { Trainings } from "../../../models/Trainings";
import { ChecklistTrainingsArgs } from "./args/ChecklistTrainingsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Checklist)
export class ChecklistRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Trainings], {
    nullable: false
  })
  async trainings(@TypeGraphQL.Root() checklist: Checklist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ChecklistTrainingsArgs): Promise<Trainings[]> {
    return getPrismaFromContext(ctx).checklist.findUnique({
      where: {
        id: checklist.id,
      },
    }).trainings(args);
  }
}
