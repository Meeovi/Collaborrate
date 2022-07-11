import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlossaryUpdateInput } from "../../../inputs/GlossaryUpdateInput";
import { GlossaryWhereUniqueInput } from "../../../inputs/GlossaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGlossaryArgs {
  @TypeGraphQL.Field(_type => GlossaryUpdateInput, {
    nullable: false
  })
  data!: GlossaryUpdateInput;

  @TypeGraphQL.Field(_type => GlossaryWhereUniqueInput, {
    nullable: false
  })
  where!: GlossaryWhereUniqueInput;
}
