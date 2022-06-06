"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsWhereUniqueInput_1 = require("../../../inputs/PaymentsWhereUniqueInput");
let DeletePaymentsArgs = class DeletePaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput)
], DeletePaymentsArgs.prototype, "where", void 0);
DeletePaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeletePaymentsArgs);
exports.DeletePaymentsArgs = DeletePaymentsArgs;
