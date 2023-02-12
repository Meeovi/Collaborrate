"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsOrderByWithRelationInput_1 = require("../../../inputs/ShipmentsOrderByWithRelationInput");
const ShipmentsWhereInput_1 = require("../../../inputs/ShipmentsWhereInput");
const ShipmentsWhereUniqueInput_1 = require("../../../inputs/ShipmentsWhereUniqueInput");
const ShipmentsScalarFieldEnum_1 = require("../../../../enums/ShipmentsScalarFieldEnum");
let FindManyShipmentsArgs = class FindManyShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereInput_1.ShipmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereInput_1.ShipmentsWhereInput)
], FindManyShipmentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShipmentsOrderByWithRelationInput_1.ShipmentsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyShipmentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput)
], FindManyShipmentsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyShipmentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyShipmentsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShipmentsScalarFieldEnum_1.ShipmentsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyShipmentsArgs.prototype, "distinct", void 0);
FindManyShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyShipmentsArgs);
exports.FindManyShipmentsArgs = FindManyShipmentsArgs;
