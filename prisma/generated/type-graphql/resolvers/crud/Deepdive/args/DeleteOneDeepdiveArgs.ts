import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeepdiveWhereUniqueInput } from "../../../inputs/DeepdiveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDeepdiveArgs {
  @TypeGraphQL.Field(_type => DeepdiveWhereUniqueInput, {
    nullable: false
  })
  where!: DeepdiveWhereUniqueInput;
}
