import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlossaryUpdateManyMutationInput } from "../../../inputs/GlossaryUpdateManyMutationInput";
import { GlossaryWhereInput } from "../../../inputs/GlossaryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGlossaryArgs {
  @TypeGraphQL.Field(_type => GlossaryUpdateManyMutationInput, {
    nullable: false
  })
  data!: GlossaryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GlossaryWhereInput, {
    nullable: true
  })
  where?: GlossaryWhereInput | undefined;
}
