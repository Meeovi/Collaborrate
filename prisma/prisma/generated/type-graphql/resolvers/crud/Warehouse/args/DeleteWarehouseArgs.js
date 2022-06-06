"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWarehouseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseWhereUniqueInput_1 = require("../../../inputs/WarehouseWhereUniqueInput");
let DeleteWarehouseArgs = class DeleteWarehouseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput)
], DeleteWarehouseArgs.prototype, "where", void 0);
DeleteWarehouseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteWarehouseArgs);
exports.DeleteWarehouseArgs = DeleteWarehouseArgs;
