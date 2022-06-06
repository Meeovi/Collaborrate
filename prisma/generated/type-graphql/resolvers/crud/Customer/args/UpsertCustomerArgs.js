"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCustomerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateInput_1 = require("../../../inputs/CustomerCreateInput");
const CustomerUpdateInput_1 = require("../../../inputs/CustomerUpdateInput");
const CustomerWhereUniqueInput_1 = require("../../../inputs/CustomerWhereUniqueInput");
let UpsertCustomerArgs = class UpsertCustomerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], UpsertCustomerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateInput_1.CustomerCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerCreateInput_1.CustomerCreateInput)
], UpsertCustomerArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateInput_1.CustomerUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerUpdateInput_1.CustomerUpdateInput)
], UpsertCustomerArgs.prototype, "update", void 0);
UpsertCustomerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCustomerArgs);
exports.UpsertCustomerArgs = UpsertCustomerArgs;
