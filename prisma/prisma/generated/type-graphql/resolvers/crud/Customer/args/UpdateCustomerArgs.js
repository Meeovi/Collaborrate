"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerUpdateInput_1 = require("../../../inputs/CustomerUpdateInput");
const CustomerWhereUniqueInput_1 = require("../../../inputs/CustomerWhereUniqueInput");
let UpdateCustomerArgs = class UpdateCustomerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateInput_1.CustomerUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerUpdateInput_1.CustomerUpdateInput)
], UpdateCustomerArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], UpdateCustomerArgs.prototype, "where", void 0);
UpdateCustomerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCustomerArgs);
exports.UpdateCustomerArgs = UpdateCustomerArgs;
