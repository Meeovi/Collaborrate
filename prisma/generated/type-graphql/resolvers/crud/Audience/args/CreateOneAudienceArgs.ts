import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudienceCreateInput } from "../../../inputs/AudienceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAudienceArgs {
  @TypeGraphQL.Field(_type => AudienceCreateInput, {
    nullable: false
  })
  data!: AudienceCreateInput;
}
