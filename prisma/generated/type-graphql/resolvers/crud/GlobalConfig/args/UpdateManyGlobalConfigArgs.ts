import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlobalConfigUpdateManyMutationInput } from "../../../inputs/GlobalConfigUpdateManyMutationInput";
import { GlobalConfigWhereInput } from "../../../inputs/GlobalConfigWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGlobalConfigArgs {
  @TypeGraphQL.Field(_type => GlobalConfigUpdateManyMutationInput, {
    nullable: false
  })
  data!: GlobalConfigUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GlobalConfigWhereInput, {
    nullable: true
  })
  where?: GlobalConfigWhereInput | undefined;
}
