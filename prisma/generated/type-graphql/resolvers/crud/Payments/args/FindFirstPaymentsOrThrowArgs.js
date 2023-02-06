"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPaymentsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsOrderByWithRelationInput_1 = require("../../../inputs/PaymentsOrderByWithRelationInput");
const PaymentsWhereInput_1 = require("../../../inputs/PaymentsWhereInput");
const PaymentsWhereUniqueInput_1 = require("../../../inputs/PaymentsWhereUniqueInput");
const PaymentsScalarFieldEnum_1 = require("../../../../enums/PaymentsScalarFieldEnum");
let FindFirstPaymentsOrThrowArgs = class FindFirstPaymentsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereInput_1.PaymentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsWhereInput_1.PaymentsWhereInput)
], FindFirstPaymentsOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaymentsOrderByWithRelationInput_1.PaymentsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPaymentsOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput)
], FindFirstPaymentsOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPaymentsOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPaymentsOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaymentsScalarFieldEnum_1.PaymentsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPaymentsOrThrowArgs.prototype, "distinct", void 0);
FindFirstPaymentsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPaymentsOrThrowArgs);
exports.FindFirstPaymentsOrThrowArgs = FindFirstPaymentsOrThrowArgs;
