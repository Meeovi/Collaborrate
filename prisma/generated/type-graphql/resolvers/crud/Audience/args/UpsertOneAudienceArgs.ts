import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudienceCreateInput } from "../../../inputs/AudienceCreateInput";
import { AudienceUpdateInput } from "../../../inputs/AudienceUpdateInput";
import { AudienceWhereUniqueInput } from "../../../inputs/AudienceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAudienceArgs {
  @TypeGraphQL.Field(_type => AudienceWhereUniqueInput, {
    nullable: false
  })
  where!: AudienceWhereUniqueInput;

  @TypeGraphQL.Field(_type => AudienceCreateInput, {
    nullable: false
  })
  create!: AudienceCreateInput;

  @TypeGraphQL.Field(_type => AudienceUpdateInput, {
    nullable: false
  })
  update!: AudienceUpdateInput;
}
