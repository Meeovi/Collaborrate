import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApitokenCreateInput } from "../../../inputs/ApitokenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApitokenArgs {
  @TypeGraphQL.Field(_type => ApitokenCreateInput, {
    nullable: false
  })
  data!: ApitokenCreateInput;
}
