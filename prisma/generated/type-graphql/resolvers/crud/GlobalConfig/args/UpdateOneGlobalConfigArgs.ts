import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlobalConfigUpdateInput } from "../../../inputs/GlobalConfigUpdateInput";
import { GlobalConfigWhereUniqueInput } from "../../../inputs/GlobalConfigWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGlobalConfigArgs {
  @TypeGraphQL.Field(_type => GlobalConfigUpdateInput, {
    nullable: false
  })
  data!: GlobalConfigUpdateInput;

  @TypeGraphQL.Field(_type => GlobalConfigWhereUniqueInput, {
    nullable: false
  })
  where!: GlobalConfigWhereUniqueInput;
}
