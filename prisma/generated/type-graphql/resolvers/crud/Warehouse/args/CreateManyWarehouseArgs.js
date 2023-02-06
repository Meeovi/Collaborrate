"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyWarehouseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseCreateManyInput_1 = require("../../../inputs/WarehouseCreateManyInput");
let CreateManyWarehouseArgs = class CreateManyWarehouseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WarehouseCreateManyInput_1.WarehouseCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyWarehouseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyWarehouseArgs.prototype, "skipDuplicates", void 0);
CreateManyWarehouseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyWarehouseArgs);
exports.CreateManyWarehouseArgs = CreateManyWarehouseArgs;
