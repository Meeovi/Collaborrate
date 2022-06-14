import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CitiesWhereUniqueInput } from "../../../inputs/CitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCitiesArgs {
  @TypeGraphQL.Field(_type => CitiesWhereUniqueInput, {
    nullable: false
  })
  where!: CitiesWhereUniqueInput;
}
