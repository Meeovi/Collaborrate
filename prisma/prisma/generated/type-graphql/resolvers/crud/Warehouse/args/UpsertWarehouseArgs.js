"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertWarehouseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseCreateInput_1 = require("../../../inputs/WarehouseCreateInput");
const WarehouseUpdateInput_1 = require("../../../inputs/WarehouseUpdateInput");
const WarehouseWhereUniqueInput_1 = require("../../../inputs/WarehouseWhereUniqueInput");
let UpsertWarehouseArgs = class UpsertWarehouseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput)
], UpsertWarehouseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseCreateInput_1.WarehouseCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WarehouseCreateInput_1.WarehouseCreateInput)
], UpsertWarehouseArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseUpdateInput_1.WarehouseUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WarehouseUpdateInput_1.WarehouseUpdateInput)
], UpsertWarehouseArgs.prototype, "update", void 0);
UpsertWarehouseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertWarehouseArgs);
exports.UpsertWarehouseArgs = UpsertWarehouseArgs;
