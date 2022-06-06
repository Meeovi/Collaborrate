"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsOrderByWithRelationInput_1 = require("../../../inputs/ShipmentsOrderByWithRelationInput");
const ShipmentsWhereInput_1 = require("../../../inputs/ShipmentsWhereInput");
const ShipmentsWhereUniqueInput_1 = require("../../../inputs/ShipmentsWhereUniqueInput");
let AggregateShipmentsArgs = class AggregateShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereInput_1.ShipmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereInput_1.ShipmentsWhereInput)
], AggregateShipmentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShipmentsOrderByWithRelationInput_1.ShipmentsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateShipmentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput)
], AggregateShipmentsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateShipmentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateShipmentsArgs.prototype, "skip", void 0);
AggregateShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateShipmentsArgs);
exports.AggregateShipmentsArgs = AggregateShipmentsArgs;
