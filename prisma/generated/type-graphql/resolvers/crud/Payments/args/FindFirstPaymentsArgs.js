"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsOrderByWithRelationInput_1 = require("../../../inputs/PaymentsOrderByWithRelationInput");
const PaymentsWhereInput_1 = require("../../../inputs/PaymentsWhereInput");
const PaymentsWhereUniqueInput_1 = require("../../../inputs/PaymentsWhereUniqueInput");
const PaymentsScalarFieldEnum_1 = require("../../../../enums/PaymentsScalarFieldEnum");
let FindFirstPaymentsArgs = class FindFirstPaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereInput_1.PaymentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsWhereInput_1.PaymentsWhereInput)
], FindFirstPaymentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaymentsOrderByWithRelationInput_1.PaymentsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPaymentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput)
], FindFirstPaymentsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPaymentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPaymentsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaymentsScalarFieldEnum_1.PaymentsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPaymentsArgs.prototype, "distinct", void 0);
FindFirstPaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPaymentsArgs);
exports.FindFirstPaymentsArgs = FindFirstPaymentsArgs;
