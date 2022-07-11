import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudienceCreateManyInput } from "../../../inputs/AudienceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAudienceArgs {
  @TypeGraphQL.Field(_type => [AudienceCreateManyInput], {
    nullable: false
  })
  data!: AudienceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
