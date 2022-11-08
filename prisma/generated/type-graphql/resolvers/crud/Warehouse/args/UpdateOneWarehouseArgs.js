"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneWarehouseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseUpdateInput_1 = require("../../../inputs/WarehouseUpdateInput");
const WarehouseWhereUniqueInput_1 = require("../../../inputs/WarehouseWhereUniqueInput");
let UpdateOneWarehouseArgs = class UpdateOneWarehouseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseUpdateInput_1.WarehouseUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WarehouseUpdateInput_1.WarehouseUpdateInput)
], UpdateOneWarehouseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput)
], UpdateOneWarehouseArgs.prototype, "where", void 0);
UpdateOneWarehouseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneWarehouseArgs);
exports.UpdateOneWarehouseArgs = UpdateOneWarehouseArgs;
