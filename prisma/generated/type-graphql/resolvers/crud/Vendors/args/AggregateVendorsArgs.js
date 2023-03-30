"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVendorsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsOrderByWithRelationInput_1 = require("../../../inputs/VendorsOrderByWithRelationInput");
const VendorsWhereInput_1 = require("../../../inputs/VendorsWhereInput");
const VendorsWhereUniqueInput_1 = require("../../../inputs/VendorsWhereUniqueInput");
let AggregateVendorsArgs = class AggregateVendorsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsWhereInput_1.VendorsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsWhereInput_1.VendorsWhereInput)
], AggregateVendorsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VendorsOrderByWithRelationInput_1.VendorsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateVendorsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsWhereUniqueInput_1.VendorsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsWhereUniqueInput_1.VendorsWhereUniqueInput)
], AggregateVendorsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateVendorsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateVendorsArgs.prototype, "skip", void 0);
AggregateVendorsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateVendorsArgs);
exports.AggregateVendorsArgs = AggregateVendorsArgs;
