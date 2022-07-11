import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomizationsCreateInput } from "../../../inputs/CustomizationsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustomizationsArgs {
  @TypeGraphQL.Field(_type => CustomizationsCreateInput, {
    nullable: false
  })
  data!: CustomizationsCreateInput;
}