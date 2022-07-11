import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessagesCreateManyInput } from "../../../inputs/MessagesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMessagesArgs {
  @TypeGraphQL.Field(_type => [MessagesCreateManyInput], {
    nullable: false
  })
  data!: MessagesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
