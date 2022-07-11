import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomizationsCreateManyInput } from "../../../inputs/CustomizationsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomizationsArgs {
  @TypeGraphQL.Field(_type => [CustomizationsCreateManyInput], {
    nullable: false
  })
  data!: CustomizationsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
