import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Email_templatesUpdateManyMutationInput } from "../../../inputs/Email_templatesUpdateManyMutationInput";
import { Email_templatesWhereInput } from "../../../inputs/Email_templatesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEmail_templatesArgs {
  @TypeGraphQL.Field(_type => Email_templatesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Email_templatesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Email_templatesWhereInput, {
    nullable: true
  })
  where?: Email_templatesWhereInput | undefined;
}
