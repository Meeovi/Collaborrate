import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Email_templatesCreateManyInput } from "../../../inputs/Email_templatesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEmail_templatesArgs {
  @TypeGraphQL.Field(_type => [Email_templatesCreateManyInput], {
    nullable: false
  })
  data!: Email_templatesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
