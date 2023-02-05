"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsCreateInput_1 = require("../../../inputs/PaymentsCreateInput");
const PaymentsUpdateInput_1 = require("../../../inputs/PaymentsUpdateInput");
const PaymentsWhereUniqueInput_1 = require("../../../inputs/PaymentsWhereUniqueInput");
let UpsertOnePaymentsArgs = class UpsertOnePaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput)
], UpsertOnePaymentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsCreateInput_1.PaymentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaymentsCreateInput_1.PaymentsCreateInput)
], UpsertOnePaymentsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsUpdateInput_1.PaymentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaymentsUpdateInput_1.PaymentsUpdateInput)
], UpsertOnePaymentsArgs.prototype, "update", void 0);
UpsertOnePaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOnePaymentsArgs);
exports.UpsertOnePaymentsArgs = UpsertOnePaymentsArgs;
