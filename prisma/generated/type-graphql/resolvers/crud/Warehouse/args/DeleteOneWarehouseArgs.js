"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneWarehouseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseWhereUniqueInput_1 = require("../../../inputs/WarehouseWhereUniqueInput");
let DeleteOneWarehouseArgs = class DeleteOneWarehouseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput)
], DeleteOneWarehouseArgs.prototype, "where", void 0);
DeleteOneWarehouseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneWarehouseArgs);
exports.DeleteOneWarehouseArgs = DeleteOneWarehouseArgs;
