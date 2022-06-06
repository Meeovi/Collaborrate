"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerWhereUniqueInput_1 = require("../../../inputs/CustomerWhereUniqueInput");
let DeleteCustomerArgs = class DeleteCustomerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], DeleteCustomerArgs.prototype, "where", void 0);
DeleteCustomerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCustomerArgs);
exports.DeleteCustomerArgs = DeleteCustomerArgs;
