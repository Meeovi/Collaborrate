import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudienceUpdateManyMutationInput } from "../../../inputs/AudienceUpdateManyMutationInput";
import { AudienceWhereInput } from "../../../inputs/AudienceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAudienceArgs {
  @TypeGraphQL.Field(_type => AudienceUpdateManyMutationInput, {
    nullable: false
  })
  data!: AudienceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AudienceWhereInput, {
    nullable: true
  })
  where?: AudienceWhereInput | undefined;
}
