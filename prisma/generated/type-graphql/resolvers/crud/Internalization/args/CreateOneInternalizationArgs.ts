import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InternalizationCreateInput } from "../../../inputs/InternalizationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneInternalizationArgs {
  @TypeGraphQL.Field(_type => InternalizationCreateInput, {
    nullable: false
  })
  data!: InternalizationCreateInput;
}
