"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstZonesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesOrderByWithRelationInput_1 = require("../../../inputs/ZonesOrderByWithRelationInput");
const ZonesWhereInput_1 = require("../../../inputs/ZonesWhereInput");
const ZonesWhereUniqueInput_1 = require("../../../inputs/ZonesWhereUniqueInput");
const ZonesScalarFieldEnum_1 = require("../../../../enums/ZonesScalarFieldEnum");
let FindFirstZonesArgs = class FindFirstZonesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereInput_1.ZonesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesWhereInput_1.ZonesWhereInput)
], FindFirstZonesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ZonesOrderByWithRelationInput_1.ZonesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstZonesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereUniqueInput_1.ZonesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesWhereUniqueInput_1.ZonesWhereUniqueInput)
], FindFirstZonesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstZonesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstZonesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ZonesScalarFieldEnum_1.ZonesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstZonesArgs.prototype, "distinct", void 0);
FindFirstZonesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstZonesArgs);
exports.FindFirstZonesArgs = FindFirstZonesArgs;
