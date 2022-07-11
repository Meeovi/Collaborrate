import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudienceWhereInput } from "../../../inputs/AudienceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAudienceArgs {
  @TypeGraphQL.Field(_type => AudienceWhereInput, {
    nullable: true
  })
  where?: AudienceWhereInput | undefined;
}
