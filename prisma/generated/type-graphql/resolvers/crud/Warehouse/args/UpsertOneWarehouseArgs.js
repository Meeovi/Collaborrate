"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneWarehouseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseCreateInput_1 = require("../../../inputs/WarehouseCreateInput");
const WarehouseUpdateInput_1 = require("../../../inputs/WarehouseUpdateInput");
const WarehouseWhereUniqueInput_1 = require("../../../inputs/WarehouseWhereUniqueInput");
let UpsertOneWarehouseArgs = class UpsertOneWarehouseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput)
], UpsertOneWarehouseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseCreateInput_1.WarehouseCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WarehouseCreateInput_1.WarehouseCreateInput)
], UpsertOneWarehouseArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseUpdateInput_1.WarehouseUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WarehouseUpdateInput_1.WarehouseUpdateInput)
], UpsertOneWarehouseArgs.prototype, "update", void 0);
UpsertOneWarehouseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneWarehouseArgs);
exports.UpsertOneWarehouseArgs = UpsertOneWarehouseArgs;
