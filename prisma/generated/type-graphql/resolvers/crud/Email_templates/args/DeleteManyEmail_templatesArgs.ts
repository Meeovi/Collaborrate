import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Email_templatesWhereInput } from "../../../inputs/Email_templatesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEmail_templatesArgs {
  @TypeGraphQL.Field(_type => Email_templatesWhereInput, {
    nullable: true
  })
  where?: Email_templatesWhereInput | undefined;
}
