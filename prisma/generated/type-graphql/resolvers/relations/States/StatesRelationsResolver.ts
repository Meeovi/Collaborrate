import * as TypeGraphQL from "type-graphql";
import { States } from "../../../models/States";
import { Trainings } from "../../../models/Trainings";
import { StatesTrainingsArgs } from "./args/StatesTrainingsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => States)
export class StatesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Trainings], {
    nullable: false
  })
  async trainings(@TypeGraphQL.Root() states: States, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StatesTrainingsArgs): Promise<Trainings[]> {
    return getPrismaFromContext(ctx).states.findUnique({
      where: {
        id: states.id,
      },
    }).trainings(args);
  }
}
