"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupCreateInput_1 = require("../../../inputs/Customer_groupCreateInput");
const Customer_groupUpdateInput_1 = require("../../../inputs/Customer_groupUpdateInput");
const Customer_groupWhereUniqueInput_1 = require("../../../inputs/Customer_groupWhereUniqueInput");
let UpsertCustomer_groupArgs = class UpsertCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput)
], UpsertCustomer_groupArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCreateInput_1.Customer_groupCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupCreateInput_1.Customer_groupCreateInput)
], UpsertCustomer_groupArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupUpdateInput_1.Customer_groupUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupUpdateInput_1.Customer_groupUpdateInput)
], UpsertCustomer_groupArgs.prototype, "update", void 0);
UpsertCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCustomer_groupArgs);
exports.UpsertCustomer_groupArgs = UpsertCustomer_groupArgs;
