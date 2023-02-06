"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsOrderByWithRelationInput_1 = require("../../../inputs/PaymentsOrderByWithRelationInput");
const PaymentsWhereInput_1 = require("../../../inputs/PaymentsWhereInput");
const PaymentsWhereUniqueInput_1 = require("../../../inputs/PaymentsWhereUniqueInput");
let AggregatePaymentsArgs = class AggregatePaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereInput_1.PaymentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsWhereInput_1.PaymentsWhereInput)
], AggregatePaymentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaymentsOrderByWithRelationInput_1.PaymentsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePaymentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsWhereUniqueInput_1.PaymentsWhereUniqueInput)
], AggregatePaymentsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePaymentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePaymentsArgs.prototype, "skip", void 0);
AggregatePaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePaymentsArgs);
exports.AggregatePaymentsArgs = AggregatePaymentsArgs;
