import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlossaryCreateInput } from "../../../inputs/GlossaryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGlossaryArgs {
  @TypeGraphQL.Field(_type => GlossaryCreateInput, {
    nullable: false
  })
  data!: GlossaryCreateInput;
}
