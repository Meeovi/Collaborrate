import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlossaryWhereUniqueInput } from "../../../inputs/GlossaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteGlossaryArgs {
  @TypeGraphQL.Field(_type => GlossaryWhereUniqueInput, {
    nullable: false
  })
  where!: GlossaryWhereUniqueInput;
}
