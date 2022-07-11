import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EndofshiftCreateInput } from "../../../inputs/EndofshiftCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEndofshiftArgs {
  @TypeGraphQL.Field(_type => EndofshiftCreateInput, {
    nullable: false
  })
  data!: EndofshiftCreateInput;
}
