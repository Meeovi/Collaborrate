"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyZonesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesOrderByWithRelationInput_1 = require("../../../inputs/ZonesOrderByWithRelationInput");
const ZonesWhereInput_1 = require("../../../inputs/ZonesWhereInput");
const ZonesWhereUniqueInput_1 = require("../../../inputs/ZonesWhereUniqueInput");
const ZonesScalarFieldEnum_1 = require("../../../../enums/ZonesScalarFieldEnum");
let FindManyZonesArgs = class FindManyZonesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereInput_1.ZonesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesWhereInput_1.ZonesWhereInput)
], FindManyZonesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ZonesOrderByWithRelationInput_1.ZonesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyZonesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereUniqueInput_1.ZonesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesWhereUniqueInput_1.ZonesWhereUniqueInput)
], FindManyZonesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyZonesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyZonesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ZonesScalarFieldEnum_1.ZonesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyZonesArgs.prototype, "distinct", void 0);
FindManyZonesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyZonesArgs);
exports.FindManyZonesArgs = FindManyZonesArgs;
