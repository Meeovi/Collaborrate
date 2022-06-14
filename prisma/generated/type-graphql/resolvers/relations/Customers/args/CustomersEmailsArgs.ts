import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailsOrderByWithRelationInput } from "../../../inputs/EmailsOrderByWithRelationInput";
import { EmailsWhereInput } from "../../../inputs/EmailsWhereInput";
import { EmailsWhereUniqueInput } from "../../../inputs/EmailsWhereUniqueInput";
import { EmailsScalarFieldEnum } from "../../../../enums/EmailsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CustomersEmailsArgs {
  @TypeGraphQL.Field(_type => EmailsWhereInput, {
    nullable: true
  })
  where?: EmailsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EmailsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EmailsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EmailsWhereUniqueInput, {
    nullable: true
  })
  cursor?: EmailsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EmailsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "subject" | "content" | "cust_id" | "bcc" | "cc" | "from" | "media" | "staff_id"> | undefined;
}
