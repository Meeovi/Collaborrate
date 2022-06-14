import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsCreateManyWishlists_occassionsTowishlistsInput } from "../inputs/OccassionsCreateManyWishlists_occassionsTowishlistsInput";

@TypeGraphQL.InputType("OccassionsCreateManyWishlists_occassionsTowishlistsInputEnvelope", {
  isAbstract: true
})
export class OccassionsCreateManyWishlists_occassionsTowishlistsInputEnvelope {
  @TypeGraphQL.Field(_type => [OccassionsCreateManyWishlists_occassionsTowishlistsInput], {
    nullable: false
  })
  data!: OccassionsCreateManyWishlists_occassionsTowishlistsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
