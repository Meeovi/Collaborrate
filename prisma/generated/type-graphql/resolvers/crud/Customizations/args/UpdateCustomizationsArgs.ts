import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomizationsUpdateInput } from "../../../inputs/CustomizationsUpdateInput";
import { CustomizationsWhereUniqueInput } from "../../../inputs/CustomizationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCustomizationsArgs {
  @TypeGraphQL.Field(_type => CustomizationsUpdateInput, {
    nullable: false
  })
  data!: CustomizationsUpdateInput;

  @TypeGraphQL.Field(_type => CustomizationsWhereUniqueInput, {
    nullable: false
  })
  where!: CustomizationsWhereUniqueInput;
}
