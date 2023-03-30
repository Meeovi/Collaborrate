"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstManufacturerOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerOrderByWithRelationInput_1 = require("../../../inputs/ManufacturerOrderByWithRelationInput");
const ManufacturerWhereInput_1 = require("../../../inputs/ManufacturerWhereInput");
const ManufacturerWhereUniqueInput_1 = require("../../../inputs/ManufacturerWhereUniqueInput");
const ManufacturerScalarFieldEnum_1 = require("../../../../enums/ManufacturerScalarFieldEnum");
let FindFirstManufacturerOrThrowArgs = class FindFirstManufacturerOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerWhereInput_1.ManufacturerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerWhereInput_1.ManufacturerWhereInput)
], FindFirstManufacturerOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ManufacturerOrderByWithRelationInput_1.ManufacturerOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstManufacturerOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput_1.ManufacturerWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerWhereUniqueInput_1.ManufacturerWhereUniqueInput)
], FindFirstManufacturerOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstManufacturerOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstManufacturerOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ManufacturerScalarFieldEnum_1.ManufacturerScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstManufacturerOrThrowArgs.prototype, "distinct", void 0);
FindFirstManufacturerOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstManufacturerOrThrowArgs);
exports.FindFirstManufacturerOrThrowArgs = FindFirstManufacturerOrThrowArgs;
