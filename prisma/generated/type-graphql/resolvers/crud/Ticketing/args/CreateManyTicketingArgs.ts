import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketingCreateManyInput } from "../../../inputs/TicketingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTicketingArgs {
  @TypeGraphQL.Field(_type => [TicketingCreateManyInput], {
    nullable: false
  })
  data!: TicketingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
