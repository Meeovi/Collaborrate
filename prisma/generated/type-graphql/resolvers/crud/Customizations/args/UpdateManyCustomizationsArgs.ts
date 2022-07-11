import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomizationsUpdateManyMutationInput } from "../../../inputs/CustomizationsUpdateManyMutationInput";
import { CustomizationsWhereInput } from "../../../inputs/CustomizationsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustomizationsArgs {
  @TypeGraphQL.Field(_type => CustomizationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CustomizationsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CustomizationsWhereInput, {
    nullable: true
  })
  where?: CustomizationsWhereInput | undefined;
}
