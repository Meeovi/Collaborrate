import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomizationsWhereUniqueInput } from "../../../inputs/CustomizationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustomizationsArgs {
  @TypeGraphQL.Field(_type => CustomizationsWhereUniqueInput, {
    nullable: false
  })
  where!: CustomizationsWhereUniqueInput;
}
