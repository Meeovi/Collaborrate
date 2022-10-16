"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyWarehouseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseWhereInput_1 = require("../../../inputs/WarehouseWhereInput");
let DeleteManyWarehouseArgs = class DeleteManyWarehouseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseWhereInput_1.WarehouseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseWhereInput_1.WarehouseWhereInput)
], DeleteManyWarehouseArgs.prototype, "where", void 0);
DeleteManyWarehouseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyWarehouseArgs);
exports.DeleteManyWarehouseArgs = DeleteManyWarehouseArgs;
