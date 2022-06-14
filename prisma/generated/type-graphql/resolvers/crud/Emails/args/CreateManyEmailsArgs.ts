import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailsCreateManyInput } from "../../../inputs/EmailsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEmailsArgs {
  @TypeGraphQL.Field(_type => [EmailsCreateManyInput], {
    nullable: false
  })
  data!: EmailsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
