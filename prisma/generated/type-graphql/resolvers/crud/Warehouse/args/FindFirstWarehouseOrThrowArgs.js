"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWarehouseOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseOrderByWithRelationInput_1 = require("../../../inputs/WarehouseOrderByWithRelationInput");
const WarehouseWhereInput_1 = require("../../../inputs/WarehouseWhereInput");
const WarehouseWhereUniqueInput_1 = require("../../../inputs/WarehouseWhereUniqueInput");
const WarehouseScalarFieldEnum_1 = require("../../../../enums/WarehouseScalarFieldEnum");
let FindFirstWarehouseOrThrowArgs = class FindFirstWarehouseOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseWhereInput_1.WarehouseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseWhereInput_1.WarehouseWhereInput)
], FindFirstWarehouseOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WarehouseOrderByWithRelationInput_1.WarehouseOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWarehouseOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput)
], FindFirstWarehouseOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWarehouseOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWarehouseOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WarehouseScalarFieldEnum_1.WarehouseScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWarehouseOrThrowArgs.prototype, "distinct", void 0);
FindFirstWarehouseOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstWarehouseOrThrowArgs);
exports.FindFirstWarehouseOrThrowArgs = FindFirstWarehouseOrThrowArgs;
