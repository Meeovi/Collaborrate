"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsOrderByWithRelationInput_1 = require("../../../inputs/PaymentsOrderByWithRelationInput");
const PaymentsWhereInput_1 = require("../../../inputs/PaymentsWhereInput");
const PaymentsWhereUniqueInput_1 = require("../../../inputs/PaymentsWhereUniqueInput");
const PaymentsScalarFieldEnum_1 = require("../../../../enums/PaymentsScalarFieldEnum");
let FindManyPaymentsArgs = class FindManyPaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereInput_1.PaymentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsWhereInput_1.PaymentsWhereInput)
], FindManyPaymentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaymentsOrderByWithRelationInput_1.PaymentsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyPaymentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput)
], FindManyPaymentsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyPaymentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyPaymentsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaymentsScalarFieldEnum_1.PaymentsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyPaymentsArgs.prototype, "distinct", void 0);
FindManyPaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyPaymentsArgs);
exports.FindManyPaymentsArgs = FindManyPaymentsArgs;
