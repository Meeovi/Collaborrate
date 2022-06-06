"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWarehouseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseOrderByWithRelationInput_1 = require("../../../inputs/WarehouseOrderByWithRelationInput");
const WarehouseWhereInput_1 = require("../../../inputs/WarehouseWhereInput");
const WarehouseWhereUniqueInput_1 = require("../../../inputs/WarehouseWhereUniqueInput");
let AggregateWarehouseArgs = class AggregateWarehouseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseWhereInput_1.WarehouseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseWhereInput_1.WarehouseWhereInput)
], AggregateWarehouseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WarehouseOrderByWithRelationInput_1.WarehouseOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateWarehouseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput)
], AggregateWarehouseArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateWarehouseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateWarehouseArgs.prototype, "skip", void 0);
AggregateWarehouseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateWarehouseArgs);
exports.AggregateWarehouseArgs = AggregateWarehouseArgs;
