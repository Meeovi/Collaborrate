"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let AgreementsSumAggregate = class AgreementsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], AgreementsSumAggregate.prototype, "id", void 0);
AgreementsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AgreementsSumAggregate", {
        isAbstract: true
    })
], AgreementsSumAggregate);
exports.AgreementsSumAggregate = AgreementsSumAggregate;
