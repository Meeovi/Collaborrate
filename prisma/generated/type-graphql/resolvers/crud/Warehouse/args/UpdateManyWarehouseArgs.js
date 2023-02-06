"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWarehouseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseUpdateManyMutationInput_1 = require("../../../inputs/WarehouseUpdateManyMutationInput");
const WarehouseWhereInput_1 = require("../../../inputs/WarehouseWhereInput");
let UpdateManyWarehouseArgs = class UpdateManyWarehouseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseUpdateManyMutationInput_1.WarehouseUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WarehouseUpdateManyMutationInput_1.WarehouseUpdateManyMutationInput)
], UpdateManyWarehouseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseWhereInput_1.WarehouseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseWhereInput_1.WarehouseWhereInput)
], UpdateManyWarehouseArgs.prototype, "where", void 0);
UpdateManyWarehouseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyWarehouseArgs);
exports.UpdateManyWarehouseArgs = UpdateManyWarehouseArgs;
