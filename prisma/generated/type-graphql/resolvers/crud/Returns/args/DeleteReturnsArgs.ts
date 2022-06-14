import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReturnsWhereUniqueInput } from "../../../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteReturnsArgs {
  @TypeGraphQL.Field(_type => ReturnsWhereUniqueInput, {
    nullable: false
  })
  where!: ReturnsWhereUniqueInput;
}
