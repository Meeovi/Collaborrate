"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVendorsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsOrderByWithRelationInput_1 = require("../../../inputs/VendorsOrderByWithRelationInput");
const VendorsWhereInput_1 = require("../../../inputs/VendorsWhereInput");
const VendorsWhereUniqueInput_1 = require("../../../inputs/VendorsWhereUniqueInput");
const VendorsScalarFieldEnum_1 = require("../../../../enums/VendorsScalarFieldEnum");
let FindFirstVendorsArgs = class FindFirstVendorsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsWhereInput_1.VendorsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsWhereInput_1.VendorsWhereInput)
], FindFirstVendorsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VendorsOrderByWithRelationInput_1.VendorsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstVendorsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsWhereUniqueInput_1.VendorsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsWhereUniqueInput_1.VendorsWhereUniqueInput)
], FindFirstVendorsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstVendorsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstVendorsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VendorsScalarFieldEnum_1.VendorsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstVendorsArgs.prototype, "distinct", void 0);
FindFirstVendorsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstVendorsArgs);
exports.FindFirstVendorsArgs = FindFirstVendorsArgs;
