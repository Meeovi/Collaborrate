"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySales_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsWhereInput_1 = require("../../../inputs/Sales_settingsWhereInput");
let DeleteManySales_settingsArgs = class DeleteManySales_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsWhereInput_1.Sales_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsWhereInput_1.Sales_settingsWhereInput)
], DeleteManySales_settingsArgs.prototype, "where", void 0);
DeleteManySales_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySales_settingsArgs);
exports.DeleteManySales_settingsArgs = DeleteManySales_settingsArgs;
