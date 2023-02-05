"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsWhereUniqueInput_1 = require("../../../inputs/PaymentsWhereUniqueInput");
let FindUniquePaymentsArgs = class FindUniquePaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput)
], FindUniquePaymentsArgs.prototype, "where", void 0);
FindUniquePaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePaymentsArgs);
exports.FindUniquePaymentsArgs = FindUniquePaymentsArgs;
