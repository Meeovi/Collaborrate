"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyManufacturerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerOrderByWithRelationInput_1 = require("../../../inputs/ManufacturerOrderByWithRelationInput");
const ManufacturerWhereInput_1 = require("../../../inputs/ManufacturerWhereInput");
const ManufacturerWhereUniqueInput_1 = require("../../../inputs/ManufacturerWhereUniqueInput");
const ManufacturerScalarFieldEnum_1 = require("../../../../enums/ManufacturerScalarFieldEnum");
let FindManyManufacturerArgs = class FindManyManufacturerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerWhereInput_1.ManufacturerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerWhereInput_1.ManufacturerWhereInput)
], FindManyManufacturerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ManufacturerOrderByWithRelationInput_1.ManufacturerOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyManufacturerArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput_1.ManufacturerWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerWhereUniqueInput_1.ManufacturerWhereUniqueInput)
], FindManyManufacturerArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyManufacturerArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyManufacturerArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ManufacturerScalarFieldEnum_1.ManufacturerScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyManufacturerArgs.prototype, "distinct", void 0);
FindManyManufacturerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyManufacturerArgs);
exports.FindManyManufacturerArgs = FindManyManufacturerArgs;
