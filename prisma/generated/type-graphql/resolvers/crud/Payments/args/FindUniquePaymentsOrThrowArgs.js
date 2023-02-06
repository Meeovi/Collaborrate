"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePaymentsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsWhereUniqueInput_1 = require("../../../inputs/PaymentsWhereUniqueInput");
let FindUniquePaymentsOrThrowArgs = class FindUniquePaymentsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput)
], FindUniquePaymentsOrThrowArgs.prototype, "where", void 0);
FindUniquePaymentsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePaymentsOrThrowArgs);
exports.FindUniquePaymentsOrThrowArgs = FindUniquePaymentsOrThrowArgs;
