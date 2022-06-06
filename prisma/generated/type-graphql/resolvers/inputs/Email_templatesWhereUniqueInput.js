"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email_templatesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Email_templatesWhereUniqueInput = class Email_templatesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Email_templatesWhereUniqueInput.prototype, "id", void 0);
Email_templatesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Email_templatesWhereUniqueInput", {
        isAbstract: true
    })
], Email_templatesWhereUniqueInput);
exports.Email_templatesWhereUniqueInput = Email_templatesWhereUniqueInput;
