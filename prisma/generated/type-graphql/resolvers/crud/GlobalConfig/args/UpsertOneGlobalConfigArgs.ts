import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlobalConfigCreateInput } from "../../../inputs/GlobalConfigCreateInput";
import { GlobalConfigUpdateInput } from "../../../inputs/GlobalConfigUpdateInput";
import { GlobalConfigWhereUniqueInput } from "../../../inputs/GlobalConfigWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGlobalConfigArgs {
  @TypeGraphQL.Field(_type => GlobalConfigWhereUniqueInput, {
    nullable: false
  })
  where!: GlobalConfigWhereUniqueInput;

  @TypeGraphQL.Field(_type => GlobalConfigCreateInput, {
    nullable: false
  })
  create!: GlobalConfigCreateInput;

  @TypeGraphQL.Field(_type => GlobalConfigUpdateInput, {
    nullable: false
  })
  update!: GlobalConfigUpdateInput;
}
