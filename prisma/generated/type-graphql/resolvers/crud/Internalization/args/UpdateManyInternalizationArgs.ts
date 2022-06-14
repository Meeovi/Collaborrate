import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InternalizationUpdateManyMutationInput } from "../../../inputs/InternalizationUpdateManyMutationInput";
import { InternalizationWhereInput } from "../../../inputs/InternalizationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyInternalizationArgs {
  @TypeGraphQL.Field(_type => InternalizationUpdateManyMutationInput, {
    nullable: false
  })
  data!: InternalizationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => InternalizationWhereInput, {
    nullable: true
  })
  where?: InternalizationWhereInput | undefined;
}
