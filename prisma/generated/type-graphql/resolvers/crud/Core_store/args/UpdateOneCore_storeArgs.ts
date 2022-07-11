import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Core_storeUpdateInput } from "../../../inputs/Core_storeUpdateInput";
import { Core_storeWhereUniqueInput } from "../../../inputs/Core_storeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCore_storeArgs {
  @TypeGraphQL.Field(_type => Core_storeUpdateInput, {
    nullable: false
  })
  data!: Core_storeUpdateInput;

  @TypeGraphQL.Field(_type => Core_storeWhereUniqueInput, {
    nullable: false
  })
  where!: Core_storeWhereUniqueInput;
}
