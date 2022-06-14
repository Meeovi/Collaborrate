import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CitiesWhereInput } from "../../../inputs/CitiesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCitiesArgs {
  @TypeGraphQL.Field(_type => CitiesWhereInput, {
    nullable: true
  })
  where?: CitiesWhereInput | undefined;
}
