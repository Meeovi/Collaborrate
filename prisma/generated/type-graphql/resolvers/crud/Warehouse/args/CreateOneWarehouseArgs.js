"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneWarehouseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseCreateInput_1 = require("../../../inputs/WarehouseCreateInput");
let CreateOneWarehouseArgs = class CreateOneWarehouseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseCreateInput_1.WarehouseCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WarehouseCreateInput_1.WarehouseCreateInput)
], CreateOneWarehouseArgs.prototype, "data", void 0);
CreateOneWarehouseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneWarehouseArgs);
exports.CreateOneWarehouseArgs = CreateOneWarehouseArgs;
