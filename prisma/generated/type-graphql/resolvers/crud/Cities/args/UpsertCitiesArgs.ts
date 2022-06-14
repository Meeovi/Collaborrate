import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CitiesCreateInput } from "../../../inputs/CitiesCreateInput";
import { CitiesUpdateInput } from "../../../inputs/CitiesUpdateInput";
import { CitiesWhereUniqueInput } from "../../../inputs/CitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCitiesArgs {
  @TypeGraphQL.Field(_type => CitiesWhereUniqueInput, {
    nullable: false
  })
  where!: CitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CitiesCreateInput, {
    nullable: false
  })
  create!: CitiesCreateInput;

  @TypeGraphQL.Field(_type => CitiesUpdateInput, {
    nullable: false
  })
  update!: CitiesUpdateInput;
}
