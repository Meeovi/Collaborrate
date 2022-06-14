import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Content_typeWhereUniqueInput } from "../../../inputs/Content_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteContent_typeArgs {
  @TypeGraphQL.Field(_type => Content_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Content_typeWhereUniqueInput;
}
