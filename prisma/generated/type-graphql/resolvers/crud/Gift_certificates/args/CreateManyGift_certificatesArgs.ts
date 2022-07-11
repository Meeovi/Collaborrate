import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Gift_certificatesCreateManyInput } from "../../../inputs/Gift_certificatesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGift_certificatesArgs {
  @TypeGraphQL.Field(_type => [Gift_certificatesCreateManyInput], {
    nullable: false
  })
  data!: Gift_certificatesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
