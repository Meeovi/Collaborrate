import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomizationsCreateInput } from "../../../inputs/CustomizationsCreateInput";
import { CustomizationsUpdateInput } from "../../../inputs/CustomizationsUpdateInput";
import { CustomizationsWhereUniqueInput } from "../../../inputs/CustomizationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCustomizationsArgs {
  @TypeGraphQL.Field(_type => CustomizationsWhereUniqueInput, {
    nullable: false
  })
  where!: CustomizationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomizationsCreateInput, {
    nullable: false
  })
  create!: CustomizationsCreateInput;

  @TypeGraphQL.Field(_type => CustomizationsUpdateInput, {
    nullable: false
  })
  update!: CustomizationsUpdateInput;
}
