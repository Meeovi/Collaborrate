import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudienceWhereUniqueInput } from "../../../inputs/AudienceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneAudienceArgs {
  @TypeGraphQL.Field(_type => AudienceWhereUniqueInput, {
    nullable: false
  })
  where!: AudienceWhereUniqueInput;
}
