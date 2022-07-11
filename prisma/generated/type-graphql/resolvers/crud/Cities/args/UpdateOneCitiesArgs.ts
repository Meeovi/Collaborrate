import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CitiesUpdateInput } from "../../../inputs/CitiesUpdateInput";
import { CitiesWhereUniqueInput } from "../../../inputs/CitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCitiesArgs {
  @TypeGraphQL.Field(_type => CitiesUpdateInput, {
    nullable: false
  })
  data!: CitiesUpdateInput;

  @TypeGraphQL.Field(_type => CitiesWhereUniqueInput, {
    nullable: false
  })
  where!: CitiesWhereUniqueInput;
}
