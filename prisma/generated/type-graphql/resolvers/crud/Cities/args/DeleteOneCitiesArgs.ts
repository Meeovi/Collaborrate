import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CitiesWhereUniqueInput } from "../../../inputs/CitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCitiesArgs {
  @TypeGraphQL.Field(_type => CitiesWhereUniqueInput, {
    nullable: false
  })
  where!: CitiesWhereUniqueInput;
}
