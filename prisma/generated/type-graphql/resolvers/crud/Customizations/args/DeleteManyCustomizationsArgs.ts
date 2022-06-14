import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomizationsWhereInput } from "../../../inputs/CustomizationsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustomizationsArgs {
  @TypeGraphQL.Field(_type => CustomizationsWhereInput, {
    nullable: true
  })
  where?: CustomizationsWhereInput | undefined;
}
