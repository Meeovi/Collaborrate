"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email_templatesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Email_templatesSumAggregate = class Email_templatesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Email_templatesSumAggregate.prototype, "id", void 0);
Email_templatesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Email_templatesSumAggregate", {
        isAbstract: true
    })
], Email_templatesSumAggregate);
exports.Email_templatesSumAggregate = Email_templatesSumAggregate;
