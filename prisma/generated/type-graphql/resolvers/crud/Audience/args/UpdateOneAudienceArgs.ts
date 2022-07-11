import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudienceUpdateInput } from "../../../inputs/AudienceUpdateInput";
import { AudienceWhereUniqueInput } from "../../../inputs/AudienceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAudienceArgs {
  @TypeGraphQL.Field(_type => AudienceUpdateInput, {
    nullable: false
  })
  data!: AudienceUpdateInput;

  @TypeGraphQL.Field(_type => AudienceWhereUniqueInput, {
    nullable: false
  })
  where!: AudienceWhereUniqueInput;
}
