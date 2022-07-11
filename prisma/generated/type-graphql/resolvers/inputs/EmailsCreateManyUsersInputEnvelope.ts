import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsCreateManyUsersInput } from "../inputs/EmailsCreateManyUsersInput";

@TypeGraphQL.InputType("EmailsCreateManyUsersInputEnvelope", {
  isAbstract: true
})
export class EmailsCreateManyUsersInputEnvelope {
  @TypeGraphQL.Field(_type => [EmailsCreateManyUsersInput], {
    nullable: false
  })
  data!: EmailsCreateManyUsersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
