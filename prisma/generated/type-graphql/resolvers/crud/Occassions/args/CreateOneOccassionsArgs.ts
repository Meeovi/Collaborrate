import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccassionsCreateInput } from "../../../inputs/OccassionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOccassionsArgs {
  @TypeGraphQL.Field(_type => OccassionsCreateInput, {
    nullable: false
  })
  data!: OccassionsCreateInput;
}
