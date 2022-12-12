"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsWhereInput_1 = require("../../../inputs/PaymentsWhereInput");
let DeleteManyPaymentsArgs = class DeleteManyPaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereInput_1.PaymentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsWhereInput_1.PaymentsWhereInput)
], DeleteManyPaymentsArgs.prototype, "where", void 0);
DeleteManyPaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPaymentsArgs);
exports.DeleteManyPaymentsArgs = DeleteManyPaymentsArgs;
