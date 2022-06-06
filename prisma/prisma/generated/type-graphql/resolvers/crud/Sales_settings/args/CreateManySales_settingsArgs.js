"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySales_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsCreateManyInput_1 = require("../../../inputs/Sales_settingsCreateManyInput");
let CreateManySales_settingsArgs = class CreateManySales_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sales_settingsCreateManyInput_1.Sales_settingsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySales_settingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySales_settingsArgs.prototype, "skipDuplicates", void 0);
CreateManySales_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySales_settingsArgs);
exports.CreateManySales_settingsArgs = CreateManySales_settingsArgs;
