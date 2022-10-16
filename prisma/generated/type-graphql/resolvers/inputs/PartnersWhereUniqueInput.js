"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let PartnersWhereUniqueInput = class PartnersWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], PartnersWhereUniqueInput.prototype, "id", void 0);
PartnersWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PartnersWhereUniqueInput", {
        isAbstract: true
    })
], PartnersWhereUniqueInput);
exports.PartnersWhereUniqueInput = PartnersWhereUniqueInput;
