import * as TypeGraphQL from "type-graphql";
import { Countries } from "../../../models/Countries";
import { Trainings } from "../../../models/Trainings";
import { CountriesTrainingsArgs } from "./args/CountriesTrainingsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Countries)
export class CountriesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Trainings], {
    nullable: false
  })
  async trainings(@TypeGraphQL.Root() countries: Countries, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CountriesTrainingsArgs): Promise<Trainings[]> {
    return getPrismaFromContext(ctx).countries.findUnique({
      where: {
        id: countries.id,
      },
    }).trainings(args);
  }
}
