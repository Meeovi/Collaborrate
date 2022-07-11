import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Core_storeUpdateManyMutationInput } from "../../../inputs/Core_storeUpdateManyMutationInput";
import { Core_storeWhereInput } from "../../../inputs/Core_storeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCore_storeArgs {
  @TypeGraphQL.Field(_type => Core_storeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Core_storeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Core_storeWhereInput, {
    nullable: true
  })
  where?: Core_storeWhereInput | undefined;
}
