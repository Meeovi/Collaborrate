import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlossaryCreateInput } from "../../../inputs/GlossaryCreateInput";
import { GlossaryUpdateInput } from "../../../inputs/GlossaryUpdateInput";
import { GlossaryWhereUniqueInput } from "../../../inputs/GlossaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGlossaryArgs {
  @TypeGraphQL.Field(_type => GlossaryWhereUniqueInput, {
    nullable: false
  })
  where!: GlossaryWhereUniqueInput;

  @TypeGraphQL.Field(_type => GlossaryCreateInput, {
    nullable: false
  })
  create!: GlossaryCreateInput;

  @TypeGraphQL.Field(_type => GlossaryUpdateInput, {
    nullable: false
  })
  update!: GlossaryUpdateInput;
}
