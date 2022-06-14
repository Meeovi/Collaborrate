import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Core_storeCreateInput } from "../../../inputs/Core_storeCreateInput";
import { Core_storeUpdateInput } from "../../../inputs/Core_storeUpdateInput";
import { Core_storeWhereUniqueInput } from "../../../inputs/Core_storeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCore_storeArgs {
  @TypeGraphQL.Field(_type => Core_storeWhereUniqueInput, {
    nullable: false
  })
  where!: Core_storeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Core_storeCreateInput, {
    nullable: false
  })
  create!: Core_storeCreateInput;

  @TypeGraphQL.Field(_type => Core_storeUpdateInput, {
    nullable: false
  })
  update!: Core_storeUpdateInput;
}
