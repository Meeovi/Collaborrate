"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySales_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsUpdateManyMutationInput_1 = require("../../../inputs/Sales_settingsUpdateManyMutationInput");
const Sales_settingsWhereInput_1 = require("../../../inputs/Sales_settingsWhereInput");
let UpdateManySales_settingsArgs = class UpdateManySales_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsUpdateManyMutationInput_1.Sales_settingsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Sales_settingsUpdateManyMutationInput_1.Sales_settingsUpdateManyMutationInput)
], UpdateManySales_settingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsWhereInput_1.Sales_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsWhereInput_1.Sales_settingsWhereInput)
], UpdateManySales_settingsArgs.prototype, "where", void 0);
UpdateManySales_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySales_settingsArgs);
exports.UpdateManySales_settingsArgs = UpdateManySales_settingsArgs;
