"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstZonesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesOrderByWithRelationInput_1 = require("../../../inputs/ZonesOrderByWithRelationInput");
const ZonesWhereInput_1 = require("../../../inputs/ZonesWhereInput");
const ZonesWhereUniqueInput_1 = require("../../../inputs/ZonesWhereUniqueInput");
const ZonesScalarFieldEnum_1 = require("../../../../enums/ZonesScalarFieldEnum");
let FindFirstZonesOrThrowArgs = class FindFirstZonesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereInput_1.ZonesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesWhereInput_1.ZonesWhereInput)
], FindFirstZonesOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ZonesOrderByWithRelationInput_1.ZonesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstZonesOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereUniqueInput_1.ZonesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesWhereUniqueInput_1.ZonesWhereUniqueInput)
], FindFirstZonesOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstZonesOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstZonesOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ZonesScalarFieldEnum_1.ZonesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstZonesOrThrowArgs.prototype, "distinct", void 0);
FindFirstZonesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstZonesOrThrowArgs);
exports.FindFirstZonesOrThrowArgs = FindFirstZonesOrThrowArgs;
