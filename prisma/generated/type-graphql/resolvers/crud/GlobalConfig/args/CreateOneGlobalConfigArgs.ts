import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlobalConfigCreateInput } from "../../../inputs/GlobalConfigCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGlobalConfigArgs {
  @TypeGraphQL.Field(_type => GlobalConfigCreateInput, {
    nullable: false
  })
  data!: GlobalConfigCreateInput;
}
